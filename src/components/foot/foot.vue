<template>
    <div class="foot">
        <div class="foot-in flexR">
            <div class="l-foot">
                <p class="link-1">
                    <a href="">服务条款</a>
                    <span class="line">|</span>
                    <a href="">隐私政策</a>
                    <span class="line">|</span>
                    <a href="">儿童隐私政策</a>
                    <span class="line">|</span>
                    <a href="">版权投诉指引</a>
                    <span class="line">|</span>
                    <a href="">意见反馈</a>
                    <span class="line">|</span>
                    <a href="">广告合作</a>
                </p>
                <p class="link">
                    <span class="sep">网易公司版权所有©1997-2021</span>
                    <span class="">杭州乐读科技有限公司运营：</span>
                    <a class="">浙网文[2021] 1186-054号</a>
                </p>
                <p class="link">
                    <span class="sep">违法和不良信息举报电话：0571-89853516</span>
                    <span class="">举报邮箱：</span>
                    <a href="" style="color: #333">ncm5990@163.com</a>
                </p>
                <p class="link">
                    <span class="">粤B2-20090191-18  工业和信息化部备案管理系统网站  浙公网安备 33010902002564号</span>
                </p>
            </div>
            <div class="r-foot">
                <ul class="flexR">
                    <li v-for="(item,index) in logoList" :key="index+''">
                        <a href="" :style="item.logo"></a>
                        <span :style="item.logoName"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref,defineComponent,onMounted, resolveDirective,provide,computed } from 'vue';

export default defineComponent({
    name: 'Foot',
    components: {   
   
    },
    setup(){
        let logoList = [
            {
                logo: {"background-position": "-63px -456.5px"},
                logoName: {"background-position": "0 -108px","margin-left": "-6px","width": "72px"},
            },
            {
                logo: {"background-position": "-63px -101px"},
                logoName: {"background-position": "-1px -91px"},
            },
            {
                logo: {"background-position": "0 0"},
                logoName: {"background-position": "0 0"},
            },
            {
                logo: {"background-position": "-60px -50px"},
                logoName: {"background-position": "0 -54px"},
            },
            {
                logo: {"background-position": "0 -101px"},
                logoName: {"background-position": "-1px -72px"},
            },
        ];
        // onMounted(()=>{
        // })
        
        return {
            logoList
        }
    }
});
</script>

<style lang="scss" scoped>
.foot{
    position: relative;
    height: 172px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
    .foot-in{
        width: 980px;
        margin: 0 auto;
        justify-content: space-between;
        .l-foot{
            color: #666;
            width: 520px;
            padding-top: 15px;
            line-height: 24px;
            .link-1{
                a{
                    color: #999;
                }
            }
        }
        .line{
            margin: 0 8px 0 10px;
            color: #c2c2c2;
        }
        .sep{
            margin-right: 14px;
        }
    }

    .r-foot{
        // width: 420px;
        margin-top: 33px;
        ul{
            margin: 0;
            list-style: none;
            li{
                width: 60px;
                height: 70px;
                margin-left: 30px;
                text-align: center;
                color: #666;
                a{
                    display: block;
                    float: none;
                    width: 50px;
                    height: 45px;
                    margin: 0 auto;
                    background: url('../../assets/foot_enter_new.png') no-repeat;
                    background-size: 110px 552px;
                }
                span{
                    display: block;
                    margin: 5px 5px 0;
                    width: 52px;
                    height: 14px;
                    background: url('../../assets/foot_enter_tt.png') no-repeat;
                    background-size: 180px 139px;
                }
            }
        }
    }

}

</style>