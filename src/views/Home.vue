<template>
  <div class="home">
    <HeadNav/>
    <ChildMenu/>
    <router-view></router-view>
    <Foot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeadNav from '@/components/headComponent/headComponent.vue'; // @ is an alias to /src
import ChildMenu from '@/components/headComponent/childMenu.vue';
import Foot from '@/components/foot/foot.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HeadNav,
    ChildMenu,
    Foot
  },
});
</script>
