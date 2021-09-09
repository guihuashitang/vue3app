import request from '@/utils/request';


//获取banner
export function getBanners(data?:any) {
    return request({
        url: "banner",
        method: "get",
        data
    })
}

//热门推荐
export function getHotDay(data:any={limit:8}) {
    return request({
        url: `personalized?limit=${data.limit}`,
        method: "get",
    })
}