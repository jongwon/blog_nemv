<template>
	<header>
		<ul id="slide-out" class="side-nav">
		<template v-if="user">
			<li>
				<div class="user-profile">
					<div class="userView profile">
						<input type="file" name="profile-image" 
							accept="image/*" style="display:none;">
						<img class="circle" 
							src="/blog_nemv/static/blog_nemv/image/user.png" 
							@click="profileUpload()">
					</div>
					<div class="desc">
						<a><span class="name"> {{user.name}} </span></a>
					</div>
				</div>
			</li>
			<li><a class="waves-effect" @click="logout()">Logout</a></li>
			<li><div class="divider"></div></li>
			<li v-for="menu in menus">
				<a @click="goPage(menu.path)">
					<i class="material-icons">{{menu.icon}}</i> {{menu.title}} 
				</a>
			</li>
	    </template>
	    <template v-else>
			<li>
				로그아웃 되었습니다. <br>
				로그인을 해주십시오. 
			</li>
	    </template>      
		</ul>
      	<a href="#" data-activates="slide-out" class="button-collapse"></a>
    </header>
</template>

<style lang="scss" scoped>
.side-nav {

	.user-profile {
		display: flex;
		flex-direction: row;

		.profile{
			width: 96px;
			display: inline-block;
		}
		.desc {
			display: inline-block;
    		padding: 16px 0px 0px 0px;
		}

	}
}
</style>

<script>

import { mapGetters } from 'vuex'
import menus from './menus_data'
	
export default {
	name: 'menus',

	mounted(){
		$(this.$el).find('.button-collapse').sideNav({
				menuWidth: 240,
				edge: 'left',
				closeOnClick: true
			}
		);
		this.$root.bus.$on('show-nav', this.showNav)
		this.$root.bus.$on('hide-nav', this.hideNav)
	},

	beforeDestory(){
		this.$root.bus.$off('show-nav', this.showNav)
		this.$root.bus.$off('hide-nav', this.hideNav)
	},

	computed: {
		
		...mapGetters({
			imageServerUrl: "imageServerUrl",
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