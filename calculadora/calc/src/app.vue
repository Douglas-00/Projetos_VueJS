<template>
  <div id="app">
      <h1>Calculadora</h1>
      <Calculator/>
  </div>
</template>

<script>
import Calculator from "./main/Calculator"

export default {
components:{Calculator}
}
</script>

<style>
@font-face{
    font-family: "RobotoMono";
    src:url("./fonts/RobotoMono-Thin.ttf");
}
*{
  font-family:'Courier New', Courier, monospace;
}
body{
  margin: 0;
}
#app{
  display:flex;
  flex-direction: column;
  height:100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: blanchedalmond;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(28,131,152,1) 11%, rgba(180,130,232,1) 20%, rgba(37,15,60,1) 80%, rgba(28,131,152,1) 100%);
}
</style>