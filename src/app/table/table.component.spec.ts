import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create TableComponent component', () => {
    expect(component).toBeTruthy();
  });
  it('should create form title' , () => { 
    const title  = fixture.nativeElement.querySelector('.form-title').innerText;
    expect(title).toEqual(contents.FORM_TITLE);
  });
  it('should call addVale function', () => {
    spyOn(component, 'addValue');
    const addBtn  = fixture.nativeElement.querySelector('#addBtn');
    addBtn.click();
    expect(component.addValue).toHaveBeenCalled();

  });
  it('should push new data into formValue', () => {
    component.firstName = 'test';
    component.lastName = 'test2';
    component.id = 1;
    fixture.detectChanges();
    component.addValue();
    const value = [{
      id:1,
      firstName:'test',
      lastName:'test2'
    }]
    expect(component.formValues).toEqual(value);
  });
  it('should not push new data into formValue if firstName is empty', () => {
    component.firstName = '';
    component.lastName = 'test2';
    component.id = 1;
    fixture.detectChanges();
    component.addValue();
    expect(component.formValues).toEqual([]);
  });
  it('should not push new data into formValue if lastName is empty', () => {
    component.firstName = 'test';
    component.lastName = '';
    component.id = 1;
    fixture.detectChanges();
    component.addValue();
    expect(component.formValues).toEqual([]);
  });
  it('should call updateValue function', () => {
    spyOn(component, 'updateValue');
    component.isEdit = true;
    fixture.detectChanges();
    const editBtn  = fixture.nativeElement.querySelector('#updateBtn');
    editBtn.click();
    expect(component.updateValue).toHaveBeenCalled();

  });
});

const contents = {
    FORM_TITLE: 'Create Form'
}
