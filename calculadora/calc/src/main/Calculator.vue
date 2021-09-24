<template>
  <div class="calculator">
      <Display value="1000"/>
      <Button label="AC" @onCalcButtonClick="clearMemory"/>
      <Button class="ot" label="/" op/>
      <Button label="7"/>
      <Button label="8"/>
      <Button label="9"/>
      <Button class="ot" label="* " op/>
      <Button label="4"/>
      <Button label="5"/>
      <Button label="6"/>
      <Button class="ot" label="-" op/>
      <Button label="1"/>
      <Button label="2"/>
      <Button label="3"/>
      <Button class="ot" label="+" op/>
      <Button label="0"/>
      <Button label="."/>
      <Button class="op" label="=" />
      <Button class="dev" label="Hello" op/>
      <Button class="dev" label="DEV" triple/>
      <Button class="dev" label="*_*" op/>
      <Display />
      
  </div>
</template>

<script>
import Display from "../components/Display.vue"
import Button from "../components/Button.vue"
export default {
    components:{Button, Display},
    methods:{
        clearMemory(){
            console.log('Limpar');
        },
        setOperation(op){
            console.log('operação '+op)
        },
        addDigit(n){
            console.log('Digito '+ n)
        }
    }
}
</script>

<style>
    .calculator{
        height: 350px;
        width: 235px;
        border-radius:5px;
        overflow:hidden;
        display:grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows:1fr 48px 48px 48px 48px 60px;
    }
</style>