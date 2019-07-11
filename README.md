# [WIP] JWT

_A port of auth0/jsonwebtoken using [jsrsasign's jws library](http://kjur.github.io/jsrsasign)._

**NOTICE: this is very much a _work in progress_ until it reaches 1.0 status**

![https://img.shields.io/github/tag/denoserverless/jwt.svg?label=release](https://img.shields.io/github/tag/denoserverless/jwt.svg?label=release)

```ts
// example.ts
import { sign, SignPayload } from "https://cdn.jsdelivr.net/gh/denoserverless/jwt/mod.ts";

const payload: SignPayload = {
  greeting: "world",
};

const jwt = sign({}, payload, "hello");

console.log(jwt);
```

```bash
deno ./example.ts
# eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJncmVldGluZyI6IndvcmxkIn0.I5gqoVkPztoa07kuWyYWSA5uxg7JbdXqt066gFubX1o
```

## Roadmap
- [x] Proof of Concept sign with jsrsasign
- [ ] Proof of Concept decode with jsrsasign
- [ ] Proof of Concept verify with jsrsasign
- [ ] Fully implement sign, decode, verify
- [ ] Optional: move away from jsrsasign (it's slow)
- [ ] Eventually: move cryptography to Deno's built in cryptography

## Changelog

### 0.1.0
#### feat: implement barebones sign function
* Slight modifications to jsrsasign:
  * removed declaration of 'crypto' for Deno
  * removed declaration of window
  * edited exports to only export jws namespace
* barebones sign function
* typings for header (JwtHeader) and payload (SignPayload)
