<template>
  <div>
    <div class="itemsWrap">
      <ItemCatalog v-for="item in items" :key="item.id" v-bind:item="item"/>
    </div>
    <button class="addElements" v-on:click="addItems">Загрузить еще</button>
  </div>


</template>

<script>
import CatalogLayout from "@/layouts/catalogLayout";
import {catalog} from "@/api";

export default {
  layout: "catalogLayout",
  data: () => ({
    number:12,
    items: [],

  }),
  methods:{
    addItems(){
      this.number = this.number+12
      this.items = this.categoryItems.slice(0,this.number)
      console.log(this.number)
    }
  },
  created() {
    this.items = this.categoryItems.slice(0,this.number)
  },
  async asyncData({store,$cookies}) {
    const category = await catalog.getCategoryList()
    const categoryItems = await catalog.getCategoryItems(2)
    let itemsCart = $cookies.get('catItems')
    if (itemsCart){
      store.commit('setCartItems',itemsCart)
    }
    store.commit('setCatalogList', category.data)

    return {category: category.data, categoryItems: categoryItems.data}
  }
}
</script>

<style lang="scss">
.itemsWrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 16px;
}
.addElements{
  margin: 20px auto;
  width: 240px;
  height: 50px;
}


</style>
