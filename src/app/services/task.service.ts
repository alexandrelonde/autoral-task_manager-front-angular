import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  // Create Task
  addTask(title: string): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, {title});
  }

  // Read Tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Update Task
  updateTask(id: number, isComplete: boolean): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, {isComplete});
  }

  // Delete Task
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
