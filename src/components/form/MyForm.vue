<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide(){
    return{
      form:this
    }    
  },
  props:{
    model:{
      type:Object,
      required: true
    },
    rules:{type:Object}
  },
  methods:{
    validate(cb){
      const tasks = this.$children
        //$children获取子组件列表
        .filter(item=>item.prop)
        //过滤一下没有填写prop属性的formItem组件
        .map(item => item.validate());
        //调用子组件的validate验证函数，validate返回校验结果Promise
      
      Promise.all(tasks)
      //全部通过
        .then(() => {
          cb(true);//使验证通过
        }).catch((err) => {
          cb(false);
        });
    }
  }
}
</script>