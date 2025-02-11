import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignationCreateComponent } from './designation-create/designation-create.component';
import { DesignationDetailsComponent } from './designation-details/designation-details.component';
import { DesignationEditComponent } from './designation-edit/designation-edit.component';
import { DesignationListComponent } from './designation-list/designation-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    { path: 'create', component: DesignationCreateComponent },
    { path: 'list', component: DesignationListComponent },
    { path: 'edit/:id', component: DesignationEditComponent },
    { path: ':id', component: DesignationDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DesignationRoutingModule { }
