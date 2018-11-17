import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SAFEMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import { LogListComponent } from './components/log-list/log-list.component';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LogService } from './services/log-service.service';
import { UserService } from './services/user.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LogInventoryComponent } from './components/log-inventory/log-inventory.component';
import { LogComponent } from './components/log/log.component';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogListComponent,
    LogInventoryComponent,
    LogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SAFEMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [LogService, UserService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {}
