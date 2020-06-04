import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

    registerUser(postData) {
        // var headers = new HttpHeaders();
            // headers.append('Access-Control-Allow-Origin' , 'http://localhost:8100');
            // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            // headers.append('Accept','application/json');
            // headers.append('content-type','application/json');
        const data = { data: postData, token: 'fd574416dd0b2f886bab64c77c51bbc76efd3b40', name: environment.apiName};
        // return this.http.get(environment.apiUrl + "users/register.json", postData)
        return this.http.post(environment.apiUrl + "users/register.json", data)
        /* .pipe(
            map(results => {
                console.log("Service: ", results);
                return results;
            })
        ); */
    }
}
