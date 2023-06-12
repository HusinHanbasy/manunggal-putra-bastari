<script>
import { mapActions } from 'pinia';

export default {

}
</script>
<template>
    <div class="mt-5" style="background-color:white">
        <!-- Footer -->
        <div class=" row footer">
            <div class="col-sm-6">
                <div>
                    <a @click.prevent="$router.push('/')" class="p-0" href="#">
                        <img style="width: 210px; height: 80; justify-content: left;" class="mt-0 mb-0"
                            src="../assets/css/images/Footer.png">
                    </a>
                </div>
                <p class="text-dark ms-3">
                    Jalan Swadaya Lingkungan I, Rukun Tetangga 006, Rukun Warga 001 Kelurahan Pringsewu Utara, Kecamatan
                    Pringsewu,Kabupaten Pringsewu <br />Telepon : (+62821) 77670892 <br /> Email :
                    manunggalputrabestari@gmail.com <br />
                    <a href="https://goo.gl/maps/vKcqQcVBzXYy5CsH7"> google maps </a>
                </p>
            </div>
            <div class="col-sm-3">
                <h5 class="text-uppercase text-dark mb-5">TENTANG KAMI</h5>

                <ul class="list-unstyled mb-0">
                    <li class="mb-1">
                        <a href="#!" class="text-dark" style="text-decoration: none;">Company Profile</a>
                    </li>
                    <li class="mb-1">
                        <a href="#!" class="text-dark" style="text-decoration: none;">Legalitas</a>
                    </li>
                    <li class="mb-1">
                        <a href="#!" class="text-dark" style="text-decoration: none;">Galery</a>
                    </li>
                    <li class="mb-1">
                        <a href="#!" class="text-dark" style="text-decoration: none;">Link 4</a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h5 class="text-uppercase text-dark mb-5">REKENING</h5>
                <p class="text-dark">
                    Donasi anda bisa di salurkan melalui <br />
                    Rekening Manunggal Putra Bestari <br />
                    <br />
                    BCA XXXX XXXX XX
                </p>

            </div>
        </div>

        <!-- Copyright -->
        <div class="text-center text-dark mt-5 p-3" style="background-color:#FCD375;">
            © 2023 Copyright:
            <a class=" text-dark" href="#">Manunggalputrabestari@gmail.com</a>
        </div>
    </div>
</template>

<style>
.footer {
    font-size: 16px;

}
</style>