import { DataApiService } from 'src/app/data-api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-designation-details',
  templateUrl: './designation-details.component.html',
  styleUrls: ['./designation-details.component.css']
})
export class DesignationDetailsComponent implements OnInit {

  __ACCESS_EDIT_DETAIL = true;
  __PAGE_ROUTE = "/designations/";
  __PAGE_SUBTITLE;
  __PAGE_TITLE = "Designation Details";

  constructor(
    private dataApi: DataApiService,
    private route: ActivatedRoute
  ) { }

  id: string;
  Details: any;
  ngOnInit() {
    this.route.params.subscribe(k => this.id = k['id']);
    this.dataApi.getSingleDesignation(this.id)
      .subscribe(
      _desg => {
        this.Details = {
          "ID": _desg["id"],
          "Name": _desg["name"],
          "Status": _desg["enabled"] ? 'enabled' : 'disabled'
        }
      }
      )
  }

}
