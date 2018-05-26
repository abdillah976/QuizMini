import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JouerPage } from '../pages/jouer/jouer';
import {OptionPage} from "../pages/option/option";

import { QuestionProvider } from '../providers/question/question';
import {HeartComponent} from "../components/heart/heart";
import {JokerComponent} from "../components/joker/joker";
import { OptionProvider } from '../providers/option/option';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JouerPage,
    OptionPage,
    HeartComponent,
    JokerComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    JouerPage,
    OptionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionProvider,
    OptionProvider
  ]
})
export class AppModule {}
