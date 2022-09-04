import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, tap } from 'rxjs';

export interface IUserData {
  name: string,
  avatar: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _data: IUserData = {
    name: 'guest',
    avatar: 'assets/no-avatar.png' // grab a random avatar image and put it in your assets folder
  }

  constructor(private http: HttpClient) {
  }

  public loadData(): Observable<IUserData> {
    return this.http.get<IUserData>('./assets/user.json')
      .pipe(
        delay(5_000), // to mimic an actual HTTP request sent to a backend service
        tap((response: IUserData) => this._data = response),
      );
  }

  get data(): IUserData {
    return this._data;
  }
}
