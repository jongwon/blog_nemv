<template>
	<div class="myhome-page">

		<page-header :bg-color="bgColor"
			:title="title"
			:slidmenushow="slidmenushow" 
			:backbuttonshow="backbuttonshow">
      		<ul id="nav-mobile" slot="right-menu" 
      			class="right hide-on-med-and-down"
      			style="display: flex !important;">
        		<li>
        			<a class="waves-effect waves-light dropdown-button" 
        				data-activates="dropdown-categories">
        				<i class="material-icons" style="">more_vert</i>
        			</a>
					<ul id="dropdown-categories" class="dropdown-content">
						<li>
							<a class="waves-effect waves-light" 
								@click="reload()"> 새로고침 </a>
						</li>
					</ul>
        		</li>
      		</ul>
		</page-header>

		<div class="body screen-center" v-if="!loading">
			<div class="row">
				<div class="col s12 cards-container">
					<div class="card">
						<div class="card-content">
							<p>
								어떤 내용이 나와야 할까요?
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="loadingbar-container" v-if="loading">
			<loading-bar message="정보를 가져오는 중입니다..."/>
		</div>

	</div>
</template>
<script>

import { mapGetters } from 'vuex'
import PageHeader from '../util/PageHeader'
import LoadingBar from '../util/LoadingBar'


export default {

	components: {
		PageHeader,
		LoadingBar
	},

	name: 'courselist',

	data: function(){
		return {
			bgColor: 'blue',
			title: 'My Home',
			slidmenushow: true,
			backbuttonshow: false
		}
	},

	computed: {
		...mapGetters({
			loading: "loading",
			user: "user"
		})
	},

	created() {

	}, 
	mounted(){

	},

	methods: {

		reload(){

		}
		
	}
}
	
</script>
<style lang="scss" scoped>
.myhome-page{

}
</style>
