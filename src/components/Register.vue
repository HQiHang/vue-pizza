<template>
  <div class="register">
    <div class="row mt-3">
      <div class="col-md-12 col-lg-12">
        <div class="card">
          <div class="card-body">
            <img class="mx-auto d-block" src="../../src/assets/logo.png">
            <form @submit.prevent="onSubmit()">
              <div class="form-group">
                <label for="email">邮箱：</label>
                <input id="email" type="email" class="form-control" v-model="email" autocomplete="off">
              </div>
              <div class="form-group">
                <label for="password">密码：</label>
                <input id="password" type="password" class="form-control" v-model="password" autocomplete="off">
              </div>
              <div class="form-group">
                <label for="confirm-password">确认密码：</label>
                <input id="confirm-password" type="password" class="form-control" v-model="confirmPassword" autocomplete="off">
              </div>
              <button class="btn btn-block btn-success">注册</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Register",
    data(){
      return {
        email: "",
        password: "",
        confirmPassword: "",
      }
    },
    methods: {
      onSubmit(){
        if(this.password === this.confirmPassword){
          const formData = {
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
          };
          axios.post("/users.json", formData).then(() => {
            this.$router.push("/login");
          });
        }else{
          alert("两次密码输入不一致！");
          return false;
        }
      }
    }
  }
</script>

<style scoped>

</style>
