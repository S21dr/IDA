<template>
  <div class="navBar">
    <h2>Каталог</h2>
    <ul>
      <li v-for="item in dataCategoryList" :key="item.id">
        <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NabBar",
  data: () => ({
    dataCategoryList: [],
  }),
  created() {

    this.dataCategoryList = this.$store.state.catalogList.map(el => {
      const item = {
        id: el.id,
        name: el.name
      }
      switch (el.id) {
        case 1:
          item.route = "/"
          break
        case 2:
          item.route = "messengerBags"
          break
        case 3:
          item.route = "businessBags"
          break
        default:
          break
      }
      return item
    })
  }
}
</script>

<style scoped lang="scss">

.navBar {
  position: sticky;
  top: 65px;
  z-index: 5;
  background: white;
  padding-bottom: 20px;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    color: #1F1F1F;
    margin-bottom: 24px;
  }

  ul {
    padding: 0;
    margin: 0;
    background: #ffffff;

    li {
      list-style-type: none;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        a {
          color: #59606D;
        }
      }

      a {
        text-decoration: none;
        transition: all 0.3s;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        color: #959DAD;
      }

      .nuxt-link-exact-active {
        text-decoration: underline;
        color: #1F1F1F;
      }
    }
  }
}
</style>
