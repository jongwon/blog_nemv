<template>
	<div class="terms-page">
		<page-header :bg-color="bgColor"
			:title="title"
			:sub-title="subTitle"     
			:slidmenushow="slidmenushow" 
			:backbuttonshow="backbuttonshow">
		</page-header>

		<div class="body screen-center" style="padding: 15px;">
			<div class="panel panel-default">
				<div class="panel-heading"> <i class=""></i> 이용 약관 </div>
				<div class="panel-body">
					<pre id="terms"></pre>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

import PageHeader from '../util/PageHeader'

export default {
	components:{
		PageHeader
	},
	name: 'terms',
	data() {
		return {
			bgColor: 'blue-grey',
	  		chevronRightColor: 'material-icons-blue-grey',
			title:' 이용약관 ',
			subTitle: '',
	  		slidmenushow: false,
	  		backbuttonshow: true,
	  	}
	},
	created() {
		// $.get('/student/module-static/cs/txt/terms.txt', function( data ) {
		// 	$('#terms').html(data);
		// });
	}
}	
</script>
<style>
</style>