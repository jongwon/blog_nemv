<template>
	<header>
		<ul id="slide-out" class="side-nav fixed">
			<li>
				<div class="user-profile">
					<div class="desc">
						<a><span class="name"> 종원이의 블로그 </span></a>
					</div>
				</div>
			</li>
			<li><div class="divider"></div></li>
			<li v-for="menu in menus">
				<a @click="goPage(menu.path)">
					<i class="material-icons">{{menu.icon}}</i> {{menu.title}} 
				</a>
			</li>
		</ul>
      	<a href="#" data-activates="slide-out" class="button-collapse"></a>
    </header>
</template>

<style lang="scss" scoped>

#slide-out {
	background-color: #51859e;

	li, li a, li i {
		color: #fff;
	}
}

.side-nav li.active {
    background-color: rgba(0,0,0,0.08) !important;
}


.side-nav li.active {
    background-color: rgba(0,0,0,0.08) !important;
}

.side-nav {

	.user-profile {
		display: flex;
		flex-direction: row;

		.desc {
			display: inline-block;
    		padding: 16px 0px 0px 0px;
		}

	}

	&.fixed {
		width: 240px;
	}
}
</style>

<script>

import { mapGetters } from 'vuex'
import menus from './menus_data'
	
export default {
	name: 'menus',

	mounted(){
		$(this.$el).find('.button-collapse').sideNav();
		this.$root.bus.$on('show-nav', this.showNav)
		this.$root.bus.$on('hide-nav', this.hideNav)
	},

	beforeDestory(){
		this.$root.bus.$off('show-nav', this.showNav)
		this.$root.bus.$off('hide-nav', this.hideNav)
	},

	computed: {
		
		...mapGetters({
			user: "user"
		}),

		menus(){
			return menus;
		}
	},

	methods: {

		showNav(){
			$(this.$el).find('.button-collapse').sideNav('show');
		},

		hideNav(){
			$(this.$el).find('.button-collapse').sideNav('hide');
		},

		logout(){
			this.hideNav();
			this.$store.dispatch('logout');
			this.$router.go({name:'login'});
		},

		goPage(nextPath){
			this.$router.push({path:nextPath});
			this.hideNav();
		},

		profileUpload(){

		}
	}

}

</script>