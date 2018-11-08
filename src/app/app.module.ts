import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SAFEMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import { LogListComponent } from './components/log-list/log-list.component';

import { LogService } from './services/log-service.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LogInventoryComponent } from './components/log-inventory/log-inventory.component';
import { LogComponent } from './components/log/log.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LogListComponent, LogInventoryComponent, LogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SAFEMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
