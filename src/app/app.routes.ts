import {RouterModule, Routes} from '@angular/router';
import {TaskDetailsComponent} from "./task-details/task-details.component";
import {TaskListComponent} from "./task-list/task-list.component";
import {TaskFormComponent} from "./task-form/task-form.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'task/:id', component: TaskDetailsComponent },
  { path: 'add-task', redirectTo: '/new_task' },
  { path: 'new_task', component: TaskFormComponent },
  { path: 'edit-task/:id', component: TaskFormComponent },
  { path: '**', redirectTo: '/tasks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
