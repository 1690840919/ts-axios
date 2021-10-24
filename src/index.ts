import { axiosRequestConfig } from "./types"
import xhr from "./xhr"
function axios(config: axiosRequestConfig) {
  // 发送请求
  xhr(config)
}
export default axios
