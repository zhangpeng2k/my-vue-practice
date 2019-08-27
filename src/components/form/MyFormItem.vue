<template>
  <div>
    <!-- label -->
    <label v-if="label">{{label}}</label>

    <slot></slot>
    <!-- 错误信息提示 -->
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>
<script>
import Schema from "async-validator"; //element表单使用的表单验证库
export default {
  data() {
    return {
      errorMessage: ""
    };
  },
  inject:['form'],//需要把form组件的form传过来，用于获取规则验证
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    }
  },

  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      // 1.获取值和校验规则
      const rules = this.form.rules[this.prop];
      const value = this.form.model[this.prop];
      // 2.创建Schema实例 {username: rules}
      const schema = new Schema({ [this.prop]: rules });
      // 3.执行校验，校验对象,回调函数
      // validate返回校验结果Promise
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          // 显示错误
          this.errorMessage = errors[0].message;
          console.warn('验证错误errors')
          console.error(errors)
        } else {
          this.errorMessage = "";
        }
      });
    }
  }
};
</script>