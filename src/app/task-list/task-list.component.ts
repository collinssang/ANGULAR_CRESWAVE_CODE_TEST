import {Component} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Tasks, tasks} from "../tasks";
import {MatIcon} from "@angular/material/icon";
import {TaskFormComponent} from "../task-form/task-form.component";
import {NavigationStart, RouterLink} from "@angular/router";
import {Router} from '@angular/router';
import {TaskService} from "../task.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatIconButton,
    MatHeaderRow,
    MatRow,
    MatTable,
    MatIcon,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    TaskFormComponent,
    RouterLink,
    NgForOf,
    MatButton
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  constructor(private router: Router, private taskService: TaskService) {

  }

  tasks = [...tasks];

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  navigateToAddTask(): void {
    this.router.navigateByUrl('/add-task').then(() => {
      // Code to execute after navigation is complete
      console.log('Navigation to add-task complete');
    });
  }

  editTask(id: number) {
    this.router.navigateByUrl('/edit-task/' + id);

  }

  deleteTask(id: number) {

  }

  addTask(task: Tasks): void {
    this.tasks.push(task);
  }

}
