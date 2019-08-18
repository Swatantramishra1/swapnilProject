import { Injectable, Type } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map, delay, tap } from "rxjs/operators";
import { Observable, throwError, of } from "rxjs";
import { User } from "src/app/type/login.type";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiHostUrl = "http://localhost:51310/api/User1/";

  constructor(private http: HttpClient) {}

  signIn(endPoint: string): Observable<User> {
    const url = this.apiHostUrl + endPoint;
    return this.http.get<User>(url).pipe(map(res => res));
  }
}
