<template>
    <div class="rankList">
        <ReTitle title='榜单' />
        <div class="n-bilst flexR">
            <dl v-for="(item,key) in rankMap" :key="key">
                <dt>
                    <div class="cver">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="tit">
                        <h3>{{item.name}}</h3>
                        <div class="btn">
                            <a class="btn-play" href="" title="播放">播放</a>
                            <a class="btn-like" href="" title="收藏">收藏</a>
                        </div>
                    </div>
                </dt>
                <dd>
                    <ol>
                        <li v-for="(ele,index) in item.list" :key="ele.name">
                            <span class="no" :class="{'no-top':index<3}">{{index+1}}</span>
                            <a class="nm a-line" hidefocus="true" href="#">{{ele.name}}</a>
                            <div class="oper">
                                <a class="i-bg i-play" href="#" hidefocus="true"></a>
                                <a class="i-bg i-add" href="#" hidefocus="true"></a>
                                <a class="i-bg i-col" href="#" hidefocus="true"></a>
                            </div>
                        </li>
                    </ol>
                    <div class="more">
                        <a class="a-more" href="">查看全部></a>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script lang="ts">
import { ref,defineComponent,onMounted, reactive,resolveDirective,provide,computed } from 'vue';
import { getRankName, getRankDetail } from './recommend';
import ReTitle from '@/components/reTitle/reTitle.vue'

export default defineComponent({
    name: 'RankList',  
    components: {
        ReTitle,
    },
    setup(){
            let newList:any = ref([]);
            let rankMap:any = reactive({
                up: {
                    name: '飙升榜',
                    id: 19723756,
                    img: require('@/assets/18696095720518497.jpg'),
                    list: []
                },
                new: {
                    name: '新歌榜',
                    id: 3779629,
                    img: require('@/assets/18713687906568048.jpg'),
                    list: []
                },
                self: {
                    name: '原创榜',
                    id: 2884035,
                    img: require('@/assets/18740076185638788.jpg'),
                    list: []
                },
            })
  
            const title = '榜单';
            //向子组件共享数据
            provide('title', title);

            const getTitle = async()=>{
                getRankName().then((res:any)=>{
                    newList.value = res.result
                    console.log('rankMap',newList)
                })
            }

            const getRankList = async(id:number)=>{
                return new Promise((reslove,reject)=>{
                    getRankDetail({id}).then((res:any)=>{
                        reslove(res)
                    })
                })
               
            }

            onMounted(()=>{
                let AjaxArr = [];
                for(let item in rankMap){
                    AjaxArr.push(getRankList(rankMap[item].id))
                }
                Promise.all(AjaxArr).then((res:any)=>{
                    console.log('res',res)
                    rankMap.up.list = res[0].playlist.tracks.slice(0,10)
                    rankMap.new.list = res[1].playlist.tracks.slice(0,10)
                    rankMap.self.list = res[2].playlist.tracks.slice(0,10)
                })
            })
            
            return {
                newList,
                rankMap,
            }
    }
});
</script>

<style lang="scss" scoped>
.n-bilst{
    height: 473px;
    margin-top: 20px;
    padding-left: 1px;
    border: 1px solid #ccc;
    background: #f4f4f4;
    text-align: left;
    dl{
        width: 230px;
        padding: 0;
        margin: 0;
        position: relative;
        &::after{
            content: '';
            width: 1px;
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            background: #ccc;
        }
        &:last-child:after{
            content: none;
        }
        dt{
            height: 120px;
            padding: 20px 0 0 19px;
            .cver{
                width: 80px;
                height: 80px;
                float: left;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .tit{
                float: left;
                width: 116px;
                margin: 6px 0 0 10px;
                h3{
                    &:hover{
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
                .btn{
                    margin-top: 10px;
                    a{
                        display: block;
                        float: left;
                        width: 22px;
                        height: 22px;
                        margin-right: 10px;
                        text-indent: -9999px;
                        background:url('../../assets/index.png') no-repeat 0 9999px;
                        &.btn-play{
                            background-position: -267px -205px;
                            &:hover{
                                background-position: -267px -235px;
                            }
                        }
                        &.btn-like{
                            background-position: -300px -205px;
                            &:hover{
                                background-position: -300px -235px;
                            }
                        }
                    }
                }
            }
        }
        dd{
            ol{
                height: 319px;
                line-height: 32px;
                list-style: none;
                li{
                    height: 32px;
                    padding-left: 50px;
                    &:nth-child(odd){
                        background: #e8e8e8;
                    }
                    &:hover{
                        .nm{
                            width: 96px;
                        }
                        .oper{
                            display: block;
                        }
                    }
                    .no{
                        float: left;
                        position: relative;
                        width: 35px;
                        height: 32px;
                        margin-left: -35px;
                        text-align: center;
                        color: #666;
                        font-size: 16px;
                    }
                    .no-top{
                        color: #c10d0c;
                    }
                    .nm{
                        float: left;
                        width: 170px;
                        color: #000;
                        height: 32px;

                        &:hover{
                            text-decoration: underline;
                        }
                    }
                    .oper{
                        display: none;
                        float: right;
                        width: 82px;
                        margin-top: 7px;
                        .i-bg{
                            float: left;
                            width: 17px;
                            height: 17px;
                            margin-right: 10px;
                            background:url('../../assets/index.png') no-repeat 0 9999px;
                            &.i-play{
                                background-position: -267px -268px;
                                &:hover{
                                    background-position: -267px -288px;
                                }
                            }
                            &.i-add{
                                margin: 2px 6px 0 0;
                                background:url('../../assets/icon.png') no-repeat 0 9999px;
                                background-position: 0 -700px;
                                &:hover{
                                    background-position: -22px -700px;
                                }
                            }
                            
                            &.i-col{
                                background-position: -297px -268px;
                                &:hover{
                                    background-position: -297px -288px;
                                }
                            }
                        }
                    }
                }
            }
            .more{
                height: 32px;
                padding-right: 32px;
                text-align: right;
                line-height: 32px;
                background: #e8e8e8;
                .a-more{
                    cursor: pointer;
                    color: #000;
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}

</style>