<template>
  <button className="button">
    
     {{label}}
     
  </button>
</template>

<script>
export default {
    props:{
        label:{},
        op: {type: Boolean},
        double: {type: Boolean},
        triple: {type: Boolean}

    }
}
</script>

<style>
:root{
    --bg-button:#f0f0f0;
    --border-buttom:solid 1px #888;
}
.button{
    font-size:1.4em;
    background-color:var(--bg-button);
    border:none;
    border-right:var(--border-buttom);
    border-bottom:var(--border-buttom);
    outline:none;
}
.button:active{
    background-color: rgb(253, 76, 76);

}
.button.double{
    grid-column:span 2;
}
.button.triple{
    grid-column:span 3;
}
.dev{
    background-color: brown;
}
.op{
    background-color: orange;
    color:rgb(17, 16, 16);
}
.ot{
    background-color: rgb(141, 190, 219);
    color:rgb(17, 16, 16);
}


.op:active{
    background-color:#60ccf727;
}
</style>