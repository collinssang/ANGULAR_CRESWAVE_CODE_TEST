import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {TaskService} from "../task.service";
import {Tasks} from "../tasks";

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit{
  tasks1: Tasks | any;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.tasks1 = this.taskService.getTask(id);
  }
}
