import { CAPTCHA_STATUS, IMAGE_VERSIONS, METHODS, RECAPTCHA_VERSIONS } from './enum.js';

type CaptchaStatus = (typeof CAPTCHA_STATUS)[keyof typeof CAPTCHA_STATUS];


export type APIResponse<T> = {
  success: boolean,
  data: T
}
export type GetBalanceResponse = {
  balance: number;
};

export type CreateTaskResponse = {
  status: CaptchaStatus;
  taskId: string;
};

export type TakeResultResponse = {
  status: CaptchaStatus;
  msg?: string;
  solution: string | null;
};

export type ImagePayload = {
  version?: (typeof IMAGE_VERSIONS)[number];
  body: string;
};

export type OtherPayload = {
  sitekey: string;
  pageurl: string;
};

export type RecaptchaPayload = OtherPayload & {
  version?: (typeof RECAPTCHA_VERSIONS)[number];
  enterprise?: boolean;
  invisible?: boolean;
};

