<template>
    <div class="HotSongs">
        <ReTitle title='热门推荐' :titleSub='titleSub'/>
        <div class="m-hl">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { ref,defineComponent,onMounted, resolveDirective,provide } from 'vue';
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

            const hotData = async()=>{
                getHotDay().then((res:any)=>{
                    hotList.value = res.banners
                    console.log('hotList',hotList)
                })
            }
            onMounted(()=>{
            hotData()
            })
            
            return {
                titleSub,
                hotList
            }
    }
});
</script>

<style lang="scss" scoped>

</style>