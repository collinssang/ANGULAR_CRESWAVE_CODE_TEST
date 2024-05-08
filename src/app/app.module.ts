import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {TaskFormComponent} from "./task-form/task-form.component";
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskDetailsComponent,
  ],
  declarations: [

  ],

  providers: [],
})
export class AppModule {
}
