<template>
	<div class="navbar-menu">
	  <div class="navbar-start">
		<a class="navbar-item" href="/home">
		  <font-awesome-icon icon="home" /></font-awesome-icon> &nbsp Home
		</a>

		<a class="navbar-item">
		  <font-awesome-icon icon="cogs" /></font-awesome-icon> &nbsp Customize
		</a>

	  </div>

	  <div class="navbar-end">


	  		<a v-if="loginStatus && toggleSaveLayoutButton" class="navbar-item">
	  			<button @click="resetLayoutMethod" class="button is-danger">
	  				Reset Your Layout
	  			</button>
	  		</a>

	  		<a v-if="loginStatus && toggleSaveLayoutButton" class="navbar-item">
	  			<button class="button is-success">
	  				Save Changes?
	  			</button>
	  		</a>
			<a v-if="loginStatus" class="navbar-item">
	            <b-checkbox v-model="editMode.value">
	                {{ editMode.text }}
	            </b-checkbox>
			</a>
			<a v-if="loginStatus" class="navbar-item" href="/register">
			  <font-awesome-icon icon="user" /></font-awesome-icon> &nbsp Welcome, {{ user.name }}
			</a>
			<a v-if="!loginStatus" class="navbar-item">
			  <tanagra-login></tanagra-login>
			</a>
			<a v-if="!loginStatus" class="navbar-item" href="/register">
			  <font-awesome-icon icon="user-plus" /></font-awesome-icon> &nbsp Create an Account
			</a>
		</div>
	</div>
</template>

<script>

	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

	import TanagraLogin from './TanagraLogin.vue'

	export default {
		name: 'TanagraNav',

		props: ['loginStatus', 'user', 'toggleSaveLayoutButton'],

		components: {
			FontAwesomeIcon,
			TanagraLogin,
		},

		watch: {
			editMode: {
				handler: function () {
					if ( this.editMode.value == false ) {
						this.editMode.text = 'Toggle Edit Mode';
					} else {
						this.editMode.text = 'Exit Edit Mode';
					}
					this.$emit('update:editMode', this.editMode)
				},
				deep: true,
			}
		},

		data() {
			return {
				editMode: {
					value: false,
					text: 'Toggle Edit Mode',
				},
			}
		},

		methods: {
			resetLayoutMethod: function() {
				console.log('reset!');

				this.$root.layout = this.$root.resetLayout
				this.$root.toggleSaveLayoutButton = false
				this.$root.resetLayout = JSON.parse(JSON.stringify(this.$root.layout))
				this.$root.newLayout = null
			}
		}
	}
</script>

<style>
	a.navbar-item {
		color: #000;
        font-weight: 400;
	}
</style>