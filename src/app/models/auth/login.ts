export class AuthResponse {
  public Token: string | undefined;
  public RefreshToken: string | undefined;
}

export class AuthRequest {
  public Username: string | undefined;
  public Password: string | undefined;
}
