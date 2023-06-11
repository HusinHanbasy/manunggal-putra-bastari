<script>
export default {
  emits: ["movePage", "dataRegister"],
  data() {
    return {
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    };
  },

  methods: {
    register() {
      this.$emit("dataRegister", {
        username: this.username,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        address: this.address,
      });
    },
  },
};
</script>

<template>
  <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">
          <div class="col-md-4 d-flex flex-column mx-auto">
            <div class="card card-plain mt-8">
              <div class="card-header pb-0 text-left bg-transparent">
                <h3 class="font-weight-black text-dark display-6">Sign up</h3>
              </div>
              <div class="card-body">
                <form role="form">
                  <label>Name</label>
                  <div class="mb-3">
                    <input v-model="username" type="text" class="form-control" placeholder="Enter your name"
                      aria-label="Name" aria-describedby="name-addon" />
                  </div>
                  <label>Email Address</label>
                  <div class="mb-3">
                    <input v-model="email" type="email" class="form-control" placeholder="Enter your email address"
                      aria-label="Email" aria-describedby="email-addon" />
                  </div>
                  <label>Password</label>
                  <div class="mb-3">
                    <input v-model="password" type="password" class="form-control" placeholder="Create a password"
                      aria-label="Password" aria-describedby="password-addon" />
                  </div>
                  <label>Phone Number</label>
                  <div class="mb-3">
                    <input v-model="phoneNumber" type="text" class="form-control" placeholder="Enter your phone number"
                      aria-label="phoneNumber" aria-describedby="name-addon" />
                  </div>
                  <label>Address</label>
                  <div class="mb-3">
                    <input v-model="address" type="text" class="form-control" placeholder="Enter your address"
                      aria-label="address" aria-describedby="name-addon" />
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn btn-dark w-100 mt-4 mb-3" @click.prevent="register">
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