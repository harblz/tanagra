<template>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Login</p>
        </header>
        <form method="POST" action="/login">
            <section class="modal-card-body">
                    <input type="hidden" name="_token" id="csrf-token" v-model="csrf_token" />
                    <div class="modal-card" style="width:300px;">
                        <section class="modal-card-body">
                            <b-field label="Email">
                                <b-input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    required>
                                </b-input>
                            </b-field>

                            <b-field label="Password">
                                <b-input
                                    type="password"
                                    name="password"
                                    password-reveal
                                    placeholder="Your password"
                                    required>
                                </b-input>
                            </b-field>

                        </section>                                

                    <span style="color: black;">
                        <b-checkbox>Remember me</b-checkbox>
                    </span>

                    </div>
            </section>
            <footer class="modal-card-foot">
                <button type="submit" class="button is-primary">
                    Login
                </button>
                <a href="/register" class="button is-primary">
                    Register
                </a>
            </footer>
        </form>
    </div>
</template>

<script>
    export default {
        props: ['email', 'password'],
        data() {
            return {
                csrf_token: this.$root.$root.csrfToken,
            }
        },

    }
</script>

<style scoped>
    .modal-card {
        width: auto;
    }
</style>