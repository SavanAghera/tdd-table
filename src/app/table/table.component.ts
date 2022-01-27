import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  isEdit: boolean = false;
  formValues: formValue[] = [];
  firstName: string = '';
  lastName: string = '';
  id: number = 1;
  currentId: number = 1;
  constructor() {}

  ngOnInit(): void {}
  addValue(): void {
    if (this.firstName.trim() !== '' && this.lastName.trim() !== '') {
      this.formValues.push({
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
      });
      this.id++;
      this.firstName = '';
      this.lastName = '';
    }
  }
  editValue(id: number): void {
    if (!this.isEdit) {
      this.isEdit = true;
      this.currentId = id;
      const index = this.findIndexFromId();
      if (index !== -1) {
        this.firstName = this.formValues[index].firstName;
        this.lastName = this.formValues[index].lastName;
      }
    }
  }
  updateValue(): void {
    if (this.isEdit && this.firstName.trim() !== '' && this.lastName.trim() !== '') {
      const index = this.findIndexFromId();
      this.formValues[index].firstName = this.firstName;
      this.formValues[index].lastName = this.lastName;
      this.firstName = '';
      this.lastName = '';
      this.isEdit = false;
    }
  }
  findIndexFromId(): number {
    return this.formValues.findIndex((v) => v.id === this.currentId);
  }
}

interface formValue {
  id: number;
  firstName: string;
  lastName: string;
}
