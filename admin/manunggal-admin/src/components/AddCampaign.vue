<script>
import Button from './Button.vue';
import { useCounterStore } from '../stores/counter'
import { mapState, mapActions } from 'pinia';

export default {
  components: {
    Button
  },
  data() {
    return {
      title: '',
      target: '',
      duration: '',
      description: '',
      CategoryId: '',
      imageUrl: ''
    }
  },
  computed: {
    ...mapState(useCounterStore, ["categories"])
  },
  methods: {
    ...mapActions(useCounterStore, ["addCampaign"]),
    addNewCampaign() {
      this.addCampaign({
        title: this.title,
        target: this.target,
        duration: this.duration,
        description: this.description,
        CategoryId: this.CategoryId,
        imageUrl: this.imageUrl

      })
    }
  }

}

</script>

<template>
  <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="new-product-section">
    <div class="
        d-flex
        justify-content-center
        flex-wrap flex-md-nowrap
        align-items-center
        pt-3
        pb-2
        mb-3
        border-bottom
      ">
      <h1 class="display-5 text-center">Add New Campaign</h1>
    </div>
    <div class="row mx-5">
      <form class="col-md-6" @submit.prevent="addNewCampaign">
        <div class="mb-3">
          <label for="product-name">Title <span class="text-danger fw-bold">*</span></label>
          <input v-model="title" type="text" class="form-control" id="product-name" placeholder=" Enter Campaign Title"
            autocomplete="off" required />
        </div>
        <div class="mb-3">
          <label for="product-name">Target<span class="text-danger fw-bold">*</span></label>
          <input v-model="target" type="text" class="form-control" id="product-name" placeholder=" Enter Campaign Target"
            autocomplete="off" required />
        </div>
        <div class="mb-3">
          <label for="product-name">Duration <span class="text-danger fw-bold">*</span></label>
          <input v-model="duration" type="text" class="form-control" id="product-name"
            placeholder=" Enter Campaign Duration" autocomplete="off" required />
        </div>
        <div class="mb-3">
          <label for="product-category">Category <span class="text-danger fw-bold">*</span></label>
          <select id="product-category" class="form-select" v-model="CategoryId" required>
            <option value="" selected disabled>-- Select Category --</option>
            <option v-for="category in categories" :key="category.id" :value="category.id"> {{ category.name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="product-desc">Description <span class="text-danger fw-bold">*</span></label>
          <input v-model="description" type="text" class="form-control" id="product-desc"
            placeholder=" Enter Campaign description" autocomplete="off" required />
        </div>
        <div class="mb-3">
          <label for="product-image">Image <span class="text-danger fw-bold">*</span></label>
          <input v-model="imageUrl" type="text" class="form-control" id="product-image"
            placeholder="Enter Campaign image url" autocomplete="off" required />
        </div>
        <div class="row mt-5 mb-3">
          <div class="col-6">
            <a @click.prevent="$router.push('/campaign')" class="btn btn-lg btn-light rounded-pill w-100 p-2"
              id="cancel-category" href="">Cancel</a>
          </div>
          <div class="col-6">
            <button @click.prevent="addNewCampaign" class="btn btn-lg btn-primary rounded-pill w-100 p-2" type="submit"
              href="">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div class="col-md-6" style="margin-top: 5rem">
        <img :src="imageUrl" alt="Campaign Image" style="width: 500px; height: 400px; border-radius: 150px"
          class="border-4 border-slate-800 shadow-xl shadow-indigo-600 rounded-full" />
      </div>
    </div>
  </section>
</template>