import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TESTING_PROVIDERS } from '../../../testing/testing.providers';
import { Lab900MergerComponent } from './merger.component';
import { MergeConfig } from '../../models/merge-config.model';
import { MergeObject } from '../../models/merge-object.model';

interface TestData {
  name: string;
  firstName: string;
  languages: string[];
  address: { street: string; number: number };
}

const leftObject: MergeObject<TestData> = {
  title: 'left',
  data: {
    name: 'left name',
    firstName: 'left first name',
    languages: ['nl'],
    address: { street: 'left street', number: 1 },
  },
};

const rightObject: MergeObject<TestData> = {
  title: 'right',
  data: {
    name: 'right name',
    firstName: 'right first name',
    languages: ['fr'],
    address: { street: 'right street', number: 2 },
  },
};

const createSchema = (): MergeConfig<TestData>[] => [
  { attribute: 'name', label: 'name' },
  { attribute: 'address', nestedObject: [{ attribute: 'street' }, { attribute: 'number' }] },
  { attribute: 'languages', combine: true, active: true, disabled: true },
  { nestedObject: [{ attribute: 'firstName' }] },
];

describe('Lab900MergerComponent', () => {
  let component: Lab900MergerComponent<TestData>;
  let fixture: ComponentFixture<Lab900MergerComponent<TestData>>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Lab900MergerComponent],
      providers: [...TESTING_PROVIDERS],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab900MergerComponent<TestData>);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('leftObject', leftObject);
    fixture.componentRef.setInput('rightObject', rightObject);
    fixture.componentRef.setInput('schema', createSchema());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start from the right object and keep a preselected config', () => {
    expect(component.selectedSide()).toBe('right');
    expect(component.result().name).toBe('right name');
    expect(component.result().languages).toEqual(['fr', 'nl']);
    expect(component.schema()[2].active).toBe(true);
  });

  it('should take the value of the other side when a config becomes active', () => {
    component.toggleActive(0);

    expect(component.schema()[0].active).toBe(true);
    expect(component.result().name).toBe('left name');
  });

  it('should give the master value back when a config becomes inactive', () => {
    component.toggleActive(0);
    component.toggleActive(0);

    expect(component.schema()[0].active).toBe(false);
    expect(component.result().name).toBe('right name');
  });

  it('should merge a nested config without attribute', () => {
    component.toggleActive(3);

    expect(component.result().firstName).toBe('left first name');
  });

  it('should merge a nested config with attribute as one object', () => {
    component.toggleActive(1);

    expect(component.result().address).toEqual(leftObject.data.address);
  });

  it('should keep disabled configs on reset', () => {
    component.toggleActive(0);
    component.reset();

    expect(component.schema()[0].active).toBe(false);
    expect(component.schema()[2].active).toBe(true);
    expect(component.result().name).toBe('right name');
    expect(component.result().languages).toEqual(['fr', 'nl']);
  });

  it('should switch the master side and clear the choices', () => {
    component.toggleActive(0);
    component.switchMaster();
    fixture.detectChanges();

    expect(component.selectedSide()).toBe('left');
    expect(component.schema()[0].active).toBe(false);
    expect(component.result().name).toBe('left name');
    expect(component.result().languages).toEqual(['nl', 'fr']);
  });

  it('should clear the choices when the parent sets the master side', () => {
    component.toggleActive(0);
    fixture.componentRef.setInput('selected', 'left');
    fixture.detectChanges();

    expect(component.schema()[0].active).toBe(false);
    expect(component.result().name).toBe('left name');
  });

  it('should clear the choices when another object comes in', () => {
    component.toggleActive(0);
    fixture.componentRef.setInput('leftObject', { ...leftObject, data: { ...leftObject.data, name: 'other name' } });
    fixture.detectChanges();

    expect(component.schema()[0].active).toBe(false);
    expect(component.result().name).toBe('right name');
  });

  it('should keep the choices when only the schema changes', () => {
    component.toggleActive(0);
    component.toggleActive(1);

    expect(component.schema()[0].active).toBe(true);
    expect(component.schema()[1].active).toBe(true);
  });

  it('should apply the rowClass next to the static row class', () => {
    const schema = createSchema();
    schema[0] = { ...schema[0], rowClass: 'my-row' };
    fixture.componentRef.setInput('schema', schema);
    fixture.detectChanges();

    const row: HTMLElement = fixture.nativeElement.querySelectorAll('.lab900-merger__row')[1];
    expect(row.classList).toContain('lab900-merger__row');
    expect(row.classList).toContain('my-row');
  });

  it('should emit the schema with the choices', () => {
    const schemas: MergeConfig<TestData>[][] = [];
    component.schemaChange.subscribe(schema => schemas.push(schema));
    fixture.detectChanges();
    component.toggleActive(0);
    fixture.detectChanges();

    expect(schemas.at(0)?.[0].active).toBeFalsy();
    expect(schemas.at(-1)?.[0].active).toBe(true);
  });

  it('should emit the cleared schema when another object comes in', () => {
    component.toggleActive(0);
    const schemas: MergeConfig<TestData>[][] = [];
    component.schemaChange.subscribe(schema => schemas.push(schema));
    fixture.componentRef.setInput('leftObject', { ...leftObject, data: { ...leftObject.data, name: 'other name' } });
    fixture.detectChanges();

    expect(schemas.at(-1)?.[0].active).toBe(false);
  });

  it('should emit the merged object', () => {
    const results: TestData[] = [];
    component.resultChange.subscribe(result => results.push(result));
    fixture.detectChanges();
    component.toggleActive(0);
    fixture.detectChanges();

    expect(results.at(0)?.name).toBe('right name');
    expect(results.at(-1)?.name).toBe('left name');
  });
});
