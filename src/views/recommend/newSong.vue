<template>
    <div class="newSong">
        <ReTitle title='新碟上架' />
        <div class="r-disk">
            <div class="inner">
                <div class=""></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref,defineComponent,onMounted, resolveDirective,provide,computed } from 'vue';
import { getHotDay } from './recommend';
import ReTitle from '@/components/reTitle/reTitle.vue'

export default defineComponent({
    name: 'NewSong',
    components: {   
        ReTitle,
    },
    setup(){
            let newList:any = ref([]); 
            const title = '新碟上架';
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
.r-disk{
    position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    .inner{
        height: 184px;
        padding-left: 16px;
        background: #f5f5f5;
        border: 1px solid #fff;
    }
}


</style>