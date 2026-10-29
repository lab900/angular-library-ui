import { Component, inject, signal, viewChild } from '@angular/core';
import { ComponentFixture, DeferBlockBehavior, DeferBlockState, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { provideRouter, Router } from '@angular/router';
import { TESTING_PROVIDERS } from '../../../testing/testing.providers';
import { Lab900TableComponent, TableRowAction } from './table.component';
import { Lab900TableRowDetailDirective } from '../../directives/table-row-detail.directive';
import { ExpandableRows } from '../../models/table-expandable-rows.model';
import { TableCell } from '../../models/table-cell.model';
import { Lab900TableTab } from '../../models/table-tabs.model';
import { Lab900TableRowLink } from '../../models/table-row-link.model';
import { CellInputEditorComponent } from '../../cell-editors/cell-input-editor/cell-input-editor.component';

interface Row {
  id: number;
  name: string;
}

@Component({
  imports: [Lab900TableComponent, Lab900TableRowDetailDirective],
  template: `
    <lab900-table
      [tableCells]="tableCells"
      [data]="data()"
      [trackByTableFn]="trackBy"
      [tableTabs]="tabs()"
      [expandableRows]="expandableRows()"
      [onRowClick]="onRowClick"
      [(expandedRows)]="expandedRows"
      (rowExpandToggle)="toggles.push($event)">
      @if (withDetail()) {
        <ng-template lab900TableRowDetail [lab900TableRowDetailOf]="data()" let-row let-index="index">
          <span class="detail">{{ row.name }}-{{ index }}</span>
        </ng-template>
      }
    </lab900-table>
  `,
})
class HostComponent {
  public readonly table = viewChild.required(Lab900TableComponent<Row>);
  public readonly tableCells: TableCell<Row>[] = [{ key: 'name', label: 'Name' }];
  public readonly data = signal<Row[]>([
    { id: 1, name: 'john' },
    { id: 2, name: 'lucie' },
  ]);
  public readonly tabs = signal<Lab900TableTab<string, Row>[] | undefined>(undefined);
  public readonly expandableRows = signal<ExpandableRows<Row> | undefined>(undefined);
  public readonly expandedRows = signal<Row[]>([]);
  public readonly withDetail = signal(true);
  public readonly toggles: { row: Row; expanded: boolean }[] = [];
  public readonly onRowClick = jest.fn();
  public readonly trackBy = (_: number, row: Row): number => row.id;
}

describe('Lab900TableComponent expandable rows', () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;

  const element = (): HTMLElement => fixture.nativeElement;
  const dataRows = (): HTMLTableRowElement[] =>
    Array.from(element().querySelectorAll<HTMLTableRowElement>('tr.mat-mdc-row:not(.lab900-row-detail)'));
  const detailRows = (): HTMLTableRowElement[] =>
    Array.from(element().querySelectorAll<HTMLTableRowElement>('tr.lab900-row-detail'));
  const details = (): string[] =>
    Array.from(element().querySelectorAll('.detail')).map(e => e.textContent?.trim() ?? '');

  const render = async (): Promise<void> => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  };

  const clickRow = async (index: number): Promise<void> => {
    dataRows()[index].click();
    await render();
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
      providers: [...TESTING_PROVIDERS],
    }).compileComponents();
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
  });

  it('renders no detail rows without a detail template', async () => {
    host.withDetail.set(false);
    await render();
    expect(detailRows().length).toBe(0);
    await clickRow(0);
    expect(host.expandedRows()).toEqual([]);
    expect(host.onRowClick).toHaveBeenCalled();
  });

  it('expands a row on click and renders the detail with the row context', async () => {
    await render();
    expect(detailRows().length).toBe(2);
    expect(details()).toEqual([]);

    await clickRow(1);
    expect(host.expandedRows()).toEqual([host.data()[1]]);
    expect(details()).toEqual(['lucie-1']);
    expect(dataRows()[1].getAttribute('aria-expanded')).toBe('true');
    expect(host.toggles).toEqual([{ row: host.data()[1], expanded: true }]);
    expect(host.onRowClick).toHaveBeenCalled();

    await clickRow(1);
    expect(host.expandedRows()).toEqual([]);
    expect(dataRows()[1].getAttribute('aria-expanded')).toBe('false');
    expect(host.toggles[1]).toEqual({ row: host.data()[1], expanded: false });
  });

  it('keeps several rows expanded by default', async () => {
    await render();
    await clickRow(0);
    await clickRow(1);
    expect(host.expandedRows().length).toBe(2);
  });

  it('keeps one row expanded when multiple is false', async () => {
    host.expandableRows.set({ multiple: false });
    await render();
    await clickRow(0);
    await clickRow(1);
    expect(host.expandedRows()).toEqual([host.data()[1]]);
  });

  it('does not expand rows that are not expandable', async () => {
    host.expandableRows.set({ isExpandable: row => row.id !== 1 });
    await render();
    expect(detailRows().length).toBe(1);
    expect(dataRows()[0].hasAttribute('aria-expanded')).toBe(false);
    await clickRow(0);
    expect(host.expandedRows()).toEqual([]);
  });

  it('does not expand rows when enabled is false', async () => {
    host.expandableRows.set({ enabled: false });
    await render();
    await clickRow(0);
    expect(host.expandedRows()).toEqual([]);
  });

  it('expands rows set by the parent', async () => {
    host.expandedRows.set([host.data()[0]]);
    await render();
    expect(details()).toEqual(['john-0']);
  });

  it('toggles on enter only when the row itself has focus', async () => {
    await render();
    const row = dataRows()[0];
    row.querySelector('td')?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await render();
    expect(host.expandedRows()).toEqual([]);

    row.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await render();
    expect(host.expandedRows()).toEqual([host.data()[0]]);
  });

  it('forgets expanded rows that leave the data', async () => {
    await render();
    await clickRow(0);
    host.data.set([{ id: 2, name: 'lucie' }]);
    await render();
    expect(host.expandedRows()).toEqual([]);
  });

  it('keeps expanded rows with a compareFn when the data is fetched again', async () => {
    host.expandableRows.set({ compareFn: (a, b) => a.id === b.id });
    await render();
    await clickRow(0);
    host.data.set([
      { id: 1, name: 'john' },
      { id: 2, name: 'lucie' },
    ]);
    await render();
    expect(host.expandedRows().length).toBe(1);
    expect(details()).toEqual(['john-0']);
  });

  it('sorts a sortable column from the keyboard and reports it in aria-sort', async () => {
    host.tableCells[0].sortable = true;
    await render();
    const header = element().querySelector<HTMLTableCellElement>('th.sortable')!;
    expect(header.getAttribute('tabindex')).toBe('0');
    expect(header.getAttribute('aria-sort')).toBe('none');

    header.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await render();
    expect(header.getAttribute('aria-sort')).toBe('ascending');

    header.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));
    await render();
    expect(header.getAttribute('aria-sort')).toBe('descending');
  });

  it('keeps a column that is not sortable out of the tab order', async () => {
    await render();
    const header = element().querySelector<HTMLTableCellElement>('th.mat-mdc-header-cell')!;
    expect(header.hasAttribute('tabindex')).toBe(false);
    expect(header.hasAttribute('aria-sort')).toBe(false);
  });

  it('collapses all rows when the tab changes', async () => {
    host.tabs.set([
      { id: 'a', label: 'A' },
      { id: 'b', label: 'B' },
    ]);
    await render();
    await clickRow(0);
    expect(host.expandedRows().length).toBe(1);

    host.table().onActiveTabChange('b');
    await render();
    expect(host.expandedRows()).toEqual([]);
  });
});

