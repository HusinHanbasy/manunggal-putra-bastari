<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter'

export default {
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
    <div class="col-sm-3">
        <div class="mt-3 card" style="width: 18rem;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkLozlbRJdSMhdpCsD0OUydOONIATtg4JdJZvOS144ov7jMwGkDf_TA9yJ7GfABODeqU&usqp=CAU"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <div class="progress mt-3" role="progressbar" aria-label="Danger striped example" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar progress-bar-striped bg-danger" style="width: 50%"></div>
                </div>
                <div class="mt-2">
                    <p><span class="text-primary-emphasis">Rp 9800000</span> terkumpul dari Rp 20000000</p>
                </div>
                <a href="#" class="btn btn-primary mt-5">DONASI</a>
            </div>
        </div>
    </div>
</template>