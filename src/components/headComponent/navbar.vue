<template>
    <div class="nav">
        <ul class="flexR">
            <li v-for="item in navList" :key="item.name">
                <a @click="changeMenu(item.name,item)" :class="{'activeStyle':item.name==activeMenu}" hidefocus="true">
                    <em>{{item.meta.title}}</em>
                    <sup class="normalSup" :class="{'hotSup':hotMenu.includes(item.name),'activeSup':item.name==activeMenu}">&nbsp;</sup>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { ref,reactive,defineComponent,onMounted,computed } from 'vue';
import {routes} from '@/router';
import {mapGetters,useStore} from 'vuex'
 
export default defineComponent({
  name: 'Navbar',
  setup(){
        let store = useStore()
        const navList = reactive(routes);
        const activeMenu = computed(()=>store.getters.activeMenu);
        const hotMenu = computed(()=>store.state.app.hotMenu);
        const changeMenu = (name:string,data:any)=>{
            if(name==store.getters.activeMenu) return
            store.dispatch('setActiveMenu',name)
            if(data.children){
                store.dispatch('setActiveChildMenu',data.children[0].name)
                store.dispatch('setChildRoutes',data.children)
            }else{
                store.dispatch('setChildRoutes',[])
            }
            
            
        }

        onMounted(()=>{
          console.log(navList)
        })
        
        return {
            navList,
            activeMenu,
            hotMenu,
            changeMenu
        }
  }
});

</script>

<style lang="scss" scoped>
@import '@/style/common.scss';
.nav{
    height: 100%;
    ul{
        list-style: none;
        float: left;
        li{
            a{
                display: block;
                padding: 0 19px;
                text-align: center;
                line-height: 70px;
                height: 70px;
                position: relative;
                em{
                    height: 70px;
                    color: #ccc;
                    font-size: 14px;
                }
                .normalSup{
                    display: none;
                }
                .hotSup{
                    display: block;
                    position: absolute;
                    top: 21px;
                    left: 100px;
                    width: 28px;
                    height: 19px;
                    background: url('../../assets/topbar.png') no-repeat;
                    background-position: -190px 0;
                }
                .activeSup{
                    display: block;
                    position: absolute;
                    left: 50%;
                    top: 64px;
                    width: 12px;
                    height: 7px;
                    margin-left: -6px;
                    overflow: hidden;
                    background: url('../../assets/topbar.png') no-repeat;
                    background-position: -226px 0;
                }
                &:hover{
                    background: $activeMenuColor;
                    color: #fff
                }
            }
            .activeStyle{
                background: $activeMenuColor;
                color: #fff
            }
        }
    }
}
</style>