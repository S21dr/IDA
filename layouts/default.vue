<template>
  <div>
    <Nuxt/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');

html {
  font-family: 'PT Sans',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.blockScroll{
  overflow: hidden;
}
.mainContainer {
  width: 100%;
  max-width: 1284px;
  padding: 0 10px;
  margin: 0 auto;
}
button{
  border: none;
  cursor: pointer;
  background: #1F1F1F;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
  transition: all 0.3s;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
}
button:hover{
  background: black;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.9);
}
button:active, button:focus {
  outline: none;
}
button::-moz-focus-inner {
  border: 0;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
