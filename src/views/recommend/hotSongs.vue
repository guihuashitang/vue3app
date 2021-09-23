<template>
    <div class="HotSongs">
        <ReTitle title='热门推荐' :titleSub='titleSub'/>
        <div class="m-hl">
            <ul class="flexR">
                <li v-for="item in hotList" :key="item.id">
                    <div class="im-t">
                        <img :src="item.picUrl+'?param=140y140'" alt="">
                        <a class="msk" :title="item.name" hidefocus></a>
                        <div class="bot">
                            <span class="head-icon"></span>
                            <span class="nb">{{formatPay(item.playCount)}}</span>
                            <a class="play-icon"></a>
                        </div>
                    </div>
                    <p><a hidefocus>{{item.name}}</a></p>

                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { ref,defineComponent,onMounted, resolveDirective,provide,computed } from 'vue';
import { getHotDay } from './recommend';
import ReTitle from '@/components/reTitle/reTitle.vue'

export default defineComponent({
    name: 'HotSongs',
    components: {   
        ReTitle,
    },
    setup(){
            let hotList:any = ref([]); 
            const titleSub = [{name: '华语',value: 1},{name: '流行',value: 2},{name: '摇滚',value: 3},{name: '民谣',value: 4},{name: '电子',value: 5}];
            const title = '热门推荐';
            //向子组件共享数据
            provide('title', title);
            provide('titleSub', titleSub); 

            const formatPay = computed(()=>(payNum:number)=>{
                return payNum.toString().length>4?payNum.toString().substring(0,payNum.toString().length-4)+'万':payNum
            });

            const hotData = async()=>{
                getHotDay().then((res:any)=>{
                    hotList.value = res.result
                    console.log('hotList',hotList)
                })
            }
            onMounted(()=>{
            hotData()
            })
            
            return {
                titleSub,
                hotList,
                formatPay
            }
    }
});
</script>

<style lang="scss" scoped>
.m-hl{
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
        justify-content: flex-start;
        li{
            width: 140px;
            height: 204px;
            margin-left: 42px;
            margin-bottom: 30px;
            position: relative;
            &:nth-child(4n+1){
               margin-left: 0;
            }
            .im-t{ 
                width: 140px;
                height: 140px;
                position: relative;
                .msk{
                    position: absolute;
                    background: url('../../assets/coverall.png') no-repeat;
                    background-position: 0 0;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                }
                .bot{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 27px;
                    color: #ccc;
                    background: url('../../assets/coverall.png') no-repeat;
                    background-position: 0 -537px;
                    .head-icon{
                        float: left;
                        width: 14px;
                        height: 11px;
                        margin: 9px 5px 9px 10px;
                        background: url('../../assets/iconall.png') no-repeat;
                        background-position: 0 -24px;
                    }
                    .nb{
                        float: left;
                        margin: 7px 0 0 0;
                        color: #ccc;
                    }
                    .play-icon{
                        position: absolute;
                        right: 10px;
                        bottom: 5px;
                        width: 16px;
                        height: 17px;
                        background: url('../../assets/iconall.png') no-repeat;
                        background-position: 0 0;
                        &:hover{
                            background-position: 0 -60px;
                        }
                    }
                }
            }
            p{
                margin: 8px 0 3px;
                font-size: 14px;
                 text-align: left;
                a{
                   
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
     
        }
    }
}

</style>