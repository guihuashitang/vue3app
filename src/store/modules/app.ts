import Cookies from 'js-cookie'
import {routes} from '@/router';

const app: any = {
  state: {
    activeMenu: Cookies.get('activeMenu') || 'Home',
    activeChildMenu: Cookies.get('activeChildMenu') || 'Recommend',
    hotMenu: ['downLoadApp'],
    childRoutes: Cookies.get('childRoutes')||JSON.stringify(routes[0].children),
  },
  mutations: {
    SET_ACTIVEMENU: (state: any, activeMenu: string) => {
      state.activeMenu = activeMenu;
    },
    SET_ACTIVECHILDMENU: (state: any, activeChildMenu: string) => {
      state.activeChildMenu = activeChildMenu;
    },
    SET_CHILDROUTES: (state: any, childRoutes: string) => {
      state.childRoutes = childRoutes;
    },
  },
  actions: {
    setActiveMenu({ commit }: any, activeMenu: string) {
      Cookies.set('activeMenu', activeMenu);
      commit('SET_ACTIVEMENU', activeMenu);
    },
    setActiveChildMenu({ commit }: any, activeChildMenu: string) {
      Cookies.set('activeChildMenu', activeChildMenu);
      commit('SET_ACTIVECHILDMENU', activeChildMenu);
    },
    setChildRoutes({ commit }: any, childRoutes: string) {
      Cookies.set('childRoutes', JSON.stringify(childRoutes));
      commit('SET_CHILDROUTES', JSON.stringify(childRoutes));
    },
  },
}

export default app