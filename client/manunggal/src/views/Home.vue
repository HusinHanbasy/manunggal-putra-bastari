<script>

import Footer from '../components/Footer.vue';
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter'
import Card from '../components/Card.vue'
export default {
    data() {
        return {
            search: '',
            page: '1',
            category: '',
            limit: 20,
        }
    },
    components: {
        Card,
        Footer
    },
    computed: {
        ...mapState(useCounterStore, ["campaigns", 'totalDonaturs', 'totalPeople', 'totalPlace', 'totalMoney'])
    },
    methods: {
        ...mapActions(useCounterStore, ["fetchCampaigns", "camapaignById", "fetchDonaturs"]),
        onClickHandler() {
            const data = {
                limit: this.limit,
                page: this.page,
                search: this.search,
                category: this.category
            }
            this.getCampaigns(data)
        },
        showDetail(id) {
            this.campaignById(id)
            this.$router.push(`/detail/1`)
        }

    },
    created() {
        this.fetchCampaigns()
        this.fetchDonaturs()
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="mt-0 mx-4 mb-5">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/css/images/banner3.png" style="width: 100px; height: auto;"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/css/images/banner4.png" style="width: 100px; height: auto;"
                            class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/css/images/banner1.png" style="width: 100px; height: auto;"
                            class="d-block w-100" alt="...">
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
            <div class="mt-5 mb-5">
                <h1 class="fs-4">KATEGORI DONASI YAYASAN MANUNGGAL</h1>
                <h4 class="fs-6">Pilih kategori favorit mu</h4>
                <div class="row mt-4 mx-3">
                    <div class="col-md-4 col-lg-2 col-sm-6" style="justify-content:center; text-align: center;">
                        <a href="#" style="text-decoration:none">
                            <img src="../assets/css/images/volcano.png" class="" style="width: 100px;" alt="...">
                            <h2 class="ancor mt-3">BENCANA ALAM</h2>
                        </a>
                    </div>
                    <div class="col-md-4 col-lg-2 col-sm-6" style="justify-content:center; text-align: center;">
                        <a href="#" style="text-decoration:none">
                            <img src="../assets/css/images/lingkungan.png" class="" style="width: 100px;" alt="...">
                            <h2 class="mt-3 ancor ml-5">LINGKUNGAN</h2>
                        </a>
                    </div>
                    <div class="col-md-4 col-lg-2 col-sm-6" style="justify-content:center; text-align: center;">
                        <a href="#" style="text-decoration:none">
                            <img src="../assets/css/images/social-security.png" class="" style="width: 100px;" alt="...">
                            <h2 class="mt-3 ancor">SOSIAL</h2>
                        </a>
                    </div>
                    <div class="col-md-4 col-lg-2 col-sm-6" style="justify-content:center; text-align: center;">
                        <a href="#" style="text-decoration:none">
                            <img src="../assets/css/images/graduation.png" class="" style="width: 100px;" alt="...">
                            <h2 class="mt-3 ancor"> PENDIDIKAN</h2>
                        </a>
                    </div>
                    <div class="col-md-4 col-lg-2 col-sm-6" style="justify-content:center; text-align: center;">
                        <a href="#" style="text-decoration:none">
                            <img src="../assets/css/images/health-clinic.png" class="" style="width: 100px;" alt="...">
                            <h2 class="mt-3 ancor"> KESEHATAN</h2>
                        </a>
                    </div>
                    <div class="col-md-4 col-lg-2 col-sm-6" style="justify-content:center; text-align: center;">
                        <a href="#" style="text-decoration:none">
                            <img src="../assets/css/images/menu.png" class="" style="width: 100px;" alt="...">
                            <h2 class="mt-3 ancor"> LAINNYA</h2>
                        </a>
                    </div>
                </div>
            </div>
            <div class="mt-5 mb-5">
                <h1 class="fs-4">KATEGORI FAVORITE AYO BANTU</h1>
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="mt-3 card" style="width: 18rem;">
                            <a href="" @click.prevent="$router.push('/donation')">
                                <img src="../assets/css/images/card.png" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title text-center text-danger">Coming Soon !</h5>
                                <!-- <div class="progress mt-3" role="progressbar" aria-label="Danger striped example"
                                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 50%"></div>
                                </div>
                                <div class="mt-2">
                                    <p><span class="text-primary-emphasis">Rp 0</span> terkumpul dari Rp 20000000</p>
                                </div> -->
                                <!-- <a href="#" class="btn btn-primary mt-5">DONASI</a> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="mt-3 card" style="width: 18rem;">
                            <a href="" @click.prevent="$router.push('/donation')">
                                <img src="../assets/css/images/card.png" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title text-center text-danger">Coming Soon !</h5>
                                <!-- <div class="progress mt-3" role="progressbar" aria-label="Danger striped example"
                                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 50%"></div>
                                </div>
                                <div class="mt-2">
                                    <p><span class="text-primary-emphasis">Rp 0</span> terkumpul dari Rp 20000000</p>
                                </div> -->
                                <!-- <a href="#" class="btn btn-primary mt-5">DONASI</a> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="mt-3 card" style="width: 18rem;">
                            <a href="" @click.prevent="$router.push('/donation')">
                                <img src="../assets/css/images/card.png" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title text-center text-danger">Coming Soon !</h5>
                                <!-- <div class="progress mt-3" role="progressbar" aria-label="Danger striped example"
                                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 50%"></div>
                                </div>
                                <div class="mt-2">
                                    <p><span class="text-primary-emphasis">Rp 0</span> terkumpul dari Rp 20000000</p>
                                </div> -->
                                <!-- <a href="#" class="btn btn-primary mt-5">DONASI</a> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="mt-3 card" style="width: 18rem;">
                            <a href="" @click.prevent="$router.push('/donation')">
                                <img src="../assets/css/images/card.png" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title text-center text-danger">Coming Soon !</h5>
                                <!-- <div class="progress mt-3" role="progressbar" aria-label="Danger striped example"
                                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 50%"></div>
                                </div>
                                <div class="mt-2">
                                    <p><span class="text-primary-emphasis">Rp 0</span> terkumpul dari Rp 20000000</p>
                                </div> -->
                                <!-- <a href="#" class="btn btn-primary mt-5">DONASI</a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <h1 class="fs-4">MENDESAK MINGGU INI</h1>
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="mt-3 card" style="width: 18rem;">
                            <a href="" @click.prevent="$router.push('/donation')">
                                <img src="../assets/css/images/card.png" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title text-center text-danger">Coming Soon !</h5>
                                <!-- <div class="progress mt-3" role="progressbar" aria-label="Danger striped example"
                                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 50%"></div>
                                </div>
                                <div class="mt-2">
                                    <p><span class="text-primary-emphasis">Rp 0</span> terkumpul dari Rp 20000000</p>
                                </div> -->
                                <!-- <a href="#" class="btn btn-primary mt-5">DONASI</a> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="mt-3 card" style="width: 18rem;">
                            <a href="" @click.prevent="$router.push('/donation')">
                                <img src="../assets/css/images/card.png" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title text-center text-danger">Coming Soon !</h5>
                                <!-- <div class="progress mt-3" role="progressbar" aria-label="Danger striped example"
                                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 50%"></div>
                                </div>
                                <div class="mt-2">
                                    <p><span class="text-primary-emphasis">Rp 0</span> terkumpul dari Rp 20000000</p>
                                </div> -->
                                <!-- <a href="#" class="btn btn-primary mt-5">DONASI</a> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="mt-3 card" style="width: 18rem;">
                            <a href="" @click.prevent="$router.push('/donation')">
                                <img src="../assets/css/images/card.png" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title text-center text-danger">Coming Soon !</h5>
                                <!-- <div class="progress mt-3" role="progressbar" aria-label="Danger striped example"
                                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 50%"></div>
                                </div>
                                <div class="mt-2">
                                    <p><span class="text-primary-emphasis">Rp 0</span> terkumpul dari Rp 20000000</p>
                                </div> -->
                                <!-- <a href="#" class="btn btn-primary mt-5">DONASI</a> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="mt-3 card" style="width: 18rem;">
                            <a href="" @click.prevent="$router.push('/donation')">
                                <img src="../assets/css/images/card.png" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title text-center text-danger">Coming Soon !</h5>
                                <!-- <div class="progress mt-3" role="progressbar" aria-label="Danger striped example"
                                    aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 50%"></div>
                                </div>
                                <div class="mt-2">
                                    <p><span class="text-primary-emphasis">Rp 0</span> terkumpul dari Rp 20000000</p>
                                </div> -->
                                <!-- <a href="#" class="btn btn-primary mt-5">DONASI</a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row p-5 mx-3" style="background-color:#FCD375;">
            <div class="col-12 col-sm-6 col-md-3 justify-center text-center d-flex ">
                <span class="material-symbols-outlined fw-bold text-dark fs-1 me-3">
                    group
                </span>
                <h1 class="fs-6 fw-bold text-start bold">
                    {{ totalDonaturs }} <br />
                    Ummat telah berdonasi
                </h1>
            </div>
            <div class="col-12 col-sm-6 col-md-3 justify-center text-center d-flex ">
                <span class="material-symbols-outlined fw-bold text-dark fs-1 me-3">
                    payments
                </span>
                <h1 class="fs-6 fw-bold text-start bold">
                    Rp {{ totalMoney }} <br />
                    Total Dana Terkumpul
                </h1>
            </div>
            <div class="col-12 col-sm-6 col-md-3 justify-center text-center d-flex ">
                <span class="material-symbols-outlined fw-bold text-dark fs-1 me-3">
                    person_pin
                </span>
                <h1 class="fs-6 fw-bold text-start bold">
                    {{ totalPeople }} <br />
                    Orang telah terbantu
                </h1>
            </div>
            <div class="col-12 col-sm-6 col-md-3 justify-center text-center d-flex ">
                <span class="material-symbols-outlined fw-bold text-dark fs-1 me-3">
                    pin_drop
                </span>
                <h1 class="fs-6 fw-bold text-start bold">
                    {{ totalPlace }} <br />
                    titik lokasi telah tersalurkan
                </h1>
            </div>
        </div>

        <!-- Footer -->
        <div>
            <Footer />
        </div>
    </div>
</template>
