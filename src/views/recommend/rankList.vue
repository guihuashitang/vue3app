<template>
    <div class="rankList">
        <ReTitle title='榜单' />
        <div class="n-bilst"></div>
    </div>
</template>

<script lang="ts">
import { ref,defineComponent,onMounted, resolveDirective,provide,computed } from 'vue';
import { getHotDay } from './recommend';
import ReTitle from '@/components/reTitle/reTitle.vue'

export default defineComponent({
    name: 'RankList',
    components: {   
        ReTitle,
    },
    setup(){
            let newList:any = ref([]); 
            const title = '榜单';
            //向子组件共享数据
            provide('title', title);

            const formatPay = computed(()=>(payNum:number)=>{
                return payNum.toString().length>4?payNum.toString().substring(0,payNum.toString().length-4)+'万':payNum
            });

            const hotData = async()=>{
                getHotDay().then((res:any)=>{
                    newList.value = res.result
                    console.log('hotList',newList)
                })
            }
            onMounted(()=>{
            // hotData()
            })
            
            return {
                newList,
                formatPay
            }
    }
});
</script>

<style lang="scss" scoped>
.n-bilst{
    height: 472px;
    margin-top: 20px;
    padding-left: 1px;
}

</style>