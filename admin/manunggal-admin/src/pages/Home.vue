<script>
import SideBar from "../components/SideBar.vue";
import Dashboard from "../components/Dashboard.vue";
import Food from "../components/Campaign.vue";
import AddCampaign from "../components/AddCampaign.vue";
import Categories from "../components/Categories.vue";
import AddCategory from "../components/AddCategory.vue";
import Histories from "../components/Histories.vue";

export default {
  components: {
    SideBar,
    Dashboard,
    Food,
    AddCampaign,
    Categories,
    AddCategory,
    Histories,
  },
  emits: ["addFood", "handleLogout", "changeStatus", "movePage", "deleteFood", "foodById", "editFood", "editCategory", "addCategory", "deleteCategory"],
  props: [
    "campaign",
    "page",
    "foodList",
    "categoriesList",
    "historiesList",
    "totalCategories",
    "totalFood",
    "totalHistories",
  ],

  methods: {
    changePage(page) {
      this.$emit('movePage', page);
    },
    handleLogout() {
      this.$emit('handleLogout')
    },
    deleteFood(id) {
      this.$emit('deleteFood', id)
    }
  },

};

</script>

<template>
  <div>
    <SideBar @changePage="changePage" @handleLogout="handleLogout" />
    <Dashboard v-if="page == 'home'" :totalFood="totalFood" :totalCategories="totalCategories"
      :totalHistories="totalHistories" />
    <Food v-if="page == 'food'" :foodList="foodList" @changePage="changePage"
      @changeStatus="(id, status) => $emit('changeStatus', id, status)" @deleteFood="deleteFood"
      @foodById="(id) => $emit('foodById', id)" />
    <AddCampaign v-if="page == 'addFood' || page == 'editFood'" @changePage="changePage" :dataById="dataById"
      :categoriesList="categoriesList" @addFood="(data) => $emit('addFood', data)" @cancelAdd="changePage"
      @editFood="(data, id) => $emit('editFood', data, id)" :page="page" />
    <Categories v-if="page == 'categories'" :categoriesList="categoriesList" @changePage="changePage"
      @deleteCategory="(id) => $emit('deleteCategory', id)" />
    <AddCategory v-if="page == 'addCategory'" @cancelPage="changePage"
      @addCategory="(data) => $emit('addCategory', data)" />
    <Histories v-if="page == 'histories'" :historiesList="historiesList" />
  </div>
</template>