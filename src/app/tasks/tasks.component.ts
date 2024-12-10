import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './tasks.service';
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!:string;
  @Input({required: true}) name!:string;
  isAddingTask = false;

  constructor(private tasksService: TaskService) { }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompletedTask(id: string) {

  }

  onOpenNewTask(){
    this.isAddingTask = true;
  }

  onCloseNewTask(){
    this.isAddingTask = false;
  }

}