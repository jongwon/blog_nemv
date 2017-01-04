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
					<div class="card" v-for="i in 10" style="display: inline-block;">
					    <div class="card-image waves-effect waves-block waves-light" style="padding:1em;">
					      여기에 글에 대한 소개글이 간략하게 들어가는 것이 좋겠다.  <br>
					      이런 식으로 몇개를 더 만들어 봐야 할 듯...
					    </div>
					    <div class="card-content">
					      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
					      <p><a href="#">This is a link</a></p>
					    </div>
					    <div class="card-reveal">
					      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
					      <p>Here is some more information about this product that is only revealed once clicked on.</p>
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
			title: '블로그 홈',
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
.myhome-page {
	.cards-container {

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center; 
		align-items: center;
		flex-grow: 1;

		.card {
			margin: 1em 1em 0em 1em;
		    display: inline-block;
		    overflow: visible;
		    border: 1px solid #ccc;
		    max-width: 400px;
		}
	}
}
</style>
