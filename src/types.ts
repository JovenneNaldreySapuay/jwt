import { Merge } from "./deps.ts";

export type AllowedAlgorithms = "RS256" | "HS256";

export interface JwtHeader {
  alg: AllowedAlgorithms;
  typ?: string;
  cty?: string;
}

export interface JwtBody {
  iat?: number;
  exp?: number;
  nbf?: number;

  iss?: string;
  sub?: string;
  aud?: string;

  jti?: string;
}

export type SignPayload = Merge<Record<string, any>, JwtBody>;
