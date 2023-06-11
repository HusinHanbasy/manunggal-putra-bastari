<script>
import { useCounterStore } from '../stores/counter'
import { mapState, mapActions } from 'pinia';

export default {
  data() {
    name: ''
  },
  methods: {
    ...mapActions(useCounterStore, ["addCategory"]),
    addNewCategory() {
      this.addCategory({ name: this.name })
    }
  }

}

</script>

<template>
  <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="new-category-section">
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
      <h2 class="display-5">Add New Category</h2>
    </div>
    <div class="row mx-5">
      <div class="col-12 col-md-6">
        <form id="category-form">
          <div class="mb-3">
            <label for="category-name">Name <span class="text-danger fw-bold">*</span></label>
            <input v-model="name" type="text" class="form-control" id="category-name" placeholder="Enter category name"
              autocomplete="off" required />
          </div>
          <div class="row mt-5 mb-3">
            <div class="col-6">
              <a @click.prevent="$router.push('/categories')" class="btn btn-lg btn-light rounded-pill w-100 p-2"
                id="cancel-category" href="">Cancel</a>
            </div>
            <div class="col-6">
              <button @click.prevent="addNewCategory" class="btn btn-lg btn-primary rounded-pill w-100 p-2" type="submit"
                href="">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>