<template>
  <div class="admin row">
    <div class="col-sm-12 col-md-8">
      <newPizza></newPizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <h3 class="text-muted">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getMenuItems" :key="item.name">
            <td>{{ item.name }}</td>
            <td><button class="btn btn-outline-danger btn-sm" @click="deletePizza(item)">&times;</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import newPizza from './newPizza'
  import axios from 'axios'

  export default {
    name: "Admin",
    components: {
      newPizza
    },
    methods: {
      deletePizza(item){
        axios.delete("/menu/" + item.id + ".json").then(() => {
          this.$store.commit("removeMenuItem", item);
        });
      }
    },
    computed: {
      getMenuItems(){
        return this.$store.getters.getMenuItems
      }
    },
    created(){
      axios.get("/menu.json").then((data) => {
        let menuArr = [];
        for(let key in data.data){
          data.data[key].id = key;
          menuArr.unshift(data.data[key]);
        }
        this.$store.commit("setMenuItems", menuArr);
      });
    }
  }
</script>

<style scoped>

</style>
