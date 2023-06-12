<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Footer,
    },

}
</script>
<template>
    <div class="mt-5">
        <div>
            <div class="p-3" style="background-color:rgba(0, 0, 0, 0.2)">
                <div class=" mx-5">
                    <h3 class="text-dark"><a href="#" @click.prevent="$router.push('/')">Home</a> / Tentang Kami</h3>
                </div>
                <div class="mx-5">
                    <h1 style="color: forestgreen;">KANTOR LAYANAN</h1>
                </div>
            </div>
            <p class="text-dark text-dark fs-4 m-5">
                Jalan Swadaya Lingkungan I, Rukun Tetangga 006, Rukun Warga 001 Kelurahan Pringsewu Utara,<br /> Kecamatan
                Pringsewu,Kabupaten Pringsewu <br />Telepon : (+62821) 77670892 <br /> Email :
                manunggalputrabestari@gmail.com <br />
                <a href="https://goo.gl/maps/vKcqQcVBzXYy5CsH7"> google maps </a>
            </p>
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>