<script>
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    ...mapState(useCounterStore, ["totalDonaturs", 'totalCategories', 'totalCampaigns'])
  },
}
</script>

<template>
  <main class="
      main-content
      position-relative
      max-height-vh-100
      h-100
      border-radius-lg
    ">
    <!-- Navbar -->
    <nav class="navbar navbar-main navbar-expand-lg mx-5 px-0 shadow-none rounded" id="navbarBlur" navbar-scroll="true">
      <div class="container-fluid py-1 px-2">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent mb-1 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li class="breadcrumb-item text-sm">
              <a class="opacity-5 text-dark" href="javascript:;">Manunggal Putra Bersari</a>
            </li>
            <li class="breadcrumb-item text-sm text-dark active" aria-current="page">
              Dashboard
            </li>
          </ol>
          <h6 class="font-weight-bold mb-0">Dashboard</h6>
        </nav>
      </div>
    </nav>
    <!-- End Navbar -->
    <div class="container-fluid py-4 px-5">
      <div class="row">
        <div class="col-md-12">
          <div class="d-md-flex align-items-center mb-3 mx-2">
            <div class="mb-md-0 mb-3">
              <h3 class="font-weight-bold mb-0">Hello, Admin</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-3 col-sm-6 col-12 mb-xl-0">
          <div class="card border shadow-md mb-4">
            <div class="card-body text-center fw-bold p-3 w-100">
              <div class="row">
                <div class="col-12">
                  <div class="w-100">
                    <p class="text-sm text-secondary mb-1">Campaign</p>
                    <h4 class="mb-2 font-weight-bold">{{ totalCampaigns }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 mb-xl-0">
          <div class="card border shadow-md mb-4">
            <div class="card-body text-center fw-bold p-3 w-100">
              <div class="row">
                <div class="col-12">
                  <div class="w-100">
                    <p class="text-sm text-secondary mb-1">Categories</p>
                    <h4 class="mb-2 font-weight-bold">{{ totalCategories }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 mb-xl-0">
          <div class="card border shadow-md mb-4">
            <div class="card-body text-center fw-bold p-3 w-100">
              <div class="row">
                <div class="col-12">
                  <div class="w-100">
                    <p class="text-sm text-secondary mb-1">Donatur</p>
                    <h4 class="mb-2 font-weight-bold">{{ totalDonaturs }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>