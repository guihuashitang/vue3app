<template>
  <div class="home">
    <HeadNav/>
    <ChildMenu/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeadNav from '@/components/headComponent/headComponent.vue'; // @ is an alias to /src
import ChildMenu from '@/components/headComponent/childMenu.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HeadNav,
    ChildMenu
  },
});
</script>
