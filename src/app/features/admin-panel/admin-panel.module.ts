import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    AdminPanelComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ]
})
export class AdminPanelModule { }
