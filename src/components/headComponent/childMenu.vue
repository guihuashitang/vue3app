<template>
<div class="ChildMenu">
   <ul class="flexR" :class="{'noChild':childRoutes.length==0}">
       <li v-for="item in childRoutes" :key="item.name"><a @click="changeChildMenu(item.name)" :class="{'activeChild':item.name==activeChildMenu}">{{item.meta.title}}</a></li>
   </ul>

</div>
</template>


<script lang="ts">
import { ref,reactive,defineComponent,onMounted,computed } from 'vue';
import {routes} from '@/router';
import {mapGetters,useStore} from 'vuex'
 
export default defineComponent({
  name: 'ChildMenu',
  setup(){
        let store = useStore()
        const childRoutes = computed(()=>JSON.parse(store.getters.childRoutes));
        const activeChildMenu = computed(()=>store.getters.activeChildMenu);
        
        const changeChildMenu = (name:string)=>{
            console.log('123333')
            if(name==store.getters.activeChildMenu) return
            store.dispatch('setActiveChildMenu',name)
        }
        onMounted(()=>{
          console.log( store.getters.childRoutes)
        })
        
        return {
            childRoutes,
            activeChildMenu,
            changeChildMenu
        }
  }
});

</script>

<style lang="scss" scoped>
.ChildMenu{
    // height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    ul{
        list-style: none;
        height: 35px;
        justify-content: flex-start;
        width: 1100px;
        margin: 0 auto;
        padding-left: 196px;
        li{
            a{
                display: block;
                height: 20px;
                padding: 0 13px;
                border-radius: 20px;
                line-height: 20px;
                color: #fff;
                font-size: 12px;
                &:hover{
                    background: #9B0909;
                }
            }
            .activeChild{
                background: #9B0909;
            }
        }
    }
    .noChild{
        height: 5px;
    }
}
</style>