<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Footer
    },
    props: ["campaigns"],

}
</script>
<template>
    <div>
        <div>
            <div class="p-3" style="background-color:rgba(0, 0, 0, 0.2)">
                <div class="mx-5">
                    <h3 class="text-dark"><a href="#" @click.prevent="$router.push('/')">Home</a> / Tentang Kami</h3>
                </div>
                <div class="mx-5">
                    <h1 style="color: forestgreen;">LAPORAN</h1>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>