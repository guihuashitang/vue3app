<template>
    <div class="aside">
       <div class="w-info">
            <p class="note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <a hidefocus="true" class="login-btn" href="javascript:void(0)">用户登录</a>
       </div>
       <div class="singer">
           <h3 class="flexR">
               <span class="">入驻歌手</span>
               <a class="more" href="">查看全部 ></a>
           </h3>
           <ul>
               <li class="flexR" v-for="item in singerList" :key="item.name">
                   <img class="head" :src="item.headIcon" alt="">
                   <div class="info">
                       <h4 class="a-line">{{item.name}}</h4>
                       <p class="a-line">{{item.desc}}</p>
                   </div>
               </li>
           </ul>
           <div class="singer-btn">
               <i>申请成为网易音乐人</i>  
           </div>
       </div>
       <div class="anchor singer">
           <h3>
               <span class="">热门主播</span>
           </h3>
           <ul>
               <li class="flexR" v-for="item in anchorList" :key="item.name">
                   <img class="head" :src="item.headIcon" alt="">
                   <div class="info flexC">
                       <p class="a-name a-line">{{item.name}}</p>
                       <p class="a-line">{{item.desc}}</p>
                   </div>
               </li>
           </ul>
       </div>
    </div>
</template>

<script lang="ts">
import { ref,defineComponent,onMounted, reactive,resolveDirective,provide,computed } from 'vue';
import { getSinger } from './recommend';

export default defineComponent({
    name: 'Aside',  
    components: {},
    setup(){
        let singerList:any = reactive([
            {
                name: '张惠妹aMEI',
                desc: '台湾歌手张惠妹',
                headIcon: require('@/assets/109951165588539704.jpg'),
            },
            {
                name: 'Fine乐团',
                desc: '独立音乐人',
                headIcon: require('@/assets/109951166047225823.jpg'),
            },
            {
                name: '萬曉利',
                desc: '民谣歌手、中国现代民谣的代表人物之一',
                headIcon: require('@/assets/109951162916034289.jpg'),
            },
            {
                name: '音乐人赵雷',
                desc: '民谣歌手',
                headIcon: require('@/assets/18806046882229308.jpg'),
            },
            {
                name: '王三溥',
                desc: '音乐人',
                headIcon: require('@/assets/109951166457235020.jpg'),
            },
        ]);

        let anchorList:any = reactive([
            {
                name: '陈立',
                desc: '心理学家、美食家陈立教授',
                headIcon: require('@/assets/1407374893913311.jpg'),
            },
            {
                name: '刘维-Julius',
                desc: '歌手、播客节目《维维道来》主理人',
                headIcon: require('@/assets/109951164843970584.jpg'),
            },
            {
                name: '莫非定律MoreFeel',
                desc: '男女双人全创作独立乐团',
                headIcon: require('@/assets/109951166239584597.jpg'),
            },
            {
                name: '碎嘴许美达',
                desc: '脱口秀网络红人',
                headIcon: require('@/assets/109951165825466770.jpg'),
            },
            {
                name: '银临Rachel',
                desc: '古风音乐人',
                headIcon: require('@/assets/109951163676573083.jpg'),
            },
        ])

        const getSingerList = async()=>{
            getSinger().then((res:any)=>{
                singerList.value = res.artists
                console.log('rankMap',singerList)
            })
        }


        // onMounted(()=>{
        // })
        
        return {
            singerList,
            anchorList,
        }
    }
});
</script>

<style lang="scss" scoped>
.aside{
    .w-info{
        height: 126px;
        padding-top: 0;
        background: url('../../assets/index.png') no-repeat 0 9999px;
        background-position: 0 0;
        .note{
            width: 205px;
            margin: 0 auto;
            padding: 16px 0;
            line-height: 22px;
            color: #666;
        }
        .login-btn{
            display: block;
            margin: 0 auto;
            width: 100px;
            height: 31px;
            line-height: 31px;
            text-align: center;
            color: #fff;
            text-shadow: 0 1px 0 #8a060b;
            background: url('../../assets/index.png') no-repeat 0 9999px;
            background-position: 0 -195px;
            &:hover{
                background-position: -110px -195px;
            }
        }
    }

    .singer{
        margin-top: 15px;
        h3{
            justify-content: space-between;
            position: relative;
            height: 23px;
            margin: 0 20px;
            border-bottom: 1px solid #ccc;
            color: #333;
            font-size: 12px;
            a{
                color: #666;
                cursor: pointer;
                font-weight: normal;
            }
        }
        ul{
            margin: 6px 0 14px 20px;
            list-style: none;
            li{
                margin-top: 14px;
                width: 210px;
                height: 62px;
                background: #fafafa;
                cursor: pointer;
                .head{
                    width: 62px;
                    height: 62px;
                }
                .info{
                    width: calc(100% - 62px);
                    height: 62px;
                    padding-left: 14px;
                    border: 1px solid #e9e9e9;
                    border-left: none;
                    text-align: left;
                    h4{
                        margin-top: 8px;
                        font-size: 14px;
                    }
                    p{
                        width: 90%;
                        margin-top: 8px;
                    }
                    &:hover{
                        background: #f4f4f4;
                    }
                }
            }
        }
        .singer-btn{
            i{
                display: block;
                width: 210px;
                height: 30px;
                line-height: 30px;
                font-weight: bold;
                color: #333;
                border-radius: 3px;
                background: linear-gradient(to bottom,#fff,#e9e9e9);
                border: 1px solid #ccc;
                margin: 0 auto;
                cursor: pointer;
                &:hover{
                    background: #fff
                }
            }
        }
    }
    .anchor{
        margin-top: 30px;
        text-align: left;
        ul{
            margin: 20px 0 0 20px;
            li{
                width: 210px;
                height: 50px;
                background: transparent;
                cursor: auto;
                .head{
                    width: 40px;
                    height: 40px;
                    cursor: pointer;
                }
                .info{
                    width: calc(100% - 40px);
                    height: 40px;
                    padding-left: 10px;
                    border: none;
                    background: transparent;
                    justify-content: space-around;
                    align-items: flex-start;
                    &:hover{
                        background: transparent;
                    }
                    p{
                        color: #666;
                        margin: 0;
                    }
                    .a-name{
                        color: #000;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>