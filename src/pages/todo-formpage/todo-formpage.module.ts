import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoFormpagePage } from './todo-formpage';

@NgModule({
  declarations: [
    TodoFormpagePage,
  ],
  imports: [
    IonicPageModule.forChild(TodoFormpagePage),
  ],
})
export class TodoFormpagePageModule {}
