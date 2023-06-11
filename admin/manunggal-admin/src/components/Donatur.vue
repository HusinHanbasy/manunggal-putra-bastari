<script>
import TableRow from './TableRow.vue';
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter'

export default {
    components: {
        TableRow,
    },
    data() {
        return {
            Thfood: ["no", "username", "email", "phone", "total donation"],
        }
    },
    computed: {
        ...mapState(useCounterStore, ["donaturs", 'totalCategories', 'totalPage'])
    },

    methods: {
        ...mapActions(useCounterStore, ["fetchCampaign", "fetchCategory", "fetchDonatur"]),
    },
    created() {
        this.fetchDonatur()
    }
};
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
                            Donatur
                        </li>
                    </ol>
                    <h6 class="font-weight-bold mb-0">Donatur</h6>
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
                                    <h6 class="font-weight-semibold text-lg mb-0">Donatur list</h6>
                                    <p class="text-sm">See information about all Donatur</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body px-0 py-0">
                            <div class="table-responsive p-0">
                                <table class="table align-items-center mb-0">
                                    <thead class="bg-gray-100">
                                        <tr>
                                            <th v-for="th in Thfood " class="text-center
                          text-dark text-xs
                          font-weight-bold
                          opacity-7
                        ">
                                                {{ th }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TableRow v-for="(donatur, index) in donaturs" :key="donatur.id" :data="donatur"
                                            :index="index" :cols="Thfood" />
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