import { AxiosInstance } from 'axios';
import { APIResponse, CreateTaskResponse, GetBalanceResponse, ImagePayload, OtherPayload, RecaptchaPayload, TakeResultResponse } from './constants/type.js';
import { api } from './fetch.js';
import { METHODS } from './constants/enum.js';

export class Solver {
  private api: AxiosInstance;
  private apiKey: string;
  private cPath: string = '/createTask';
  private tPath: string = '/takeResult';
  private bPath: string = '/balance';

  /**
   * @param {string} apiKey Your API key
   * @example import Solver from 'aow3xm/acp-node'
   *
   * const solver = new Solver('8hyse3ytrrxz29cfwkhpnunc39sv1k00')
   */
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.api = api();
  }

  /**
   * @param {ImagePayload} payload Image payload
   * @example
   * const imageTask = await solver.createImageTask({
   *    version: 'default',
   *    body: 'iVBORw0KGgoAAAANSUhEUgAAAPAA...'
   * })
   * @returns {CreateTaskResponse}
   */
  async createImageTask(payload: ImagePayload): Promise<CreateTaskResponse> {
    const p = {
      ...payload,
      apiKey: this.apiKey,
      method: METHODS.image,
    };
    const response = await this.api.post<APIResponse<CreateTaskResponse>>(this.cPath, p);
    return response.data.data;
  }

  /**
   * @param {RecaptchaPayload} payload Recaptcha payload
   * @example
   * const recaptchaTask = await solver.createRecaptchaTask({
   *    version: 'v2',
   *    pageurl: 'https://www.google.com/recaptcha/api2/demo',
   *    sitekey: '6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-'
   * })
   * @returns {CreateTaskResponse}
   */
  async createRecaptchaTask(payload: RecaptchaPayload): Promise<CreateTaskResponse> {
    const p = {
      ...payload,
      apiKey: this.apiKey,
      method: METHODS.recaptcha,
    };
    const response = await this.api.post<APIResponse<CreateTaskResponse>>(this.cPath, p);
    return response.data.data;
  }

  /**
   * @param {OtherPayload} payload Turnstile payload
   * @example
   * const turnstileTask = await solver.createTurnstileTask({
   *    pageurl: 'https://demo.turnstile.workers.dev',
   *    sitekey: '1x00000000000000000000AA'
   * })
   * @returns {CreateTaskResponse}
   */
  async createTurnstileTask(payload: OtherPayload): Promise<CreateTaskResponse> {
    const p = {
      ...payload,
      apiKey: this.apiKey,
      method: METHODS.turnstile,
    };
    const response = await this.api.post<APIResponse<CreateTaskResponse>>(this.cPath, p);
    return response.data.data;
  }

  /**
   * @param {OtherPayload} payload Hcaptcha payload
   * @example
   * const hcaptchaTask = await solver.createHcaptchaTask({
   *    pageurl: 'https://accounts.hcaptcha.com/demo',
   *    sitekey: 'a5f74b19-9e45-40e0-b45d-47ff91b7a6c2'
   * })
   * @returns {CreateTaskResponse}
   */
  async createHcaptchaTask(payload: RecaptchaPayload): Promise<CreateTaskResponse> {
    const p = {
      ...payload,
      apiKey: this.apiKey,
      method: METHODS.hcaptcha,
    };
    const response = await this.api.post<APIResponse<CreateTaskResponse>>(this.cPath, p);
    return response.data.data;
  }

  /**
   * @param {string} taskId Task id from created task
   * @example
   * const solution = await solver.takeResult('d99b3f1d-ed5a-4e57-a9f0-3345ccdada15')
   * @returns {TakeResultResponse}
   */
  async takeResult(taskId: string): Promise<TakeResultResponse> {
    const p = {
      apiKey: this.apiKey,
      taskId,
    };
    const response = await this.api.post<APIResponse<TakeResultResponse>>(this.tPath, p);
    return response.data.data;
  }

  /**
   * @example
   * const balance = await solver.getBalance()
   * @returns {number}
   */
  async getBalance(): Promise<number> {
    const response = await this.api.get<APIResponse<GetBalanceResponse>>(`${this.bPath}?apiKey=${this.apiKey}`);
    return response.data.data.balance;
  }
}
