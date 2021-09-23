<template>
    <div class="foot">
        <div class="foot-in flexR">
            <div class="l-foot">
                <p class="link">
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
                    <span class="">网易公司版权所有©1997-2021</span>
                    <span class="">杭州乐读科技有限公司运营：</span>
                    <a class="">浙网文[2021] 1186-054号</a>
                </p>
                <p class="link">
                    <span class="">违法和不良信息举报电话：0571-89853516</span>
                    <span class="">举报邮箱：</span>
                     <a href="">ncm5990@163.com</a>
                </p>
                <p class="link">
                    <span class="line">粤B2-20090191-18  工业和信息化部备案管理系统网站  浙公网安备 33010902002564号</span>
                </p>
            </div>
            <div class="r-foot">
                
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref,defineComponent,onMounted, resolveDirective,provide,computed } from 'vue';

export default defineComponent({
    name: 'RankList',
    components: {   
   
    },
    setup(){
            let newList:any = ref([]); 
            const title = '榜单';
            //向子组件共享数据
            provide('title', title);

            const formatPay = computed(()=>(payNum:number)=>{
                return payNum.toString().length>4?payNum.toString().substring(0,payNum.toString().length-4)+'万':payNum
            });

 
            // onMounted(()=>{
            // })
            
            return {
                newList,
                formatPay
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
        justify-content: flex-start;
        .l-foot{

        }
    }

}

</style>