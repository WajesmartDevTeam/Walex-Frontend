<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <Router-view />
  </div>
</template>
<script>
export default {};
</script>

<style>
body {
  height: 100%;
  background-color: #f2f3f8 !important;
  direction: ltr;
}
#app {
  text-align: center;
  height: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#box {
  background-image: url("assets/images/profile_bg.png");
  background-position: 50% 100%;
  background-size: cover;
}
</style>
