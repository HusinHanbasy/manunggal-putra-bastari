<script>
import TableRow from './TableRow.vue';
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter'

export default {
  components: {
    TableRow,
  },
  data() {
    return {
      ThCategory: ['no', 'name', '#']
    }
  },
  computed: {
    ...mapState(useCounterStore, ["categories", 'totalCategories', 'totalPage'])
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchCategory", "deleteCategory"]),

  },
  created() {
    this.fetchCategory()
  }

};
</script>

<template>
  <main class="
      main-content
      position-relative
      max-height-vh-100
      h-100
      border-radius-lg
    ">
    <section id="category-section">
      <!-- Navbar -->
      <nav class="
          navbar navbar-main navbar-expand-lg
          mx-5
          px-0
          shadow-none
          rounded
        " id="navbarBlur" navbar-scroll="true">
        <div class="container-fluid py-1 px-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent mb-1 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li class="breadcrumb-item text-sm">
                <a class="opacity-5 text-dark" href="javascript:;">Dashboard</a>
              </li>
              <li class="breadcrumb-item text-sm text-dark active" aria-current="page">
                Categories
              </li>
            </ol>
            <h6 class="font-weight-bold mb-0">Categories</h6>
          </nav>
        </div>
      </nav>
      <!-- End Navbar -->
      <div class="container-fluid py-4 px-5">
        <div class="row">
          <div class="col-12">
            <div class="card border shadow-xs mb-4">
              <div class="card-header border-bottom pb-0">
                <div class="d-sm-flex align-items-center">
                  <div>
                    <h6 class="font-weight-semibold text-lg mb-0">
                      Categories List
                    </h6>
                    <p class="text-sm">See information about all Categories</p>
                  </div>
                  <div class="ms-auto d-flex">
                    <button @click.prevent="$router.push('/add-category')" type="button" class="
                        btn btn-sm btn-dark btn-icon
                        d-flex
                        align-items-center
                        me-2
                      ">
                      <span class="btn-inner--icon">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          fill="currentColor" class="d-block me-2">
                          <path
                            d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                        </svg>
                      </span>
                      <span class="btn-inner--text">Add Category</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body px-0 py-0">
                <div class="table-responsive p-0">
                  <table class="table align-items-center mb-0">
                    <thead class="bg-gray-100">
                      <tr>
                        <th v-for="th in ThCategory" class="
                        text-center justify-center
                            text-secondary text-xs
                            font-weight-semibold
                            opacity-7
                          ">
                          {{ th }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <TableRow v-for="(category, index) in categories" :key="category.id" :data="category" :index="index"
                        :cols="ThCategory" @deleteCategory="(id) => this.deleteCategory(id)" />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>