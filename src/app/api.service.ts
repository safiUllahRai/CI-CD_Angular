import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Response } from "@angular/http";
import { MatSnackBar } from "@angular/material";
import { environment } from "src/environments/environment";
import * as moment from "moment";

declare var swal: any;

@Injectable()
export class ApiService {
  private env = environment;

  constructor(public snackBar: MatSnackBar) {}

  public get(key: string, skipParse?, skipPrefix?) {
    var key = key;
    if (!skipPrefix) {
      key = this.env["app_prefix"] + key;
    }
    var data = localStorage.getItem(key);

    try {
      if (data) {
        if (!skipParse) {
          data = JSON.parse(data);
        }

        return data;
      }
    } catch (e) {
      console.error(key, data, skipParse);
      throw e;
    }
  }
  public set(key: string, value: any, skipParse?, skipPrefix?) {
    try {
      if (!skipParse) {
        value = JSON.stringify(value);
      }
      var key = key;
      if (!skipPrefix) {
        key = this.env["app_prefix"] + key;
      }
      localStorage.setItem(key, value);
    } catch (e) {
      console.error(key, value, skipParse);
    }
  }

  public remove(key, skipPrefix?) {
    var key = key;
    if (!skipPrefix) {
      key = this.env["app_prefix"] + key;
    }
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }

  public passwordExpiredDays() {
    let user = <any>this.get("user");
    let expirationDate = moment(user.expirationDate);
    let diff = expirationDate.diff(moment());
    return {
      text: expirationDate.fromNow(),
      diff: diff,
      expired: diff <= 0
    };
    // return moment().diff(user.expirationDate, 'days');
  }

  public swal(title, text, type) {
    text = text;
    type = type || "info";
    title = title;
    swal({
      text: text,
      type: type,
      title: title,
      cancelButtonText: "close"
    }).catch(swal.noop);
  }



  public touchHighlightErrors(form, showError?) {
    var Errors = [];
    for (const inner in form.controls) {
      const _control = form.get(inner);
      _control.markAsTouched();
      _control.updateValueAndValidity();
    }

    let ErrorHtml = Errors.map(error => {
      return `<li>${error.control}</li>`;
    }).join("\n");

    if (showError) {
      swal({
        title: "Validation Error",
        html: `<h4>Error occurred in following fields</h4>
						<ul>${ErrorHtml}</ul>`,
        type: "error",
        showCloseButton: true,
        cancelButtonText: "Close"
      }).catch(swal.noop);
    }
  }

  public serviceErrorHandler(apiResponse: Response) {
    var respBody = apiResponse.json();
    if (apiResponse.status == 400 || apiResponse.status == 406) {
      this.snackBar.open((respBody.details));
    } else {
      this.snackBar.open(respBody.details);
    }
  }
  public serviceSuccessHandler(respBody) {
    this.snackBar.open(respBody.message);
  }

  public fillFormGroup(_FormGroup: FormGroup, dataArray) {
    for (var i in dataArray) {
      _FormGroup.controls[dataArray[i].key].setValue(dataArray[i].value);
    }
  }
}
