<template>

	<div class="login-form">
		<div class="input-fields">
		    <div class="input-field col s12">
		      <i class="material-icons prefix">account_circle</i>
		      <input id="icon_prefix" type="text" class="validate" v-model="email">
		      <label for="icon_prefix"> 아이디 </label>
		    </div>
		    <div class="input-field col s12">
		      <i class="material-icons prefix">lock_outline</i>
		      <input id="icon_telephone" type="password" class="validate" v-model="password" @keyup.enter="login()">
		      <label for="icon_telephone"> 패스워드 </label>
		    </div>
		</div>
		<div class="buttons">
			<a class="login-button waves-effect waves-light btn-large"
				@click="login()"
			>로그인 </a>
		</div>

		<div class="loadingbar-container screen-center" v-if="loading">
			<loading-bar message="로그인 중입니다 ... "/>
		</div>
	</div>

</template>

<script>

import { mapGetters } from 'vuex'
import LoadingBar from '../util/LoadingBar'

export default {

	name: 'login-form',

	data(){
		return {
			email:'',
			password:''
		}
	},

	computed:{
		...mapGetters([
			"ctx",
			"loginState",
			"loading"
		])
	},

	mounted(){
		this.$root.bus.$on('login-success', this.loginSuccess);
		this.$root.bus.$on('login-failure', this.LoginFailure);

		let user = JSON.parse(localStorage.getItem('user'));
		console.log(user);

		let self = this;
		if(user && user.email){
			this.$store.dispatch('reload', {
				user: user, 
				success(){
					self.loginSuccess();
					self.goHome();
				},
				fail(){
					console.log('fail... to auto login');
					self.loginFailure();
				}
			});
		}
		
	},

	beforeDestroy(){
		this.$root.bus.$off('login-success', this.loginSuccess)
		this.$root.bus.$off('login-failure', this.LoginFailure)
	},

	methods:{

		login(){
			let id, password, self = this;
			this.$store.dispatch('login', {
				email: this.email,
				password: this.password,
				success(){
					self.loginSuccess();
					self.goHome();
					console.log('home 으로 이동한다.')
				},
				fail(){
					self.loginFailure();
					console.log('fail... to auto login')
				}
			});
		},

		goHome(){
			// this.$store.dispatch('something initial');
			this.$router.push({name:'myhome'});
		},

		loginSuccess(){
			Materialize.toast('로그인 했습니다', 1000)
		},

		loginFailure(){
			Materialize.toast('로그인 실패', 3000)
		}

	},

	components:{
		LoadingBar
	}
}

</script>

<style scoped lang="scss">
.login-form {

	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 60vh;
	flex-direction: column;

	.input-fields {
		width:300px;
	}

	.login-button {
		margin-top: 1em;
		margin-left: 2em;
	}
}
</style>