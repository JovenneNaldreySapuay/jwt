export { Merge } from "https://cdn.jsdelivr.net/gh/denoserverless/type-fest/mod.ts";
import { AllowedAlgorithms } from "./types.ts";
import r from "../lib/jsrsasign.js";

export const jws: {
  sign: (alg: AllowedAlgorithms | undefined, header: string, payload: string, key: string) => string;
} =
  r.jws.JWS;
