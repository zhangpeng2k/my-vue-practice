<template>
  <div>
    <input :type="type" v-bind="$attrs" @input="onInput" :value="value" >
    <!-- 
      tips:

        v-bind="$attrs"：[
          v-bind会自动展开$attrs,
          $attrs包含了副作用域中所有props不包含的属性
        ] 
        参考：https://cn.vuejs.org/v2/api/#vm-attrs

     -->
  </div>
</template>
<script>
export default {
  
  inheritAttrs: false,//用于取消属性继承
  // 参考：https://cn.vuejs.org/v2/api/#inheritAttrs
  // 不然就会...
  // <div placeholder="请输入用户名"><input type="" placeholder="请输入用户名"></div>

  props:{
    type:{
      type:String,
      default:''
    },
    value:{
      type:String,
      default:''
    },
    
  },

  mounted () {
    console.log(this.$attrs);
    // $attrs包含了副作用域中所有props不包含的属性
    // 参考：https://cn.vuejs.org/v2/api/#vm-attrs
      
  },
  methods:{
    onInput(e){
      this.$emit('input',e.target.value);
      console.log(e.target.value);

      // 通知校验
      this.$parent.$emit('validate')
      
    }
  },
  
}
</script>