@Component({
  imports: [Lab900TableComponent],
  template: `
    <lab900-table
      [tableCells]="tableCells"
      [data]="data"
      [trackByTableFn]="trackBy"
      [tableActionsBack]="actions"
      [rowLink]="rowLink()"
      [rowLinkLabel]="rowLinkLabel"
      [onRowClick]="onRowClick()" />
  `,
})
class RowLinkHostComponent {
  private readonly router = inject(Router);

  public cityClass = 'city-a';
  public version = 1;
  public readonly tableCells: TableCell<Row, any, any, any>[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name', cellEditor: CellInputEditorComponent },
    { key: 'city', label: 'City', cellFormatter: () => 'Ghent', cellClass: () => this.cityClass },
  ];
  public readonly data: Row[] = [
    { id: 1, name: 'john' },
    { id: 2, name: 'lucie' },
    { id: 3, name: 'rob' },
  ];
  public readonly action = jest.fn();
  public readonly actions: TableRowAction<Row>[] = [{ label: 'delete', type: 'icon', action: this.action }];
  // row 2 is not a link, row 3 passes a UrlTree
  public readonly rowLink = signal<((row: Row) => Lab900TableRowLink | null) | undefined>(row => {
    if (row.id === 2) {
      return null;
    }
    return row.id === 3
      ? this.router.createUrlTree(['/orders', row.id], { queryParams: { tab: 'lines' } })
      : ['/orders', row.id * this.version];
  });
  public readonly onRowClick = signal<jest.Mock | undefined>(jest.fn());
  public readonly rowLinkLabel = (row: Row): string | null => (row.id === 1 ? 'Open order 1' : null);
  public readonly trackBy = (_: number, row: Row): number => row.id;
}

