<template>
  <div>
    <h1>实现一个表单组件</h1>
    
    <my-form :model="model" ref="loginForm" :rules="rules">
      <my-form-item label="用户名" prop="username">
        <my-input v-model="model.username" placeholder="请输入用户名" ></my-input>
      </my-form-item>
      <my-form-item label="密码" prop="password">
        <my-input type="password" v-model="model.password" placeholder="请输入密码" ></my-input>
      </my-form-item>
      
      <my-form-item>
        <button @click="onLogin">登录</button>
      </my-form-item>
    </my-form>
  </div>
</template>
<script>
import MyForm from '@/components/form/MyForm'
import MyFormItem from '@/components/form/MyFormItem'
import MyInput from '@/components/form/MyInput'


export default {
  data(){
    return{
      model: { username: "tom", password: "" },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    }
  },
  components:{
    MyForm,
    MyFormItem,
    MyInput
  },
  methods:{
    onLogin(){

      this.$refs["loginForm"].validate(isValid => {
        // const notice = create(Notice, {
        //   title: "杨哥喊你来搬砖",
        //   message: isValid ? "登录去！" : "有错改去！"
        // });
        // notice.show();
        // setTimeout(() => {
        //   notice.hide();
        // }, 2000);
        if(isValid){
          alert('通过校验')
        }else{
          alert('没通过校验')
        }

      });
    }
  }
}
</script>