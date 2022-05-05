import { DataSource } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table/table-data-source';
import { Observable, ReplaySubject } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @title Basic use of `<table the-mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styles: [
    `the-mat-table {
  display: block;
  width: 100%;
}
`,
  ],
  templateUrl: 'table-basic-example.component.html',
})
export class TableBasicExample {
  displayedColumns: any = ['position', 'name', 'weight', 'symbol'];
  displayedColumnsNames: any = ['No.', 'Name', 'Weight', 'Symbol'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new PeriodicDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [
      ...this.dataToDisplay,
      ELEMENT_DATA[randomElementIndex],
    ];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class PeriodicDataSource extends MatTableDataSource<PeriodicElement> {
  constructor(initialData: PeriodicElement[]) {
    super(initialData);
  }
}
