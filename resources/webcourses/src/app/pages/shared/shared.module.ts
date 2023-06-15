import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';

import { PipesModule } from 'src/app/shared/pipes/pipes.module'
import { ContactBlockModule } from 'src/app/views/default/blocks/contact/contact.module'


@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PipesModule,
    ContactBlockModule
  ]
})
export class SharedModule { }
