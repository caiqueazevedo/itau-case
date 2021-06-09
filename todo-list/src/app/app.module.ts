import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './view/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    TaskListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
