
<template>
	 <div class="sp-loading active">
		<div class="sp-loader-wrapper" :class="circleSize">
		    <div class="sp-layer" :class="'sp-'+circleColor">
		      <div class="sp-clipper left">
		        <div class="circle" :style="{'border-width': circleWidth+'px'}"></div>
		      </div><div class="sp-patch">
		        <div class="circle" :style="{'border-width': circleWidth+'px'}"></div>
		      </div><div class="sp-clipper right">
		        <div class="circle" :style="{'border-width': circleWidth+'px'}"></div>
		      </div>
		    </div>
		</div>
		<div class="message" :style="{color:textColor}" v-text="message"></div>
	</div>
</template>


<script>
export default {
	name: 'loading-bar',
	props: {
		circleColor: {
			type: String,
			default: 'yellow'
		},
		circleWidth: {
			type:Number,
			default: 9
		},
		circleSize: {
			type: String,
			default: 'big'
		},
		textColor: {
			type: String,
			default: '#339999'
		},
		message: {
			type: String,
			default: '조금만 더 기다려주세요.'
		}
	}
}
</script>

<style lang="scss">

.sp-loading {
	text-align:center;

	.sp-loader-wrapper {
	  display: inline-block;
	  position: relative;
	  width: 48px;
	  height: 48px;
	  margin: 3em;
	  line-height: 1.5;
	  &.small {
	    width: 36px;
	    height: 36px;
	  }
	  &.big {
	    width: 64px;
	    height: 64px;
	  }
	}
	.message {
		display: none;
		text-align: center;
	}

	&.active {
	  .sp-loader-wrapper {
		animation: container-rotate 1568ms linear infinite;

	    @keyframes container-rotate {
		  to { transform: rotate(360deg) }
		}
	  }
	  .message {
	  	display: block;
	  }
	}

}


.sp-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-color: teal;

  &.sp-red {
  	border-color: #db4437;
  }
  &.sp-blue {
  	border-color: #4285f4;
  }
  &.sp-yellow {
  	border-color: #f4b400;
  }
  &.sp-green {
  	border-color: #0f9d58;
  }
}

.sp-patch {
  position: absolute;
  top: 0;
  left: 45%;
  width: 10%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
 .circle {
    width: 1000%;
    left: -450%;
  }
}

.sp-clipper {
  display: inline-block;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;

  .circle {
    width: 200%;
    height: 100%;
    border-width: 9px;
    border-style: solid;
    border-color: inherit;
    border-bottom-color: transparent !important;
    border-radius: 50%;
    animation: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    overflow:show;
    box-sizing: border-box;
  }
  &.left .circle {
    left: 0;
    border-right-color: transparent !important;
    transform: rotate(129deg);
  }
  &.right .circle {
    left: -100%;
    border-left-color: transparent !important;
    transform: rotate(-129deg);
  }
}

.active {
  .sp-layer {
  	opacity: 1;
    animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0.0, 0.2, 1) infinite both;
    @keyframes fill-unfill-rotate {
	  12.5% { transform: rotate(135deg);  }
	  25%   { transform: rotate(270deg);  }
	  37.5% { transform: rotate(405deg);  }
	  50%   { transform: rotate(540deg);  }
	  62.5% { transform: rotate(675deg);  }
	  75%   { transform: rotate(810deg);  }
	  87.5% { transform: rotate(945deg);  }
	  to    { transform: rotate(1080deg); }
	}
  }
  .sp-clipper {
    &.left .circle {
      animation: left-spin 1333ms cubic-bezier(0.4, 0.0, 0.2, 1) infinite both;
      @keyframes left-spin {
	    from { transform: rotate(130deg); }
	    50% { transform: rotate(-5deg); }
	    to { transform: rotate(130deg); }
	  }
    }
    &.right .circle {
      animation: right-spin 1333ms cubic-bezier(0.4, 0.0, 0.2, 1) infinite both;
      @keyframes right-spin {
		from { transform: rotate(-130deg); }
		50% { transform: rotate(5deg); }
		to { transform: rotate(-130deg); }
	  }
    }
  }
}

</style>

