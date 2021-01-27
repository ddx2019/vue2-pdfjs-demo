import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/previewPDF1'
  },
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        name: 'previewPDF1',
        path: '/previewPDF1',
        component: () => import('@/components/previewPDF.vue')
      },
      {
        name: 'previewPDF2',
        path: '/previewPDF2',
        component: () => import('@/components/HelloWorld.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
