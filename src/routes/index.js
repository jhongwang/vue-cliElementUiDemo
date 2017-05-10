/**
 * @file
 * Created by hanan on 16/10/15.
 */
const appNav = require('../views/appNav.vue');
const appNotFind = require('../views/appNotFind.vue');
const appNav1 = require('../views/appnav1.vue');
const appNav2 = require('../views/appnav2.vue');
const appNav3 = require('../views/appnav3.vue');

// 根目录
const rootPath = '';

// 页面路由
const routes = [
  {
  	 path: '/appnav1', component: appNav1, name: 'appnav1'
  },
  {
     path: '/appnav2', component: appNav2, name: 'appnav2'
  },
  {
     path: '/appnav3', component: appNav3, name: 'appnav3'
  },
 
   // {
   //   path: '/home', component: Home, name: '/home',
   //   children:[
   //      {path:'/',component:HomeChoose,name:'/home/choose'},
   //      {path:'choose',component:HomeChoose},
   //      {path:'rank',component:HomeRank}
   //   ]
   // },

  {path: '*', redirect: {name: 'appnav1'}},
].map(route => {
  route.path = rootPath + route.path;
  return route;
});

// 404 页
routes.push({path: '*', component: appNotFind, name: 'appNotFind'});

export default routes;
