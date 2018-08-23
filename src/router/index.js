import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Upload from '@/components/upload'
import Fjupload from '@/components/fjupload'
import Collect from '@/components/collect'
import Fengyang from '@/components/fengyang'
import Wuliu from '@/components/wuliu'
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		redirect: '/home/upload',
		component: Home,
		children: [
		{
			path: '/home/upload',
			component: Upload
		}, 
		{
			path: '/home/fjupload',
			component: Fjupload
		}, 
		{
			path: '/home/collect',
			component: Collect
		}, 
		{
			path: '/home/fengyang',
			component: Fengyang
		}, 
		{
			path: '/home/wuliu',
			component: Wuliu
		}]
	}]
})