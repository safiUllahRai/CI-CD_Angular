import { DesignModule } from 'src/app/design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignationListComponent } from './designation-list/designation-list.component';
import { DesignationCreateComponent } from './designation-create/designation-create.component';
import { DesignationDetailsComponent } from './designation-details/designation-details.component';
import { DesignationEditComponent } from './designation-edit/designation-edit.component';
import { DesignationRoutingModule } from './designation-module.routing';
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
     DesignModule,
    FormsModule, GridModule,
    DesignationRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    DesignationListComponent,
    DesignationCreateComponent,
    DesignationDetailsComponent,
    DesignationEditComponent,
  ],
  providers: []
})
export class DesignationModule { }
