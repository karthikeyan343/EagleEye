import { config } from '../config/env';

interface RequestOptions extends RequestInit {
  data?: unknown;
}

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = config.apiBaseUrl;
  }

  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { data, headers, ...customConfig } = options;

    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(headers as Record<string, string>),
    };

    const configObj: RequestInit = {
      ...customConfig,
      headers: requestHeaders,
    };

    if (data) {
      configObj.body = JSON.stringify(data);
    }

    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = `${this.baseUrl}${cleanEndpoint}`;

    try {
      const response = await fetch(url, configObj);
      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || `Request failed with status ${response.status}`);
      }

      return resData as T;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('An unknown network error occurred');
    }
  }

  get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  post<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'POST', data });
  }
}

export const api = new ApiService();
export default api;
