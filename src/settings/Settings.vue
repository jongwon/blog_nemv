<template>
	<div class="settings">
		<page-header :bg-color="bgColor"
			:title="title"
			:sub-title="subTitle"     
			:slidmenushow="slidmenushow" 
			:backbuttonshow="backbuttonshow">
			<ul id="nav-mobile" class="right hide-on-med-and-down" slot="right-menu" style="display: flex !important;">
				<li>
					<a class="waves-effect waves-light" href="javascript:;"><i class="material-icons" @click="reload()">refresh</i></a>
				</li>
			</ul>
		</page-header>

		<div class="body screen-center" style="padding: 15px;">
			<div class="panel panel-default">
				<div class="panel-heading"> <i class=""></i> 페이스북 계정 연동 </div>
				<div class="panel-body">
					<pre> 이 앱에 대한 설명을 넣어주세요... </pre>

					<div class="center-align">
						<form v-if="!loggedIn" @submit.prevent="login" class="center-align">
							<label><input v-model="email" placeholder="email"></label>
							<label><input v-model="pass" placeholder="password" type="password"></label> (hint: password1)<br>
							<p class="center-align"><button class="btn waves-effect waves-light btn-large" type="submit">페이스북 연동</button></p>
							<p v-if="error" class="error">Bad login information</p>
						</form>
						<p v-if="loggedIn">
							<button class="btn waves-effect waves-light btn-large button" 
							@click="logout()">로그 아웃</button>
						</p>
						<p v-if="loggedIn">
							<button class="btn waves-effect waves-light btn-large" 
								style="width: 250px;" 
								@click="showModal = true">
								<i class="material-icons left">delete</i> 페이스북 정보 삭제 요청
							</button>
						</p>
						<p style="padding-top: 50px;">
							<button class="btn waves-effect waves-light btn-large" 
								style="width: 250px;" 
								@click="move_terms()">
								<i class="material-icons left">info</i> 이용약관
							</button>
						</p>
						<p>
							<button class="btn waves-effect waves-light btn-large" 
								style="width: 250px;" 
								@click="move_privacy()">
								<i class="material-icons left">info</i> 개인정보취급방침
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>

		<modal v-if="showModal" @close="showModal = false" @send="send()">
			<h5 slot="header">{{ modal.facebook.header }}</h5>
			<p slot="body">{{ modal.facebook.body }}</p>
			<span slot="footer">{{ modal.facebook.footer }}</span>
		</modal>

	</div>
</template>

<script>
import PageHeader from '../util/PageHeader'
import Modal from '../util/Modal'

export default {
	components:{
		PageHeader,
		Modal
	},
	name: 'settings',

	data:function(){
		return {
			bgColor: 'blue-grey',
      		chevronRightColor: 'material-icons-blue-grey',
			title:' 설정 ',
			subTitle: '',
      		slidmenushow: true,
      		backbuttonshow: false,

      		loggedIn: true, //auth.loggedIn(),
      		email: 'joe@example.com',
			pass: '',
			error: false,

			showModal: false,
			modal: {
				facebook: {
					header: '삭제 요청 확인',
					body: '페이스북 정보 삭제 요청을 하시겠습니까?',
					footer: ''
				}
			}
		};
	},

	created() {
		// auth.onChange = loggedIn => {
		// 	this.loggedIn = loggedIn
		// }
	},

	mounted() {
		// this.$root.bus.$on('close', this.modalClose);
	},

	methods:{
		modalClose() {
			console.log(" modalClose ")
		},

		move_terms:function(){
			this.$router.push({name:'terms'});
		},

		move_privacy() {
			this.$router.push({name:'privacy'});
		},

		send() {
			console.log("페이스북 계정 정보 삭제 요청합니다.....");
			this.showModal = !this.showModal;
		},
		
		logout(){
			this.$store.dispatch('logout');
			this.$router.go('login');
		},

		reload() {
			location.reload();
		},

		login () {
			// auth.login(this.email, this.pass, loggedIn => {
			// 	if (!loggedIn) {
			// 		this.error = true
			// 	} else {
			// 		this.$router.replace(this.$route.query.redirect || '/')
			// 	}
			// })
		}
	}, 
	
}

</script>
<style>
.error {
	color: red;
}
</style>
