<template>
  <div>
    <div class="sortWrap">
      <span>Сортировка по:</span>
      <v-select v-model="selected" :options="options"  :reduce="item => item.value" label="label" class="sort"/>
    </div>
    <div class="itemsWrap">
      <ItemCatalog v-for="item in items" :key="item.id" v-bind:item="item"/>
    </div>
    <button class="addElements" v-on:click="addItems">Загрузить еще</button>
  </div>


</template>

<script>
import CatalogLayout from "@/layouts/catalogLayout";
import {catalog} from "@/api";
import vSelect from "vue-select";

export default {
  layout: "catalogLayout",
  components: {
    vSelect
  },
  data: () => ({
    defaultItemsAll:[],
    number: 12,
    items: [],
    selected:0,
    options: [
      {
        label:'умолчанию',
        value:0
      },
      {
        label:'цене',
        value:1
      },
      {
        label:'популярности',
        value:2
      },
    ]

  }),
  methods: {
    addItems() {
      this.number = this.number + 12
      this.items = this.defaultItemsAll.slice(0, this.number)
      console.log(this.number)
    },
    sortItemsPrice(){
      this.items = this.defaultItemsAll.sort(function(a, b) {
        return b.price - a.price;
      })
      this.items = this.items.slice(0, this.number)
    },
    sortItemsRate(){
      this.items = this.defaultItemsAll.sort(function(a, b) {
        return b.rating - a.rating;
      })
      this.items = this.items.slice(0, this.number)
    }
  },
  watch:{
    selected(val){
      if (val == null||val == 0){
        this.defaultItemsAll = [...this.categoryItems]
        this.selected = 0
        this.items = this.defaultItemsAll.slice(0, this.number)
      }else if (val == 1){
        this.sortItemsPrice()
      } else {
        this.sortItemsRate()
      }
    }
  },
  created() {
    this.defaultItemsAll = [...this.categoryItems]
    this.items = this.categoryItems.slice(0, this.number)
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
