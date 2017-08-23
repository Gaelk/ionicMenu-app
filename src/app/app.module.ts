import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TodoListPage } from "../pages/todo-list/todo-list";
import { TodoFormpagePage } from "../pages/todo-formpage/todo-formpage";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { ConfigProvider } from '../providers/config/config';
import { ConfigPage } from "../pages/config/config";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TodoListPage,
   TodoFormpagePage,
    ConfigPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TodoListPage,
   TodoFormpagePage,
   ConfigPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
   
  ]
})
export class AppModule {}
