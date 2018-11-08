import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogListComponent } from './components/log-list/log-list.component';
import { LogInventoryComponent } from './components/log-inventory/log-inventory.component';
import { LogComponent } from './components/log/log.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'loglist', component: LogListComponent },
  { path: 'logInventory/:key', component: LogInventoryComponent },
  { path: 'log/:logTypeKey/:logKey', component: LogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
