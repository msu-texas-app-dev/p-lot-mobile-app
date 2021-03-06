import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../providers/auth-service/auth-service';
import { DataService } from '../providers/database-service/database-service';
import { FIREBASE_CONFIG } from '../firebase-config/app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { AppVersion } from '@ionic-native/app-version';
import { Globalization } from '@ionic-native/globalization';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { LotServiceProvider } from '../providers/lot-service/lot-service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';


@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DataService,
    Geolocation,
    AppVersion, 
    Globalization,
    ApiServiceProvider,
    LocalNotifications,
    LotServiceProvider,
    HTTP
    
  ]
})
export class AppModule {}
