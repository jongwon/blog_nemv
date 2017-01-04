<template>
	<div id="navbar-top-fixed-layer" class="navbar-fixed">
		<nav :style="{width: queryWidth +'px'}">
		    <div class="nav-wrapper lighten-1" :class="[bgColor]">
		      	<ul v-if="slidmenushow" class="left">
					<li @click="showNav()">
						<a class="waves-effect waves-light hide-on-large-only"><i class="material-icons">menu</i></a>
					</li>
			  	</ul>
		      	<ul v-if="backbuttonshow" id="nav-mobile" class="left">
					<li @click="goBack()">
						<a class="waves-effect waves-light"><i class="material-icons">chevron_left</i></a>
					</li>
			  	</ul>
		      	<span class="brand-logo center action-bar-title"> 
		      		<template v-if="subTitle">[{{subTitle}}] </template><span style="font-size: .85em">{{title}}</span>
		      	</span>
		      	<slot name="right-menu"></slot>
		    </div>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'page-header',
	data() {
		return {
			windowWidth: 0,
      		windowHeight: 0,
			queryWidth: 0,
      		queryHeight: 0,
		}
	},
	props:{
		bgColor: {
			type:String,
			default: 'blue'
		},
		title: {
			type:String,
			default: ""
		},
		subTitle: {
			type: String,
			default: ""
		},
		slidmenushow: {
			type:Boolean,
			default: true
		},
		backbuttonshow: {
			type:Boolean,
			default: false
		}
	},

	created() {

	},

	mounted:function() {
		this.$nextTick(function() {
			window.addEventListener('resize', this.getWindowWidth);
			window.addEventListener('resize', this.getWindowHeight);
			window.addEventListener('resize', this.getQueryWidth);
			window.addEventListener('resize', this.getQueryHeight);

			//Init
			this.getWindowWidth()
			this.getWindowHeight()
			this.getQueryWidth()
			this.getQueryHeight()
		})
		if (window.AdWebBridge) {
			$("#main-body").css({'paddingBottom':'55px'})
		}
		if(window.AdWebBridge==undefined) {
			$(".page-footer").show()
		}
	},

	methods: {
		getWindowWidth(event) {
			this.windowWidth = document.documentElement.clientWidth;
		},

		getWindowHeight(event) {
			this.windowHeight = document.documentElement.clientHeight;
			
			if (window.location.pathname.indexOf("splashscreen")<0) {
				$("#main-body").css({'height': ''})
			}

			$("#main-body").css({'min-height': this.windowHeight + 'px'})
			let wd = this.windowWidth - 128;

			$(".action-bar-title").css({'width' : wd + 'px'})
		},

		getQueryWidth() {
			this.queryWidth = $("#navbar-top-fixed-layer").width();
		},

		getQueryHeight() {
			this.queryHeight = $("#navbar-top-fixed-layer").height();
		},

		showNav:function(){
			this.$root.bus.$emit('show-nav');
		},

		goBack() {
			this.$nextTick(()=>{
				this.$router.go(-1);
			});
		}
	},

	beforeDestroy:function(){
		window.removeEventListener('resize', this.getWindowWidth);
    	window.removeEventListener('resize', this.getWindowHeight);
    	window.removeEventListener('resize', this.getQueryWidth);
		window.removeEventListener('resize', this.getQueryHeight);
	},
}

</script>

<style scoped>
nav .brand-logo {
	font-size:1.5em;
}
.right-menu {
	display: flex !important;
}
.action-bar-title {
	text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>