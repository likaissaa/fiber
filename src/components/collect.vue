<template>
	<div>
		<el-row>
			<el-col :span="16">
				<table class="tablelayout">
					<tr>
						<td colspan="3" class="text-center">任务来源</td>
						<td colspan="5">
							<el-input></el-input>
						</td>
						<td colspan="4" class="text-center">检验类别</td>
						<td colspan="4">
							<el-select v-model="value" placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</td>
					</tr>
					<tr>
						<td rowspan="9" class="text-center word">受<br />检<br />产<br />品<br />信<br />息</td>
						<td colspan="2" class="text-center">受检产品</td>
						<td colspan="5" class="word edit">
							<el-input></el-input>
						</td>
						<td colspan="4" class="text-center word">商标</td>
						<td class="trademark" colspan="4">
							<el-input></el-input>
						</td>
					</tr>
					<tr>
						<td colspan="2" class=" text-center">型号/规格</td>
						<td colspan="5" class="word edit">
							<el-input></el-input>
						</td>
						<td colspan="4" class="text-center word">批(编)号/生产日期</td>
						<td colspan="4" class="word edit">
							<el-input></el-input>
						</td>
					</tr>
					<tr>
						<td colspan="2" class="text-center word">产品等级</td>
						<td colspan="5" class="word edit">
							<el-input></el-input>
						</td>
						<td colspan="4" class="text-center word">出厂价/销售价</td>
						<td colspan="4" class="word edit">
							<el-input></el-input>
						</td>
					</tr>
					<tr>
						<td colspan="2" class="text-center word">抽样基数</td>
						<td colspan="3" class="word edit">
							<el-input></el-input>
							<el-select v-model="value" placeholder="请选择">
								<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</td>
						<td colspan="2" class="text-center word">抽样数量</td>
						<td colspan="2" class="word edit">
							<el-input></el-input>
							<el-select v-model="value" placeholder="请选择">
								<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</td>
						<td colspan="2" class="text-center word">产品标注执行标准</td>
						<td colspan="4" class="word edit">
							<el-input></el-input>
						</td>
					</tr>
					<tr>
						<td colspan="2" class="text-center word">抽样日期</td>
						<td colspan="5" class="word edit"><el-input></el-input></td>
						<td colspan="4" class="text-center word">抽样地点</td>
						<td colspan="4" class="word">
							<el-input></el-input>
						</td>
					</tr>
				</table>
			</el-col>
			<el-col :span="8">我曹</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				options2: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: ''
			}
		}
	}
</script>
<style>
	table {
		font-size: 12px;
	}
	
	.tablelayout {
		table-layout: fixed;
	}
	
	.text-center {
		text-align: center
	}
	
	.word {
		word-wrap: break-word;
		word-break: break-all
	}
	
	table,
	table tr,
	table tr td {
		width: 100%;
		border: 1px solid #d5d5d5;
		border-collapse: collapse;
	}
</style>