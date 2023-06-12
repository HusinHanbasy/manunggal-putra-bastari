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
    <div style="font-family:Arial, Helvetica, sans-serif">
        <div>
            <div class="p-3 mt-3" style="background-color: rgba(0, 0, 0, 0.2)">
                <div class="mx-5">
                    <h3 class="text-dark"><a href="#" @click.prevent="$router.push('/')">Home</a> / Tentang Kami</h3>
                </div>
                <div class="mx-5">
                    <h1 style="color: forestgreen;">VISI - MISI</h1>
                </div>
            </div>
            <div class="mt-5 mx-5">
                <h1 style="color: forestgreen;">Visi</h1>
                <h3 class="text-dark fs-5">MENJADI LEMBAGA YANG BERGERAK DALAM PELAKSANAAN KEGIATAN PENDIDIKAN, KEAGAMAAN
                    DAN
                    SOSIAL KEMANUSIAAN UNTUK MEMBANGUN PERADABAN BERSAMA UMMAT SECARA CEPAT, TEPAT DAN BERMANFAAT </h3>
            </div>
            <div class="mx-5">
                <h1 style="color: forestgreen;">Misi</h1>
                <ul class="text-dark ">
                    <li>
                        <h3 class="text-dark fs-5"> Menyelenggarakan pendidikan formal dan non formal yang berkualitas
                            sesuai
                            standarisasi nasional.
                        </h3>
                    </li>
                    <li>
                        <h3 class="text-dark fs-5">Menyelenggarakan kegiatan sosial dan kemanusiaan untuk membantu kehidupan
                            masyarakat.
                        </h3>
                    </li>
                    <li>
                        <h3 class="text-dark fs-5">Menyelenggarakan kegiatan Islami kepada masyarakat untuk meningkatkan
                            nilai
                            keimanan dan ketakwaan terhadap Allah SWT.
                        </h3>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>
<style>
h3 {
    font-size: 20px;
}
</style>