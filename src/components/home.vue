<template>
	<div>
		<v-header></v-header>
		<el-container>
			<el-header></el-header>
			<el-main>
				<v-main></v-main>
				<!--<el-row >
					<el-col :md="16">
						<div class="grid-content bg-purple">
							
						</div>
					</el-col>
					<el-col :md="8">
						<div class="grid-content bg-blue">456</div>
					</el-col>
				</el-row>-->
			</el-main>
		</el-container>

	</div>
</template>

<script type="text/javascript">
	import Header from '@/components/header.vue'
	import Maincontent from '@/components/maincontent.vue'
	export default {
		data() {
				return {

				}
			},
			components: {
				vHeader: Header,
				vMain: Maincontent
			},
			methods: {

			}

	}
</script>