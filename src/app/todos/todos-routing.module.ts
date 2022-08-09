import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewToDoComponent } from './new-to-do/new-to-do.component';
import { TodosComponent } from './todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  }, {
    path: 'new',
    component: NewToDoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {
}
