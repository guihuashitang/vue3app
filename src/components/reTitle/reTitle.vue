<template>
    <div class="ReTitle">
        <a class="title-main">{{title}}</a>
        <div class="tab">
            <a v-for="item in titleSub" :key="item.value" class="tab-item">{{item.name}}</a>
        </div>
        <span class="more"><a>更多</a><i class="iconfont icon-V"></i></span>
    </div>
</template>

<script lang="ts">
import { ref,reactive,defineComponent,onMounted,computed,inject } from 'vue';

 
export default defineComponent({
    name: 'ReTitle',
    setup(props){
        const title:string|undefined = inject('title')
        const titleSub:any = inject('titleSub')

        onMounted(()=>{
            console.log('title',title)
        })
        
        return {
            title,
            titleSub,
        }
    }
});

</script>

<style lang="scss" scoped>
@import '@/style/font-icon.scss';
.ReTitle{
    height: 33px;
    line-height: 33px;
    margin-bottom: 20px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
    position: relative;
    .title-main{
        float: left;
        font-size: 20px;
        font-weight: normal;
        color: #333;
    }
    .tab{
        float: left;
        margin-left: 20px;
        font-size: 12px;
        color: #666;
        a{
            position: relative;
            margin-right: 20px;
            &::after{
                content: "|";
                position: absolute;
                color: #ccc;
                right: -10px;
            }
            &:hover{
                text-decoration: underline;
            }
            &:last-child::after{
                content: none;
            }
        }
    }
    .more{
        float: right;
        font-size: 12px;
        color: #666;
        a{
            &:hover{
                text-decoration: underline;
            }
        }
        i{
            color: #C10D0C;
            font-size: 12px;
            margin-left: 5px;
        }
    }
    &::before{
        content: ' ';
        width: 6px;
        height: 6px;
        border: 5px solid #C10D0C;
        border-radius: 100%;
        position: absolute;
        top: 50%;
        transform-origin: center;
        transform: translateY(-9px);
        left: 10px;
    }
}
</style>