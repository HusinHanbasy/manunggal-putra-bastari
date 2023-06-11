<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            phone: ''
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["register"]),
        buttonRegister() {
            this.register({
                username: this.username,
                email: this.email,
                password: this.password,
                phone: this.phone
            })
        }
    },


}
</script>

<template>
    <section>
        <div class="page-header min-vh-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 d-flex flex-column mx-auto">
                        <div class="card card-plain mt-8">
                            <div class="card-header pb-0 text-left bg-transparent">
                                <img src="../assets/css/images/logoFInal.jpg" class="d-block w-100" alt="...">

                            </div>
                            <div class="card-body">
                                <form role="form">
                                    <label>Name</label>
                                    <div class="mb-3">
                                        <input v-model="username" type="text" class="form-control"
                                            placeholder="Enter your name" aria-label="Name" aria-describedby="name-addon" />
                                    </div>
                                    <label>Email Address</label>
                                    <div class="mb-3">
                                        <input v-model="email" type="email" class="form-control"
                                            placeholder="Enter your email address" aria-label="Email"
                                            aria-describedby="email-addon" />
                                    </div>
                                    <label>Password</label>
                                    <div class="mb-3">
                                        <input v-model="password" type="password" class="form-control"
                                            placeholder="Create a password" aria-label="Password"
                                            aria-describedby="password-addon" />
                                    </div>
                                    <label>Phone</label>
                                    <div class="mb-3">
                                        <input v-model="phone" type="text" class="form-control"
                                            placeholder="Enter your phone number" aria-label="Phone"
                                            aria-describedby="name-addon" />
                                    </div>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-dark w-100 mt-4 mb-3"
                                            @click.prevent="buttonRegister">
                                            Sign up
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>