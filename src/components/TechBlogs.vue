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
					<div class="card article-card" v-for="blog in blogs" style="display: inline-block;">
						<div class="articla-title">
					      <span class="card-title activator grey-text text-darken-4">{{blog.title}}</span>
					    </div>
					    <div class="article-summary waves-effect waves-block waves-light">
					      {{blog.content}}
					    </div>
					    <div class="article-etc">
					    작성일 : 2017-01-03
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
			bgColor: 'oragne',
			title: '기술 블로그',
			slidmenushow: true,
			backbuttonshow: false
		}
	},

	computed: {
		...mapGetters({
			loading: "loading",
			user: "user",
			blogs: "blogs"
		})
	},

	created() {

	}, 
	mounted(){
		this.$store.dispatch('blogs_tech', {
			success(){}, 
			fail(){}
		});
	},

	methods: {

		reload(){

		}
		
	}
}
	
</script>
<style lang="scss" scoped>
.myhome-page{
	
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
		    padding: 1em;
		    border-radius: 5px;
		}

		.article-card {

			.articla-title {

			}

			.article-summary {

			}

			.article-etc{
				float: right;
			}
		}
	}
}
</style>
