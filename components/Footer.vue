<template>
  <footer class="footer">
    <div class="footerContainer mainContainer">
      <div>© 2021 Разработанно - Степановым Дмитрием Андреевичем</div>
      <a href="mailto:adel.ernandies@mail.ru">adel.ernandies@mail.ru</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
.footer {
  box-sizing: border-box;
  background-color: #162136;
  color: hsla(0, 0%, 100%, .4);
  height: 80px;
  display: flex;
  align-items: center;

  .footerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 660px) {
      flex-direction: column;
      text-align: center;
    }

    a {
      color: hsla(0, 0%, 100%, .4);

      &:hover {
        color: #29b6f6;
      }
    }
  }
}
</style>
