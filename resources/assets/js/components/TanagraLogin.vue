<template>
    <section>
        <div @click="isComponentModalActive = true">
            <font-awesome-icon icon="key" /></font-awesome-icon> &nbsp Log in
        </div>

        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <login-form v-bind="formProps"></login-form>
        </b-modal>
    </section>
</template>

<script>
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
    import LoginForm from './LoginForm'


    export default {
        name: 'TanagraLogin',

        components: {
            FontAwesomeIcon,
            LoginForm,
        },

        methods: {

        },

        data() {
            return {
                isComponentModalActive: false,
                formProps: {
                    email: '',
                    password: ''
                },
                
                loginStatus: false,
                user: [],
                role: null,
            }
        },
    }
</script>