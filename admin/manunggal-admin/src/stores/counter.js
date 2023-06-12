import { defineStore } from 'pinia'
import axios from 'axios'
// import Swal from 'sweetalert2'
const baseUrl = "http://localhost:3100"

export const useCounterStore = defineStore('counter', {
  state: () => ({
    totalPage: 0,
    totalDonaturs: 0,
    totalCampaigns: 0,
    totalCategories: 0,
    totalHistories: 0,
    pagination: 0,
    historiesList: [],
    campaigns: [],
    campaign: {},
    categories: [],
    isLogin: false,
    status: [],
  }),
  actions: {
    register(data) {
      axios({
        url: `${baseUrl}/register`,
        method: "POST",
        data: {
          username: data.username,
          email: data.email,
          password: data.password,
          phone: data.phone
        }
      })
        .then((response) => {
          // console.log(response);
          this.router.push('/login')
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You have successfully registered and logged in',
            showConfirmButton: false,
            timer: 2500
          })
          // this.isLogin = response.data.access_token
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message
          })
        })
    },
    loginCust(input) {
      axios({
        url: `${baseUrl}/login`,
        method: "POST",
        data: {
          email: input.email,
          password: input.password
        }
      })
        .then((response) => {
          // console.log(response.data.access_token);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You have successfully logged in',
            showConfirmButton: false,
            timer: 2500
          })
          localStorage.access_token = response.data.access_token
          this.router.push('/dashboard')
          this.isLogin = true
          this.campaign = []

        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message
          })
        })
    },
    googleLogin(data) {
      console.log(data);
      axios({
        method: "post",
        url: `${baseUrl}/google-login`,
        headers: {
          "google-auth-token": data.credential,
        },
      })
        .then((response) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You have successfully logged in',
            showConfirmButton: false,
            timer: 2500
          })
          console.log(response);
          localStorage.access_token = response.data.access_token;
          this.isLogin = true
          this.router.push("/dashboard");
        })
        .catch(error => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message
          })
        })
    },
    logout() {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear()
          this.isLogin = false
          this.router.push('/login')
          Swal.fire(
            'you have successfully logged out',
          )
        }
      })
        .catch(error => {
          console.log(error);
        })
    },
    fetchCampaign(params) {
      axios({
        method: 'GET',
        url: `${baseUrl}/campaign`,
        params: params,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          console.log(response.data.campaign);
          this.campaigns = response.data.campaign
          this.totalCampaigns = response.data.campaign.length
          this.totalPage = response.data.totalPage
        })
        .catch((error) => {
          console.log(error);
        })
    },
    campaignById(id) {
      axios({
        method: 'GET',
        url: `${baseUrl}/campaign/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          this.campaign = response.data.data
          console.log(this.campaign);
          this.router.push('/edit-campaign')
        })
        .catch(error => {
          console.log(error);
        })
    },
    addCampaign(data) {
      axios({
        url: `${baseUrl}/campaign`,
        method: 'POST',
        data: {
          title: data.title,
          target: data.target,
          duration: data.duration,
          description: data.description,
          CategoryId: data.CategoryId,
          imageUrl: data.imageUrl,
          StatusId: data.StatusId
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          this.fetchCampaign()
          this.router.push('/campaign')
          Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'success add new category'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteCampaign(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            url: `${baseUrl}/campaign/${id}`,
            method: "DELETE",
            headers: {
              access_token: localStorage.access_token
            }
          })
            .then(response => {
              this.fetchCampaign()
              this.router.push('/campaign')
              console.log(response);

            })
            .catch(error => {
              console.log(error)
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message
              })
            })
        }

      })
    },
    fetchCategory(params) {
      axios({
        method: 'GET',
        url: `${baseUrl}/category`,
        params: params,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          this.categories = response.data
          this.totalCategories = response.data.length
        })
        .catch((error) => {
          console.log(error);
        })
    },
    fetchDonatur(params) {
      axios({
        method: 'GET',
        url: `${baseUrl}/users`,
        params: params,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          this.donaturs = response.data
          this.totalDonaturs = response.data.length
        })
        .catch((error) => {
          console.log(error);
        })
    },
    addCategory(data) {
      axios({
        url: `${baseUrl}/category`,
        method: 'POST',
        data: {
          name: data.name
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          this.fetchCategory()
          this.router.push('/categories')
          Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'success add new category'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteCategory(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            url: `${baseUrl}/category/${id}`,
            method: "DELETE",
            headers: {
              access_token: localStorage.getItem("access_token")
            }
          })
            .then(response => {
              this.fetchCategory()
              this.router.push('/categories')
            })
            .catch(error => {
              console.log(error)
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message
              })
            })
        }

      })
    },
    fetchHistories() {
      axios({
        url: `${baseUrl}/histories`,
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          this.historiesList = response.data.history;
          this.totalHistories = response.data.history.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchStatus(params) {
      axios({
        method: 'GET',
        url: `${baseUrl}/status`,
        params: params,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          this.status = response.data
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    addStatus(data) {
      axios({
        url: `${baseUrl}/status`,
        method: 'POST',
        data: {
          name: data.name
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          this.fetchStatus()
          this.router.push('/status')
          Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'success add new category'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },

    deleteStatus(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            url: `${baseUrl}/status/${id}`,
            method: "DELETE",
            headers: {
              access_token: localStorage.getItem("access_token")
            }
          })
            .then(response => {
              this.fetchStatus()
              this.router.push('/status')
            })
            .catch(error => {
              console.log(error)
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message
              })
            })
        }
      })
    },

  }
})
