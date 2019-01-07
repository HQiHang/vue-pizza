<template>
  <div class="menu row">
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>购物车</th>
          </tr>
        </thead>
        <tbody v-for="pizza in getPizzas" :key="pizza.name">
          <tr>
            <td><strong>{{ pizza.name }}</strong></td>
          </tr>
          <tr v-for="option in pizza.options">
            <td>{{ option.size }}</td>
            <td>{{ option.price }}</td>
            <td><button class="btn btn-sm btn-outline-success" @click="addToCar(pizza, option)">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="col-md-4 col-sm-12">
      <div v-if="cars.length>0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="item in cars" :key="item.name">
            <tr>
              <td>
                <button class="btn btn-sm btn-success" @click="decreaseQuantity(item)">-</button>
                <span>{{ item.quantity }}</span>
                <button class="btn btn-sm btn-success" @click="increaseQuantity(item)">+</button>
              </td>
              <td>{{ item.name }}{{ item.size }}寸</td>
              <td>{{ item.price * item.quantity }}RMB</td>
            </tr>
          </tbody>
        </table>
        <p>总价：{{ totalPrice + "RMB" }}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>
        购物车是空的哦！
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Menu",
    data(){
      return {
        cars: []
      }
    },
    methods: {
      addToCar(pizza, option){
        let car = {
          name: pizza.name,
          size: option.size,
          price: option.price,
          quantity: 1
        };
        if(this.cars.length > 0){
          let res = this.cars.filter((car) => {
            return (car.name === pizza.name && car.price === option.price);
          });
          if(res != null && res.length > 0){
            res[0].quantity++;
          }else{
            this.cars.push(car);
          }
        }else{
          this.cars.push(car);
        }
      },
      decreaseQuantity(item){
        item.quantity--;
        if(item.quantity === 0){
          this.removeCar(item);
        }
      },
      increaseQuantity(item){
        item.quantity++;
      },
      removeCar(item){
        this.cars.splice(this.cars.indexOf(item), 1);
      },
      fetchData(){
        axios.get("/menu.json").then((data) => {
          this.$store.commit("setMenuItems", data.data);
        });
      }
    },
    computed: {
      totalPrice(){
        let totalPrice = 0;
        for(let index in this.cars){
          totalPrice += this.cars[index].quantity * this.cars[index].price;
        }
        return totalPrice;
      },
      getPizzas(){
        return this.$store.getters.getMenuItems
      }
    },
    created(){
      this.fetchData();
    }
  }
</script>

<style scoped>

</style>
