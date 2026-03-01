import {UserDto} from '../models/dto/userDto';
import {HttpClient} from '@angular/common/http';
import {Unsubscriber} from '../helpers/unsubscriber';
import {firstValueFrom} from 'rxjs';
import {Injectable} from '@angular/core';
import {UrlConsts} from '../consts';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends Unsubscriber {

    constructor(
      private http: HttpClient,

    ) {
      super()
    }
    public getUsers(): Promise<UserDto[]> {
      return firstValueFrom(this.http.get<UserDto[]>(UrlConsts.USER_URL));
}
}
