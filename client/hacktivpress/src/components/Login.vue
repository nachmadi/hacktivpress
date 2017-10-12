<template lang="html">
  <div class="container">
      <div class="login-container">
            <div id="output"></div>
            <div class="avatar"></div>
            <div class="form-box">
                <form class="form-horizontal" @submit.prevent="login();">
                    <input name="user" type="text" placeholder="username" v-model="username">
                    <input type="password" placeholder="password" v-model="password">
                    <button class="btn btn-info btn-block login" type="submit">Login</button>
                    <router-link :to="{ name: 'sign-up'}">Sign UP</router-link>
                </form>
            </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login (){
      axios.post(`http://localhost:3000/users/signin`, {password:this.password, password: this.password})
      .then(data => {
          console.log(data)
          localStorage.setItem('tokenjwt',data);
          this.$router.push('/hello');
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
//   ,
//   created () {
//     var tokenJwt = localStorage.getItem('tokenjwt')
//     if(tokenJwt!=null){
//       this.$router.push('/hello');
//     }
//   }
}
</script>

<style lang="css">
fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>
