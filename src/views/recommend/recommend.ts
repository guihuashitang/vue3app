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

//新碟上架
export function getAlbum(data:any={limit:10}) {
    return request({
        url: `album/new?limit=${data.limit}`,
        method: "get",
    })
}

//榜单
export function getRankName() {
    return request({
        url: `toplist`,
        method: "get",
    })
}

//榜单详情
export function getRankDetail(data:any) {
    return request({
        url: `playlist/detail?id=${data.id}`,
        method: "get",
    })
}

//入驻歌手
export function getSinger(data:any={limit: 5}) {
    return request({
        url: `top/artists?offset=0&limit=${data.limit}`,
        method: "get",
    })
}
