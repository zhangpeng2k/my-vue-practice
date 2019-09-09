<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{count}}</p>
    <div>还剩{{$store.getters['left']}}个</div>
    <button @click="add()">add</button>
    <button @click="asyncAdd()">asyncAdd</button>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      mes:'the message',

    }
  },
  created(){
    
  },
  methods:{
    add(){
      this.$store.commit('increment')
    },
    asyncAdd() {
      this.$store.dispatch("increment")
      this.$store.dispatch("asyncIncrement").then((res) => {
        if (!result) {
          alert("投掷失败，没货啦！");
        }
      }).catch((err) => {
        
      });
    }
  },
  computed: {
    count(){
      return this.$store.state.count
    }
  },
}
</script>
<style lang="scss" scoped>
.about{
  h1{
    color: #000;
    
  }
}
</style>