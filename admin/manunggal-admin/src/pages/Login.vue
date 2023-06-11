<script>
export default {
  emits: ["movePage", "dataLogin", "handleCredentialResponse"],
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$emit("dataLogin", { email: this.email, password: this.password });
    },
    googleLogin(response) {
      this.$emit("handleCredentialResponse", response)
    }
  },
};
</script>

<template>
  <main class="main-content mt-0">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-md-6 d-flex flex-column mx-auto">
              <div class="card card-plain mt-8">
                <div class="card-header pb-0 text-left bg-transparent">
                  <h3 class="font-weight-black text-dark display-6">
                    Welcome back
                  </h3>
                  <p class="mb-0">Welcome back! Please enter your details.</p>
                </div>
                <div class="card-body">
                  <form role="form">
                    <label>Email Address</label>
                    <div class="mb-3">
                      <input v-model="email" type="email" class="form-control" placeholder="Enter your email address"
                        aria-label="Email" aria-describedby="email-addon" />
                    </div>
                    <label>Password</label>
                    <div class="mb-3">
                      <input v-model="password" type="password" class="form-control" placeholder="Enter password"
                        aria-label="Password" aria-describedby="password-addon" />
                    </div>
                    <div class="text-center">
                      <button @click.prevent="login" type="button" class="btn btn-dark w-100 mt-4 mb-3">
                        Sign in
                      </button>
                      <GoogleLogin :callback="googleLogin" />
                    </div>
                  </form>
                </div>
                <div class="card-footer text-center pt-0 px-lg-2 px-1">
                  <p class="mb-4 text-xs mx-auto">
                    Don't have an account?
                    <a href="" @click.prevent="$emit('movePage', 'register')" class="text-dark font-weight-bold">Sign
                      up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>