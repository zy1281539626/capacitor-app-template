/**
 * http请求插件，基于@capacitor/core - CapacitorHttp
 */
import { CapacitorHttp, type HttpOptions, type HttpParams } from '@capacitor/core'

const RequestMethods = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  OPTION: 'option'
} as const
type RequestMethod = Literal<typeof RequestMethods>

const defaultOptions = {
  connectTimeout: 60 * 1000
}

// get请求 value 转为字符串（ios不支持传非字符串参数）
const stringifyGetParams = (params: HttpParams) => {
  return Object.entries(params).reduce((acc, [key, value]) => {
    acc[key] = String(value)
    return acc
  }, {} as HttpParams)
}

const request = async (
  method: RequestMethod,
  url: string,
  data?: HttpParams,
  options?: Partial<HttpOptions>
) => {
  try {
    const requestOptions = {
      method,
      url,
      params: method !== RequestMethods.POST ? stringifyGetParams(data || {}) : {},
      data,
      ...defaultOptions,
      ...(options || {})
    }

    const res = await CapacitorHttp.request(requestOptions)
    return { data: res.data, status: res.status }
  } catch (e) {
    return { data: null, status: 'error' }
  }
}

export default {
  request,
  get: (url: string, data?: Record<string, any>, options?: Partial<HttpOptions>) => {
    return request(RequestMethods.GET, url, data, options)
  },
  post: (url: string, data?: Record<string, any>, options?: Partial<HttpOptions>) => {
    return request(RequestMethods.POST, url, data, options)
  }
}
