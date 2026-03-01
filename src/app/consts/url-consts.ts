import {environment} from '../../enviroments/environment';

export class UrlConsts {
  public static readonly API_BASE_URL = environment.apiBaseUrl;
  public static readonly LOGIN_URL = `${UrlConsts.API_BASE_URL}/login`;
  public static readonly REFRESH_TOKEN_URL = `${UrlConsts.API_BASE_URL}/auth/refresh`;
  public static readonly USER_URL = `${UrlConsts.API_BASE_URL}/user`;
}
