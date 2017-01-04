<template>
	<div class="navbar-fixed">
		<nav>
		    <div class="nav-wrapper lighten-1" :class="bgColor">
		      	<ul v-if="slidmenushow" class="left">
					<li @click="showNav()">
						<a class="waves-effect waves-light"><i class="material-icons">menu</i></a>
					</li>
			  	</ul>
		      	<ul v-if="backbuttonshow" class="left">
					<li @click="goBack()">
						<a class="waves-effect waves-light"><i class="material-icons">chevron_left</i></a>
					</li>
			  	</ul>
		      	<a class="brand-logo center"> 
		      		{{title}}
		      		{{subTitle}} 
		      	</a>
		      	<slot name="right-menu"></slot>
		    </div>
		</nav>
	</div>
</template>

<script>
export default {
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
		$('.dropdown-button').dropdown({
			inDuration: 300,
			outDuration: 225,
			constrain_width: false, // Does not change width of dropdown to that of the activator
			hover: false, // Activate on hover
			gutter: 0, // Spacing from edge
		    belowOrigin: false, // Displays dropdown below the button
		    alignment: 'left' // Displays dropdown with edge aligned to the left of button
		});
	},

	methods: {
		
		showNav:function(){
			this.$root.bus.$emit('show-nav');
		},

		goBack() {
			this.$nextTick(()=>{
				this.$router.go(-1);
			});
		}
	}
}

</script>

<style scoped>
nav .brand-logo {
	font-size:1.5em;
}
.right-menu {
	display: flex !important;
}
</style>