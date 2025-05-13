export const METHODS = {
    recaptcha: 'recaptcha',
    hcaptcha: 'hcaptcha',
    turnstile: 'turnstile',
    image: 'image'
 } as const

export const IMAGE_VERSIONS = [
    'default',
    'invidual',
    'facebook',
    'hotmail',
    'garena',
    'amazon',
    'yandex',
    'steam',
] as const

export const RECAPTCHA_VERSIONS = [
    'v2',
    'v3',
] as const

export const CAPTCHA_STATUS = {
  idle: 'idle',
  progressing: 'progressing',
  failed: 'failed',
  completed: 'completed',
} as const