<script>
    const ModalForm = {
        props: ['email', 'password'],
        template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>

                        <b-checkbox>Remember me</b-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$parent.close()">Close</button>
                        <button class="button is-primary">Login</button>
                    </footer>
                </div>
            </form>
        `
    }

	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

	import VueGridLayout from 'vue-grid-layout'

	import FileUpload from './FileUpload.vue'



	var GridLayout = VueGridLayout.GridLayout;
	var GridItem = VueGridLayout.GridItem;

	export default {

		name: 'TanagraHome',

		props: ['editMode', 'toggleSaveLayoutButton', 'layout', 'resetLayout', 'newLayout'],

		components: {
			FontAwesomeIcon,
			GridLayout,
			GridItem,
			FileUpload,
			ModalForm,
		},

		data() {
			return {
				isSettingsMenuActive: false,                
				formProps: {
	                email: 'evan@you.com',
	                password: 'testing',
            	},
                
				// VUE-grid-layout variables: layout, GridItem, and GridLayout (last 2 are Vue components)
				//layout: testLayout,


				// oldLayout -- when you enter edit mode, a copy of your current layout is saved to this variable
				// in case you want to reset it using the resetLayout button. This is then emitted to the parent.
				oldLayout: null,

				GridItem: null,
				GridLayout: null,

				// toggle the "save changes?" button should you change the layout
				toggleSaveLayout: false,
			}
		},

		watch: {
			editMode: {
				handler: function () {
					console.log('Edit Mode Toggled!');
					// using JSON.parse + JSON.stringify to disable VUE's reactivity (copies the object w/o the observer)
					this.oldLayout = JSON.parse(JSON.stringify(this.layout));
					// save a copy of the layout to the resetLayout variable, in case the user wants to undo changes.
					this.$emit('update:resetLayout', this.oldLayout)
				},
				deep: true,
			}
		},

		methods: {
			layoutUpdated: function (newLayout) {
				// persist this to the database
				console.log("Updated layout: ", newLayout)
				// make the save & reset layout buttons visible, so the user can save / reset changes.
				this.toggleSaveLayout = true
				this.$emit('update:toggleSaveLayoutButton', this.toggleSaveLayout)
				// persist changes as they are made to the newLayout button
				this.$emit('update:newLayout', this.layout)
			},

			produceSpeech: function(word) {
				if ( this.editMode.value != true ) {
					var synth = window.speechSynthesis;

					//console.log('You clicked a word. Nice job!')
					var utterance = new SpeechSynthesisUtterance(word);
					synth.speak(utterance);
				} else {
					//console.log("You clicked a word. Nice work - but no speech was generated, as you're in edit mode!")
				}

			}
		}
	}
</script>


<style>
	/*** EXAMPLE ***/
	#content {
	    width: 100%;
	}

	.vue-grid-layout {
	    background: #fff;
	}

	.layoutJSON {
	    background: #ddd;
	    border: 1px solid black;
	    margin-top: 10px;
	    padding: 10px;
	}

	.eventsJSON {
	    background: #ddd;
	    border: 1px solid black;
	    margin-top: 10px;
	    padding: 10px;
	    height: 100px;
	    overflow-y: scroll;
	}

	.columns {
	    -moz-columns: 120px;
	    -webkit-columns: 120px;
	    columns: 120px;
	}



	.vue-resizable-handle {
	    z-index: 5000;
	    position: absolute;
	    width: 20px;
	    height: 20px;
	    bottom: 0;
	    right: 0;
	    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');
	    background-position: bottom right;
	    padding: 0 3px 3px 0;
	    background-repeat: no-repeat;
	    background-origin: content-box;
	    box-sizing: border-box;
	    cursor: se-resize;
	}

	.vue-grid-item:not(.vue-grid-placeholder) {
	    background: #fff;
	    border: 1px solid black;
	    overflow: hidden;
	}

	.vue-grid-item.resizing {
	    opacity: 0.9;
	}

	.vue-grid-item.static {
	    background: #cce;
	}

	.vue-grid-item .text {
	    font-size: 24px;
	    text-align: center;
	    position: absolute;
	    top: 0;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    margin: auto;
	    height: 100%;
	    width: 100%;
	}

	.vue-grid-item .no-drag {
	    height: 100%;
	    width: 100%;
	}

	.vue-grid-item .minMax {
	    font-size: 12px;
	}

	.vue-grid-item .add {
	    cursor: pointer;
	}

	.vue-draggable-handle {
	    position: absolute;
	    width: 20px;
	    height: 20px;
	    top: 0;
	    left: 0;
	    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
	    background-position: bottom right;
	    padding: 0 8px 8px 0;
	    background-repeat: no-repeat;
	    background-origin: content-box;
	    box-sizing: border-box;
	    cursor: pointer;
	}

	.word-options-menu {
		position: absolute;
		bottom: 0;
		margin: 2.5px;
	}
</style>

<template>
	<section class="container">
		<b-modal :active.sync="isSettingsMenuActive" has-modal-card>
            <modal-form v-bind="formProps"></modal-form>
        </b-modal>

        <grid-layout
                :layout="layout"
                :col-num="12"
                :row-height="30"
                :is-draggable="editMode.value"
                :is-resizable="editMode.value"
                :is-mirrored="false"
                :vertical-compact="false"
                :margin="[10, 10]"
                :use-css-transforms="true"
                @layout-updated="layoutUpdated"
        >

            <grid-item v-for="item in layout"
                        :key="item.i"
                        :x="item.x"
                        :y="item.y"
                        :w="item.w"
                        :h="item.h"
                        :i="item.i"
                        v-bind:style="{ 'background-image': 'url(img/256x256.png)' }"
                		@click.native="produceSpeech(item.word)"
                        >

					{{ item.word }}

					<br />

					<div class="word-options-menu" v-if="editMode.value == true">
		                <!-- change the image !-->
		                <button class="button is-primary is-inverted" 
		                		@click="isSettingsMenuActive = true"
		                		>
		                	<font-awesome-icon icon="image" /></font-awesome-icon>
		            	</button>

		                <!-- change the label / tts setting !-->
		                <button class="button is-primary is-inverted" 
		                		@click="isSettingsMenuActive = true"
		                		>
		                	<font-awesome-icon icon="comment" /></font-awesome-icon>
		            	</button>
		                
		                <!-- toggle options !-->
		                <button class="button is-primary is-inverted" 
		                		@click="isSettingsMenuActive = true"
		                		>
		                	<font-awesome-icon icon="wrench" /></font-awesome-icon>
		            	</button>
		            </div>

            </grid-item>
        </grid-layout>
	</section>
</template>