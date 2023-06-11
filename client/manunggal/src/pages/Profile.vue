<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Footer
    },
    props: ["campaigns"],
    methods: {
        ...mapActions(useCounterStore, ["campaignById"]),
        showDetail(id) {
            this.campaignById(id)
            this.$router.push(`/detail/${this.campaign.id}`)
        }
    }
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
                    <h1 style="color: forestgreen;">COMPANY PROFILE</h1>
                </div>
            </div>
            <div class="m-5 fs-4">
                <ul class="list-unstyled mb-0">
                    <li class="mb-5">
                        <a href="#!" class="text-dark" style="text-decoration: none;"><img class="mx-2" style="width:40px"
                                src="../assets/css/images/facebook.png" />
                            Facebook</a>
                    </li>
                    <li class="mb-5">
                        <a href="#!" class="text-dark" style="text-decoration: none;"><img class="mx-2" style="width:40px"
                                src="../assets/css/images/instagram.png" />
                            Instagram</a>
                    </li>
                    <li class="mb-5">
                        <a href="#!" class="text-dark" style="text-decoration: none;"><img class="mx-2" style="width:40px"
                                src="../assets/css/images/whatsapp.png" />
                            Whatsapp</a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>