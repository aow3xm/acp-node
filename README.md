# ACP Node

Official [anticaptcha.pro](https://anticaptcha.pro) captcha solver SDK for nodejs

## Quick Start

Install acp-node with nodejs

```bash
  //for npm
  npm install acp-node

  //for yarn
  yarn add acp-node

  //for pnpm
  pnpm add acp-node
```

## Basic Usage

```typescript
import { Solver } from 'acp-node';

const solver = new Solver('YOUR_API_KEY');

//check balance
const balance = await solver.getBalance();

//create image task
const imageTask = await solver.createImageTask({
  version: 'default',
  body: 'iVBORw0KGgoAAAANSUhEUgAAAPAA...',
});

//create recaptcha task
const recaptchaTask = await solver.createImageTask({
  version: 'v2',
  pageurl: 'https://www.google.com/recaptcha/api2/demo',
  sitekey: '6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-',
});

//create cloudflare turnstile task
const turnstileTask = await solver.createRecaptchaTask({
  pageurl: 'https://demo.turnstile.workers.dev',
  sitekey: '1x00000000000000000000AA',
});

//create hcaptcha task
const hcaptchaTask = await solver.createRecaptchaTask({
  pageurl: 'https://accounts.hcaptcha.com/demo',
  sitekey: 'a5f74b19-9e45-40e0-b45d-47ff91b7a6c2',
});

//take result
const imageResult = await solve.takeResult(imageTask.taskId);
const recaptchaResult = await solve.takeResult(recaptchaTask.taskId);
const turnstileResult = await solve.takeResult(turnstileTask.taskId);
const hcaptchaResult = await solve.takeResult(hcaptchaTask.taskId);

//log result
console.log(imageResult.solution);
console.log(recaptchaResult.solution);
console.log(turnstileResult.solution);
console.log(hcaptchaResult.solution);
```

## Authors

- [@aow3xm](https://www.github.com/aow3xm)
