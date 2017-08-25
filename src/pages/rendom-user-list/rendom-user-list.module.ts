import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RendomUserListPage } from './rendom-user-list';

@NgModule({
  declarations: [
    RendomUserListPage,
  ],
  imports: [
    IonicPageModule.forChild(RendomUserListPage),
  ],
})
export class RendomUserListPageModule {}
