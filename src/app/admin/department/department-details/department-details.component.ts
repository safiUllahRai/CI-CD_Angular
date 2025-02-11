import { DataApiService } from 'src/app/data-api.service';
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-department-details",
  templateUrl: "./department-details.component.html",
  styleUrls: ["./department-details.component.css"]
})
export class DepartmentDetailsComponent implements OnInit {
  __ACCESS_EDIT_DETAIL = true;
  __PAGE_ROUTE = "/departments/";
  __PAGE_SUBTITLE;
  __PAGE_TITLE = "Department Details";

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) {}

  id: string;
  Details: any;
  ngOnInit() {
    this.route.params.subscribe(k => (this.id = k["id"]));
    this.dataApi.getSingleDepartment(this.id).subscribe(_department => {
      this.Details = {
        ID: _department["id"],
        Name: _department["name"],
        Status: _department["name"] ? "enabled" : "disabled"
      };
    });
  }
}
