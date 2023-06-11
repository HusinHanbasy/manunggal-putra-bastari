<script>
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdb-vue-ui-kit';
import { ref } from "vue";
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter'
import Card from '../components/Card.vue'
import Footer from '../components/Footer.vue';
export default {
    data() {
        return {
            search: '',
            page: '1',
            limit: 10,
        }
    },
    components: {
        Card,
        Footer
    },
    computed: {
        ...mapState(useCounterStore, ["campaigns", 'totalMovies', 'totalPage'])
    },
    methods: {
        ...mapActions(useCounterStore, ["getCampagins"]),
        onClickHandler() {
            const data = {
                limit: this.limit,
                page: this.page,
                search: this.search,
            }
            this.getCampaigns(data)
        },

    },
    // created() {
    //     const data = {
    //         search: this.search,
    //         genre: this.genre
    //     }
    //     this.getCampaigns(data)
    // }

}
</script>

<template>
    <div>
        <div id="carouselExampleAutoplaying" class="mx-5 carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/css/images/banner3.png" class="d-block w-100" alt="...">
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

        <!-- Footer -->
        <div>
            <Footer />
        </div>
    </div>
</template>
