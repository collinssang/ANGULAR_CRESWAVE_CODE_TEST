import { Injectable } from '@angular/core';
import { tasks } from './tasks';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() {}

  getTasks(): Tasks[] {
    return tasks;
  }

  getTask(id: number): Tasks {
    return <Tasks>tasks.find(task => task.task_id === id);
  }

  // Implement other CRUD operations as needed
}

