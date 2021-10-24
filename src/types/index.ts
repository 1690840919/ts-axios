export type Method =
  'get' | 'GET' |
  'post' | 'POST' |
  'head' | 'HEAD' |
  'put' | 'PUT' |
  'patch' | 'PATCH' |
  'options' | 'OPTIONS' |
  'delete' | 'DELETE'

export interface axiosRequestConfig {
  url: string
  method?: Method // ？表示可传可不传
  data?: any
  params?: any

}
