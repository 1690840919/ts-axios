import { axiosRequestConfig } from "./types";
// 参数类型，返回类型
export default function xhr(config: axiosRequestConfig): void {
  // 获取传入的数据
  const { url, data = null, method = 'get' } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  // 发送请求数据
  request.send(data)
}
