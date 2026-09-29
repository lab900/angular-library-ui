import { Component, signal, viewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TESTING_PROVIDERS } from '../../../testing/testing.providers';
import { Lab900TableComponent } from './table.component';
import { Lab900TableRowDetailDirective } from '../../directives/table-row-detail.directive';
import { ExpandableRows } from '../../models/table-expandable-rows.model';
import { TableCell } from '../../models/table-cell.model';
import { Lab900TableTab } from '../../models/table-tabs.model';

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
