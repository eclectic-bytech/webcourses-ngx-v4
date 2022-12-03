import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherProfileRoutingModule } from './publisher-profile-routing.module';
import { PublisherMenuModule } from '../menu/menu.module';
import { PublisherProfileAdminComponent } from './publisher-profile-admin.component';

@NgModule({
  declarations: [
    PublisherProfileAdminComponent
  ],
  imports: [
    CommonModule,
    PublisherProfileRoutingModule,
    PublisherMenuModule
  ]
})

export class PublisherProfileAdminModule { }
