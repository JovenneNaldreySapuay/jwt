import { jws } from "./deps.ts";
import { JwtHeader, SignPayload } from "./types.ts";

export function sign(argHeader: Partial<JwtHeader> = {}, payload: SignPayload, key: string): string {
  const defaultHeader: JwtHeader = {
    alg: "HS256",
    typ: "JWT",
  };

  const header = Object.assign({}, defaultHeader, argHeader);

  return jws.sign(undefined, JSON.stringify(header), JSON.stringify(payload), key);
}
