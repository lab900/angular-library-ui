import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lab900TableCellComponent, TableCell } from '@lab900/ui';
import { MatTable } from '@angular/material/table';
import { TABLE_TESTING_PROVIDERS } from '../../../testing/testing.providers';
import { MockProvider } from 'ng-mocks';

describe('Lab900TableCellComponent', () => {
  let component: Lab900TableCellComponent;
  let fixture: ComponentFixture<Lab900TableCellComponent>;
  let table: MatTable<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [...TABLE_TESTING_PROVIDERS, MockProvider(MatTable)],
    }).compileComponents();

    fixture = TestBed.createComponent(Lab900TableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    table = TestBed.inject(MatTable);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add column definition on init', () => {
    jest.spyOn(component, 'columnDef').mockReturnValue({} as any);
    component.ngOnInit();
    expect(table.addColumnDef).toHaveBeenCalled();
  });

  it('should remove column definition on destroy', () => {
    component.ngOnDestroy();
    expect(table.removeColumnDef).toHaveBeenCalled();
  });

  it('should emit headerClick event when handleHeaderClick is called and sorting is enabled', () => {
    jest.spyOn(component['headerClick'], 'emit');
    fixture.componentRef.setInput('disableSort', false);
    const cell: TableCell<any> = {} as any;
    component.handleHeaderClick(cell);
    expect(component['headerClick'].emit).toHaveBeenCalledWith(cell);
  });

  it('should not emit headerClick event when handleHeaderClick is called and sorting is disabled', () => {
    jest.spyOn(component['headerClick'], 'emit');
    fixture.componentRef.setInput('disableSort', true);
    const cell: TableCell<any> = {} as any;
    component.handleHeaderClick(cell);
    expect(component['headerClick'].emit).not.toHaveBeenCalled();
  });

  it('should compute columnWidth correctly for wildcard width', () => {
    fixture.componentRef.setInput('cell', { width: '*' });
    fixture.detectChanges();
    expect(component.columnWidth()).toBe('100%');
  });
});
