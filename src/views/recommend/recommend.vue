<template>
    <div class="Recommend">
        <div class="banner-top" :style="{'backgroundImage': `url(${bannerList.length?bannerList[0].imageUrl:''}?imageView&blur=40x20)`}">
            <div class="banner-warp">
                <div class="warp-in flexR">
                    <div class="ban-img">
                        <img :src="bannerList.length?bannerList[0].imageUrl+'?imageView&quality=89':''" alt="">
                    </div>
                    <div class="downLoad">
                        <a class="down-btn" hidefocus="true" href="javascript:void(0)"></a>
                        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                    </div>
                </div>
                <a class="arr-btn left-btn" hidefocus="true" href="javascript:void(0)"><i class="iconfont icon-fanhuijiantouxiangqingye"></i></a>
                <a class="arr-btn right-btn" hidefocus="true" href="javascript:void(0)"><i class="iconfont icon-fanhuijiantouxiangqingye"></i></a>
            </div>
        </div>
        <div class="main-div flexR">
            <div class="m-left">
                <HotSongs/>
            </div>
            <div class="m-right"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref,defineComponent,onMounted, resolveDirective } from 'vue';
import HotSongs from './hotSongs.vue'
import { getBanners } from './recommend';

export default defineComponent({
  name: 'Recommend',
  components: {   
    HotSongs,
},
  setup(){
        let bannerList:any = ref([]); 

        const getBannersList = async()=>{
            console.log('12aaa')
            getBanners().then((res:any)=>{
                bannerList.value = res.banners
                console.log('bannerList',bannerList)
            })
        }
        onMounted(()=>{
          getBannersList()
        })
        
        return {
            bannerList
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
                img{
                    display: block;
                    width: 730px;
                    height: 284px;
                    backface-visibility: hidden;
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