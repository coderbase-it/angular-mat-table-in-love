import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TableBasicExample } from './tables/table-basic-example/table-basic-example.component';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColumnSorterComponent } from './tables/the-mat-table/actions/column-sorter/column-sorter.component';
import { TheMatTableComponent } from './tables/the-mat-table/the-mat-table.component';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    DragDropModule,
    MatMenuModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  entryComponents: [TableBasicExample, ColumnSorterComponent],
  declarations: [
    TableBasicExample,
    TheMatTableComponent,
    ColumnSorterComponent,
    AppComponent,
    HelloComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
