import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserCreateComponent } from "./user-create/user-create.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  },
  { path: "create", component: UserCreateComponent },
  { path: "list", component: UserListComponent },
  { path: "edit/:id", component: UserEditComponent },
  { path: ":id", component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
