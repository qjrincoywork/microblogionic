import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceproviderService {

  loginUrl = "http://local.microblogapi/api/users/login.json";
  result: any;
  responseData: any;

  constructor(public http: HttpClient,
              public toastController: ToastController,
              public loadingController: LoadingController,
              private route: Router) { }

    registerData(email: string, password: string, cpassword: string) {
        var registerUrl = "http://local.microblogapi/api/users/register.json";
        var postData = {email: email, password: password, confirm_password: cpassword};
        var header = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

        return this.http.get(registerUrl)
        .pipe(
            map(results => {
                console.log(results);
            })
        );
    }
}
