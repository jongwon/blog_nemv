<template>
	<div class="privacy-page">
		<page-header :bg-color="bgColor"
			:title="title"
			:sub-title="subTitle"     
			:slidmenushow="slidmenushow" 
			:backbuttonshow="backbuttonshow">
		</page-header>

		<div class="body screen-center" style="padding: 15px;">
			<div class="panel panel-default">
				<div class="panel-heading"> <i class=""></i> 개인정보 취급방침 </div>
				<div class="panel-body">
					<pre id="privacy"></pre>
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
	name: 'privacy',
	data() {
		return {
			bgColor: 'blue-grey',
	  		chevronRightColor: 'material-icons-blue-grey',
			title: ' 개인정보취급방침 ',
			subTitle: '',
	  		slidmenushow: false,
	  		backbuttonshow: true,
	  	}
	},
	created() {
		// $.get('/student/module-static/cs/txt/privacy.txt', function( data ) {
		// 	$('#privacy').html(data);
		// });
	}
}	
</script>
<style>
</style>