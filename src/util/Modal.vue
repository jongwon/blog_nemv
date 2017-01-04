<template>
	<transition name="modal">
    <div class="modal-mask">
		<div class="modal-wrapper">
			<div class="modal-container">
				<div class="modal-header">
					<slot name="header">default header</slot>
				</div>

				<div class="modal-body">
					<slot name="body">default body</slot>
				</div>

				<div class="modal-footer center-align">
					<a class="modal-action waves-effect waves-red btn-flat" @click="$emit('close')">취소</a>
        	<a class="modal-action modal-close waves-effect waves-green btn-flat" @click="$emit('send')">예</a>
				</div>
			</div>
		</div>
	</div>
	</transition>
</template>

<script>
export default {
  name: 'modal'
}
</script>

<style lang="scss" scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;

    .modal-container {
      width: 300px;
      margin: 0px auto;
      padding: 20px 30px;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease;
      font-family: Helvetica, Arial, sans-serif;

      .modal-header h3, h4, h5, h6 {
        margin-top: 0;
        color: #42b983;
      }
      .modal-body {
        margin: 20px 0;
      }

      .modal-footer {

      }
    }
  }
}
</style>