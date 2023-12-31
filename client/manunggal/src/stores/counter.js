import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
const baseUrl = "http://localhost:3100"

export const useCounterStore = defineStore('counter', {
  state: () => ({
    myCampaign: 0,
    myDonation: 0,
    getDana: 0,
    totalPage: 0,
    totalMoney: 0,
    totalDonaturs: 0,
    totalDonation: 0,
    totalPeople: 0,
    totalPlace: 0,
    totalCampaign: 0,
    pagination: 0,
    statuses: [],
    donations: [],
    campaigns: [],
    campaign: [],
    categories: [],
    isLogin: false
  }),
  actions: {
    register(data) {
      axios({
        url: `${baseUrl}/pub/register`,
        method: "POST",
        data: {
          username: data.username,
          email: data.email,
          password: data.password,
          phone: data.phone
        }
      })
        .then((response) => {
          this.router.push('/login')
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You have successfully registered and logged in',
            showConfirmButton: false,
            timer: 2500
          })

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
    loginCust(input) {
      axios({
        url: `${baseUrl}/pub/login`,
        method: "POST",
        data: {
          email: input.email,
          password: input.password
        }
      })
        .then((response) => {
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
          this.router.push('/')
          Swal.fire(
            'you have successfully logged out',
          )
        }
      })
        .catch(error => {
          console.log(error);
        })
    },
    fetchCampaigns(params) {
      axios({
        method: 'GET',
        url: `${baseUrl}/pub/campaign`,
        params: params,
      })
        .then((response) => {
          this.campaigns = response.data.data
          this.totalCampaign = response.data.data.length
          this.totalPage = response.data.totalPage
        })
        .catch((error) => {
          console.log(error);
        })
    },
    campaignById(id) {
      axios({
        method: 'GET',
        url: `${baseUrl}/pub/movie/${id}`,
      })
        .then(response => {
          this.campagin = response.data.data
        })
        .catch(error => {
          console.log(error);
        })
    },
    fetchCategory(params) {
      axios({
        method: 'GET',
        url: `${baseUrl}/pub/category`,
        params: params,
      })
        .then((response) => {
          this.categories = response.data.data
        })
        .catch((error) => {
          console.log(error);
        })
    },
    fetchDonaturs(params) {
      axios({
        method: 'GET',
        url: `${baseUrl}/users`,
        params: params,
      })
        .then((response) => {
          this.totalDonaturs = response.data.length
        })
        .catch((error) => {
          console.log(error);
        })
    },
    fetchStatus(params) {
      axios({
        method: 'GET',
        url: `${baseUrl}/pub/status`,
        params: params,
      })
        .then((response) => {
          this.statuses = response.data.data
        })
        .catch((error) => {
          console.log(error);
        })
    },
    fetchDonation(params) {
      axios({
        method: 'GET',
        url: `${baseUrl}/pub/status`,
        params: params,
      })
        .then((response) => {
          this.donations = response.data.data
        })
        .catch((error) => {
          console.log(error);
        })
    },
    addDonation(data) {
      axios({
        url: `${baseUrl}/pub/donation`,
        method: 'POST',
        data: {
          CampaignId: data.id,
          value: data.value
        }
      })
        .then(response => {
          this.fetchCampaign()
          this.router.push('/campaign')
          Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'success donation'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
  }
})
