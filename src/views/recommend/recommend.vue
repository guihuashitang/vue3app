<template>
    <div class="Recommend">
        <div class="banner-top" :style="{'backgroundImage': `url(${bannerList.length?bannerList[indexSort].imageUrl:''}?imageView&blur=40x20)`}">
            <div class="banner-warp">
                <div class="warp-in flexR">
                    <div class="ban-img">
                        <img :src="bannerList.length?bannerList[indexSort].imageUrl+'?imageView&quality=89':''" alt="">
                        <ul class="dots flexR">
                            <li class="flexR" v-for="(item,num) in bannerList.length" @click="toDotBanner(num)" :key="num+''">
                                <a :class="{'dot-active':indexSort==num}" href="javascript:void(0)"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="downLoad">
                        <a class="down-btn" hidefocus="true" href="javascript:void(0)"></a>
                        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                    </div>
                </div>
                <a class="arr-btn left-btn" hidefocus="true" @click="changeBanner('pre','')" href="javascript:void(0)"><i class="iconfont icon-fanhuijiantouxiangqingye"></i></a>
                <a class="arr-btn right-btn" hidefocus="true" @click="changeBanner('next','')" href="javascript:void(0)"><i class="iconfont icon-fanhuijiantouxiangqingye"></i></a>
            </div>
        </div>
        <div class="main-div flexR"> 
            <div class="m-left">
                <HotSongs/>
                <NewSong/>
                <RankList/>
            </div>
            <div class="m-right">
                <Aside/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref,defineComponent,onMounted, resolveDirective, reactive } from 'vue';
import HotSongs from './hotSongs.vue';
import NewSong from './newSong.vue';
import RankList from './rankList.vue';
import Aside from './aside.vue';
import { getBanners } from './recommend';

export default defineComponent({
    name: 'Recommend',
    components: {   
        HotSongs,
        NewSong,
        RankList,
        Aside
    },
    setup(){
        let bannerList:any = ref([]); 
        let indexSort:any = ref(0);
        let banSetting:any = reactive({
            autoplay: false,
            speed: 5000,
        })
        let time:any = ref(null);

        const autoPlayFun = async()=>{
            if(!banSetting.autoplay) return
            time.value = setInterval(()=>{
                changeBanner('next','auto')
            },banSetting.speed)
        }

        const getBannersList = async()=>{
            return new Promise((resolve,reject)=>{
                getBanners().then((res:any)=>{
                    bannerList.value = res.banners;
                    preLoadImg(bannerList.value)
                    resolve(res);
                })
            })
        }

        //预加载
        const preLoadImg = async(imgList:Array<any>)=>{
            return new Promise((resolve,reject)=>{
                let arr = [];
                let bgArr = [];
                for(let i=0;i<imgList.length;i++){
                    arr[i] = new Image();
                    arr[i].src = imgList[i].imageUrl + '?imageView&quality=89';
                    bgArr[i] = new Image(); 
                    bgArr[i].src = imgList[i].imageUrl + '?imageView&blur=40x20';
                }
                if(bgArr.length==imgList.length){
                    resolve({arr,bgArr});
                }
            })
        }

        const changeBanner = async(type:string,auto:string)=>{
            if(!auto){
                clearInterval(time.value);
                time.value = null;
            }
            if(type=='pre'){
                if(indexSort.value==0){
                    indexSort.value = bannerList.value.length-1;
                    return
                }
                indexSort.value--
            }else{
                if(indexSort.value==bannerList.value.length-1){
                    indexSort.value = 0;
                    return
                }
                indexSort.value++
            }
            if(!auto){
                autoPlayFun();
            }
        }

        const toDotBanner = async(index:number)=>{
            indexSort.value = index
        }

        
        
        onMounted(async()=>{
          await getBannersList();
          await preLoadImg(bannerList.value);
          autoPlayFun();
        })
        
        return {
            bannerList,
            indexSort,
            changeBanner,
            toDotBanner
        }
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/font-icon.scss';
.Recommend{
    width: 100%;
    .banner-top{
        width: 100%;
        background-size: 6000px;
        background-position: center center;
        background-repeat: no-repeat;
        position: relative;
        .banner-warp{
            position: relative;
            width: 982px;
            height: 285px;
            margin: 0 auto;
        }
        .warp-in{
            width: 100%;
            position: relative;
            .ban-img{
                width: 730px;
                position: relative;
                img{
                    display: block;
                    width: 730px;
                    height: 284px;
                    backface-visibility: hidden;
                }
                .dots{
                    margin: 0;
                    list-style: none;
                    position: absolute;
                    width: 100%;
                    height: 20px;
                    top: 259px;
                    left: 0;
                    cursor: pointer;
                    li{
                        width: 20px;
                        height: 20px;
                        a{
                            display: block;
                            border-radius: 100%;
                            width: 5px;
                            height: 5px;
                            background: #fff;
                            &.dot-active{
                                background: #c10d0c;
                            }
                        }
                        &:hover{
                            a{
                                background: #c10d0c;
                            }
                        }
                       
                    }
                }
            }
            .downLoad{
                width: calc(100% - 730px);
                background: url('../../assets/download.png') no-repeat 0 0;
                position: relative;
                height: 285px;
                .down-btn{
                    display: block;
                    width: 215px;
                    height: 56px;
                    background: url('../../assets/download.png') no-repeat 0 0;
                    margin: 186px 0 0 19px;
                    background-position: 0 9999px;
                    &:hover{
                        background-position: 0 -290px;
                        text-decoration: none;
                    }
                }
            }
            p{
                margin: 10px auto;
                text-align: center;
                color: #8d8d8d;
                font-size: 12px;
                font-family: Arial, Helvetica, sans-serif;
                -webkit-text-size-adjust: none;
            }
        }
        .arr-btn{
            position: absolute;
            display: block;
            top: 50%;
            margin-top: -31px;
            width: 37px;
            height: 63px;
            color: #fff;
            line-height: 63px;
            text-align: center;
            i{
                font-size: 26px
            }
            &:hover{
                background: rgba(0,0,0,.2);
            }
            &.left-btn{
                left: -68px;
            }
            &.right-btn{
                right: -68px;
                transform: rotate(180deg);
            }
        }
    }

    .main-div{
        width: 980px;
        margin: 0 auto;
        border: 1px solid #d3d3d3;
        border-width: 0 1px;
        align-items: flex-start;
        background: #fff;
        .m-left{
            width: calc(100% - 250px);
            border-right: 1px solid #d3d3d3;
            min-height: 700px;
            padding: 20px 20px 40px;
        }
        .m-right{
            width: 250px;
            min-height: 700px;
        }
    }
}

</style>