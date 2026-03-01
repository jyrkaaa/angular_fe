import {Injectable} from '@angular/core';
import {Unsubscriber} from '../helpers/unsubscriber';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {AuthResponse} from '../models/auth/login';
import {NamingConstants} from '../consts/name-const';

@Injectable({providedIn: 'root'})
export class SessionService extends Unsubscriber {
  public isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(
    public router: Router
  ) {
    super();
  }

  public get isAuthenticated(): boolean {
    return this.isAuthenticated$.getValue();
  }

  public getToken(): string | null {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(NamingConstants.JWT_TOKEN_KEY);
    }
    return null;
  }
  public getRefreshToken(): string | null {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(NamingConstants.REFRESH_TOKEN_KEY);
    } return null;
  }

  public handleLogout(): void {
    this.clearStorage()
    this.isAuthenticated$.next(false);
    this.router.navigate(['/login']);
  }

  public handleLogin(token: AuthResponse): void {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(NamingConstants.JWT_TOKEN_KEY, token.Token!);
      sessionStorage.setItem(NamingConstants.REFRESH_TOKEN_KEY, token.Token!);
      this.isAuthenticated$.next(true);
    }
  }

  public toLogin(returnUrl: string | null = null): boolean {
    this.router.navigate(['/login'], { queryParams: { returnUrl } });
    return false
  }

  public clearStorage(): void {
    if (typeof window !== 'undefined') {
      sessionStorage.clear();
      localStorage.clear()
    }
  }
}
