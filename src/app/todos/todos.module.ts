import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewToDoComponent } from './new-to-do/new-to-do.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [
    TodosComponent,
    NewToDoComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
  ],
})
export class TodosModule {
}
