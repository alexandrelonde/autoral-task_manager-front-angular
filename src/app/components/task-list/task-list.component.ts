import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  toggleTaskCompletion(task: Task) {
    this.taskService.updateTask(task.id, !task.isComplete).subscribe(() => {
      task.isComplete = !task.isComplete;
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }

}