describe('Lab900TableComponent row links', () => {
  let fixture: ComponentFixture<RowLinkHostComponent>;
  let host: RowLinkHostComponent;

  const dataRows = (): HTMLTableRowElement[] =>
    Array.from(fixture.nativeElement.querySelectorAll('tr.mat-mdc-row:not(.lab900-row-detail)'));
  const links = (row: number): HTMLAnchorElement[] => Array.from(dataRows()[row].querySelectorAll('a.lab900-row-link'));

  const render = async (): Promise<void> => {
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  };

  /**
   * Dispatch a click and report whether the table prevented its default.
   * A listener on the document prevents it afterwards, because jsdom can't navigate.
   */
  const click = (target: Element, init: MouseEventInit = {}): boolean => {
    let prevented = false;
    const listener = (event: Event): void => {
      prevented = event.defaultPrevented;
      event.preventDefault();
    };
    document.addEventListener('click', listener);
    target.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, ...init }));
    document.removeEventListener('click', listener);
    return prevented;
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowLinkHostComponent],
      // a test renders the cell content itself, jsdom has no IntersectionObserver for the viewport trigger
      deferBlockBehavior: DeferBlockBehavior.Manual,
      providers: [
        ...TESTING_PROVIDERS,
        provideRouter([{ path: '**', children: [] }]),
        { provide: APP_BASE_HREF, useValue: '/app/' },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(RowLinkHostComponent);
    host = fixture.componentInstance;
    await render();
  });

  it('renders an href only for link rows, with the base href', () => {
    expect(links(0).map(a => a.getAttribute('href'))).toEqual(['/app/orders/1', '/app/orders/1']);
    expect(links(1)).toEqual([]);
    expect(links(2).map(a => a.getAttribute('href'))).toEqual(['/app/orders/3?tab=lines', '/app/orders/3?tab=lines']);
  });

  it('keeps the editable cell and the action cell out of the link', () => {
    const row = dataRows()[0];
    expect(row.querySelector('.cdk-column-name a')).toBeNull();
    expect(row.querySelector('.cdk-column-actions-back a')).toBeNull();
    expect(row.querySelector('.cdk-column-id a.lab900-row-link')).not.toBeNull();
  });

  it('gives each row one tab stop and no native drag', () => {
    const [first, second] = links(0);
    expect(first.hasAttribute('tabindex')).toBe(false);
    expect(second.getAttribute('tabindex')).toBe('-1');
    expect(links(0).every(a => a.getAttribute('draggable') === 'false')).toBe(true);
  });

  it('makes link rows clickable without onRowClick', async () => {
    host.onRowClick.set(undefined);
    await render();
    expect(dataRows().map(row => row.classList.contains('lab900-row-clickable'))).toEqual([true, false, true]);
  });

  it('calls onRowClick on a plain click and does not follow the link', () => {
    const prevented = click(links(0)[1]);
    expect(prevented).toBe(true);
    expect(host.onRowClick()).toHaveBeenCalledWith(host.data[0], 0, expect.any(MouseEvent));
  });

  it.each(['ctrlKey', 'metaKey', 'shiftKey'])('lets the browser open the link on a %s click', key => {
    const prevented = click(links(0)[0], { [key]: true });
    expect(prevented).toBe(false);
    expect(host.onRowClick()).not.toHaveBeenCalled();
  });

  it('handles an alt click as a plain click, so the browser does not download the link', () => {
    const prevented = click(links(0)[0], { altKey: true });
    expect(prevented).toBe(true);
    expect(host.onRowClick()).toHaveBeenCalled();
  });

  it('navigates with the router on a plain click without onRowClick', async () => {
    host.onRowClick.set(undefined);
    await render();
    const prevented = click(links(0)[0]);
    await fixture.whenStable();
    expect(prevented).toBe(true);
    expect(TestBed.inject(Router).url).toBe('/orders/1');
  });

  it('names the tab stop with rowLinkLabel', () => {
    const [first, second] = links(0);
    expect(first.getAttribute('aria-label')).toBe('Open order 1');
    expect(second.hasAttribute('aria-label')).toBe(false);
    expect(links(2)[0].hasAttribute('aria-label')).toBe(false);
  });

  it('handles a click on a cell outside the link as before', () => {
    const name = dataRows()[0].querySelector('.cdk-column-name')!;
    expect(click(name)).toBe(false);
    expect(click(name, { ctrlKey: true })).toBe(false);
    expect(host.onRowClick()).toHaveBeenCalledTimes(2);
  });

  it('resolves the links again after a navigation, like routerLink', async () => {
    host.version = 2;
    await render();
    expect(links(0)[0].getAttribute('href')).toBe('/app/orders/1');

    await TestBed.inject(Router).navigateByUrl('/?page=2');
    await render();
    expect(links(0)[0].getAttribute('href')).toBe('/app/orders/2');
  });

  it('runs a row action without calling onRowClick or following the link', () => {
    const button = dataRows()[0].querySelector<HTMLButtonElement>('.cdk-column-actions-back button')!;
    expect(button.closest('a')).toBeNull();
    const prevented = click(button);
    expect(prevented).toBe(false);
    expect(host.action).toHaveBeenCalled();
    expect(host.onRowClick()).not.toHaveBeenCalled();
  });

  it('keeps the cell events on the td and native keys on the link', async () => {
    for (const block of await fixture.getDeferBlocks()) {
      await block.render(DeferBlockState.Complete);
    }
    const row = dataRows()[0];
    expect(row.querySelector('.cdk-column-name')!.classList.contains('editable')).toBe(true);
    expect(row.querySelector<HTMLElement>('.cdk-column-id')!.tabIndex).toBe(-1);
    expect(links(0)[0].hasAttribute('tabindex')).toBe(false);

    const tab = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
    links(0)[0].dispatchEvent(tab);
    expect(tab.defaultPrevented).toBe(false);
  });

  it('renders no links without rowLink', async () => {
    host.rowLink.set(undefined);
    await render();
    expect(fixture.nativeElement.querySelector('a.lab900-row-link')).toBeNull();
  });

  it('removes the cell classes of the old content when a cell stops being a link', async () => {
    for (const block of await fixture.getDeferBlocks()) {
      await block.render(DeferBlockState.Complete);
    }
    const city = (): Element => dataRows()[0].querySelector('.cdk-column-city')!;
    expect(city().classList.contains('city-a')).toBe(true);

    host.cityClass = 'city-b';
    host.rowLink.set(undefined);
    await render();
    expect(city().classList.contains('city-a')).toBe(false);
  });
});
