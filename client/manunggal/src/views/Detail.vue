<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import Footer from '../components/Footer.vue'

export default {
    computed: {
        ...mapWritableState(useCounterStore, ["campaign"])
    },
    methods: {
        ...mapActions(useCounterStore, ['campaignById']),

    },
    created() {
        const id = this.$route.params.id
        this.campaignById(id)
    }
}
</script>
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-sm-9 mb-3 mt-3 text-dark">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkLozlbRJdSMhdpCsD0OUydOONIATtg4JdJZvOS144ov7jMwGkDf_TA9yJ7GfABODeqU&usqp=CAU"
                                class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <p class="mt-4">
                    Saat ini kami mendampingi 25 anak penderita kanker dan penyakit beresiko tinggi. Semua yang tinggal di
                    rumah singgah sama sekali tidak dipungut biaya apapun (gratis). Bahkan untuk makan sehari-haripun kami
                    sediakan. Dukungan yang diberikan selama pasien tinggal di rumah singgah Yayasan Sahabat Ayah Sarah
                    antara lain :

                    1. Layanan antar jemput ke Rumah Sakit

                    3. Penyediaan susu dan pampers

                    3. Penyediaan sembako dan bahan pangan lainnya

                    4. Penggantian biaya obat tidak di cover BPJS

                    5. Internet gratis
                </p>
            </div>
            <div class="col-12 col-sm-3">
                <div class="mt-3 card" style="width: 30rem;">
                    <div class="card-body">
                        <h5 class="card-title">Dana Terkumpul</h5>
                        <h4>Rp 9.800.000</h4>
                        <p>dari target Rp 20.000.000</p>
                        <div class="progress mt-3" role="progressbar" aria-label="Danger striped example"
                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped bg-danger" style="width: 50%"></div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-sm-6">
                                <h5 class="text-center">7</h5>
                                <h5 class="text-center">Donatur</h5>
                            </div>
                            <div class="col-sm-6">
                                <h5 class="text-center">5</h5>
                                <h5 class="text-center">Hari Lagi</h5>
                            </div>
                        </div>
                        <div class="d-grid gap-2 mt-5">
                            <button class="btn btn-primary" type="button">DONASI</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <Footer />
    </div>
</template>