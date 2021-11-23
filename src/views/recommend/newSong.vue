<template>
    <div class="newSong">
        <ReTitle title='新碟上架' />
        <div class="r-disk">
            <div class="inner">
                <!-- :pagination="{clickable :true}" -->
                <swiper
                    :loop="true"
                    :slides-per-view="1"
                    :speed="1000"
                    :navigation="{
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev',
                    }"
                    :space-between="16"
                    @swiper="onSwiper"
                    :allowTouchMove="false"
                    @slideChange="onSlideChange">
                        <swiper-slide v-for="(item,index) in newList" :key="'0'+index">
                            <ul class="f-cb flexR">
                                <li v-for="(ele,sort) in item" :key="'0'+sort">
                                    <div class="u-cover">
                                         <img :src="ele.blurPicUrl+'?param=100y100'" alt="">
                                        <a class="msk" href=""></a>
                                        <a class="audio-icon " href=""></a>
                                    </div>
                                    <p class="s-title">{{ele.name}}</p>
                                    <p class="s-name">{{ele.artist.name}}</p>
                                </li>
                            </ul>
                        </swiper-slide>
                        <div class="swiper-btn-prev">
                            <i class="iconfont icon-cujiantou"></i>
                        </div>
                        <div class="swiper-btn-next">
                            <i class="iconfont icon-cujiantou"></i>
                        </div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref,defineComponent,onMounted,reactive, resolveDirective,provide,computed } from 'vue';
import { getAlbum } from './recommend';
import ReTitle from '@/components/reTitle/reTitle.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, Pagination, Parallax, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Parallax, Navigation]);
import 'swiper/swiper.min.css';
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";


export default defineComponent({
    name: 'NewSong',
    components: {   
        ReTitle,
        Swiper,
        SwiperSlide
    }, 
    setup(){
            let newList:any = ref([]); 
            const title = '新碟上架';
            //向子组件共享数据
            provide('title', title);

            const getNewSong = async()=>{
                getAlbum().then((res:any)=>{
                    let params:any = res.albums;
                    let arr:any = [];
                    for(let item of params){
                        arr.push(item); 
                        if(arr.length==5){
                            newList.value.push(arr);
                            arr = []
                        }
                    }
                })
            }

            onMounted(()=>{
                getNewSong();
            })

            const onSwiper = (swiper:any) => {
                // console.log('onSwiper',swiper);
            };
            const onSlideChange = (swiper:any) => {
                // console.log('slide change',swiper);
            };

            return {
                newList,
                onSwiper,
                onSlideChange,
            }
    }
});
</script>

<style lang="scss" scoped>
@import '@/style/font-icon.scss';
.r-disk{
    position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    .inner{
        height: 184px;
        padding: 0 16px;
        background: #f5f5f5;
        border: 1px solid #fff;
        overflow: hidden;
        .swiper-container{
            overflow: visible;
            --swiper-navigation-size: 14px;
            /deep/.swiper-slide{
                height: 184px!important;
                .f-cb{
                    width: 100%;
                    margin: 28px 0 0 0;
                    list-style: none;
                    padding: 0;
                    li{
                        width: 118px;
                        height: 150px;
                        margin-left: 11px;
                        .u-cover{
                            width: 100px;
                            height: 100px;
                            margin-bottom: 7px;
                            position: relative;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                            .msk{
                                width: 118px;
                                height: 100px;
                                position: absolute;
                                top: 0;
                                left: 0;
                                background: url('../../assets/coverall.png') no-repeat 0 0;
                                background-position: 0 -570px;
                            }
                            .audio-icon{
                                display: none;
                                position: absolute;
                                right: 10px;
                                bottom: 5px;
                                width: 22px;
                                height: 22px;
                                background: url('../../assets/iconall.png') no-repeat;
                                background-position: 0 -85px;  
                                &:hover{
                                    background-position: 0 -110px;
                                }
                            }
                            &:hover{
                                .audio-icon{
                                    display: block;
                                }
                            }
                        }
                        p{
                            text-align: left;
                            margin: 0;
                            width: 100px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            word-wrap: normal;
                            line-height: 18px;
                            &:hover{
                                text-decoration: underline;
                            }
                        }
                        .s-title{
                            color: #000;
                            cursor: pointer;
                        }
                        .s-name{
                            cursor: pointer;
                            color: #666;
                        }
                    }
                }
            }
        }
            .swiper-btn-prev,.swiper-btn-next{
                position: absolute;
                top: 50%;
                width: calc(var(--swiper-navigation-size)/ 44 * 27);
                height: var(--swiper-navigation-size);
                margin-top: calc(0px - (var(--swiper-navigation-size)/ 2));
                z-index: 10;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #999;
                &:hover{
                   color: #666;
                }
            }
            .swiper-btn-prev{
                left: -12px;
                right: auto;
                transform: rotate(180deg)
            }
            .swiper-btn-next{
                right: -12px!important;
                right: auto;
            }
        }
        
    }


</style>