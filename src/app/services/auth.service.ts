import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthRequest, AuthResponse} from '../models/auth/login';
import {UrlConsts} from '../consts';
import {SessionService} from './session.service';
import { tap } from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(
    private http: HttpClient,
    private sessionService: SessionService) {
  }

  login(username: string, password: string) {
    return this.http.post<AuthRequest>(UrlConsts.LOGIN_URL, { username, password })
      .pipe(tap(res => {
        return this.setSession;
      }))
  }
  refreshToken() : Observable<AuthResponse> {
    var jwtToken = this.getToken();
    var refreshToken = this.getRefreshToken();
    if (jwtToken && refreshToken) {
      return this.http.post<AuthResponse>(UrlConsts.REFRESH_TOKEN_URL, {jwtToken, refreshToken})
        .pipe(tap(res => {
          this.sessionService.handleLogin(res);
          return res;
        }))
    }
    return EMPTY;
  }

  logout() {
    this.sessionService.handleLogout();
  }

  public getToken(): string | null {
    return this.sessionService.getToken()
  }
  public getRefreshToken(): string | null {
    return this.sessionService.getRefreshToken()
  }
  private setSession(authResult: AuthResponse) {
        this.sessionService.handleLogin(authResult);
    }

}
