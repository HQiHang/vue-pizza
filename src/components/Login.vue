<template>
  <div class="login">
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
              <button class="btn btn-block btn-success">登录</button>
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
    name: "Login",
    data(){
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      onSubmit(){
        axios.get("/users.json").then((data) => {
          const users = [];
          for(let key in data.data){
            const user = data.data[key];
            users.push(user);
          }
          let res = users.filter((user) => {
            return user.email === this.email && user.password === this.password;
          });
          if(res != null && res.length > 0){
            this.$store.dispatch("setUser", res[0].email);
            this.$router.push("/");
          }else{
            this.$store.dispatch("setUser", null);
            alert("密码错误！");
          }
        });
      }
    },
    beforeRouteEnter: (to, from, next) => {
      next(vm => vm.$store.dispatch("setUser", null))
    }
  }
</script>

<style scoped>

</style>
