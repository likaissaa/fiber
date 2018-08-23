<template>
	<el-tabs v-model="activeName" @tab-click="handleClick" class="el-tabs">
		<el-tab-pane :key="item.name" v-for="(item, index) in options" :label="item.name" :name="item.route">
			<router-view></router-view>
		</el-tab-pane>
		<!--<el-tab-pane label="执照上传"name="first">执照上传</el-tab-pane>-->

		<!--<el-tab-pane label="附件上传"name="second">附件上传</el-tab-pane>
		<el-tab-pane label=""name="third">样品采集</el-tab-pane>
		<el-tab-pane label=""name="fourth">封样</el-tab-pane>
		<el-tab-pane label=""name="fifth">物流</el-tab-pane>-->
	</el-tabs>
</template>
<script>
	import {
		mapState
	} from 'vuex'
	export default {
		computed: {
			options() {

				return this.$store.state.options;
			},
			// 使用对象展开运算符将此对象混入到外部对象中
			activeName: {
				get() {
					/*console.log("我来获取值"+this.$store.state.activeName)*/
					return this.$store.state.activeName;
				},
				set(val) {
					/*console.log("我来设置值"+val)*/
					this.$store.dispatch('activeName', val);
				}
			}

		},
		methods: {
			handleClick(tab, event) {
				let path = this.activeName;
				this.$router.push({
					path: path
				});
			}
		},
		watch: {
			'$route' (to) {
				this.$store.dispatch("activeName", to.path)
					//即将要去的 to 中的路径 告诉下一个activeIndex

			}
		}
	};
</script>
<style type="text/css">
	.el-tabs {
		width: 90%;
		margin: 0 auto;
		border: 1px solid #d5d5d;
		border-radius: 4px;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, .6);
	}
	
	.el-tabs__nav {
		width: 100%;
	}
	
	.el-tabs__nav .el-tabs__item {
		width: 20%;
		text-align: center;
		box-sizing: border-box;
	}
	
	.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
		color: #409EFF;
		background-color: #fff;
		border-right-color: #dcdfe6;
		border-left-color: #dcdfe6;
	}
	
	.el-tabs__content {
		min-height: 600px;
		padding: 0 20px;
	}
</style>