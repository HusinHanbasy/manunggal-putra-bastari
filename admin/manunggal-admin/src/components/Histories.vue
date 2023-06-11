<script>
import TableRow from './TableRow.vue';;
export default {
  components: {
    TableRow
  },
  props: ["historiesList"],
  data() {
    return {
      Thhistory: ['no', 'Campaign', 'User', 'description']
    }
  }
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
              History
            </li>
          </ol>
          <h6 class="font-weight-bold mb-0">History</h6>
        </nav>
      </div>
    </nav>
    <!-- End Navbar -->
    <div class="container-fluid py-4 px-5">
      <div class="row">
        <div class="col-12">
          <div class="card border shadow-xs mb-4">
            <div class="card-header border-bottom pb-0">
              <div class="d-sm-flex align-items-center">
                <div>
                  <h6 class="font-weight-semibold text-lg mb-0">
                    Histories list
                  </h6>
                  <p class="text-sm">See information about all Histories</p>
                </div>
              </div>
            </div>
            <div class="card-body px-0 py-0">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead class="bg-gray-100">
                    <tr>
                      <th v-for="th in Thhistory" class="
                          text-secondary text-xs
                          font-weight-semibold
                          opacity-7
                        ">
                        {{ th }}
                      </th>
                    </tr>
                  </thead>
                  <tbody id="table-history">
                    <TableRow v-for="(history, index) in historiesList" :key="history.id" :data="history" :index="index"
                      :cols="Thhistory" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>