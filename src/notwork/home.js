import {request} from "@/notwork/request";

export function getHomeMultidata() {
  return request({
      url:'/home/multidata'
    })
}