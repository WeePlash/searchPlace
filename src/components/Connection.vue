<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="form-group">
      <input type="text" v-model="userName" placeholder="pseudo"><br />
      <input type="text" v-model="userPass" placeholder="mot de passe"><br />
      <button class="btn btn-primary"@click="connect">Connection</button><br />
      <button class="btn btn-primary"@click="create">Créer un compte</button><br />
      <button class="btn btn-primary"@click="search">Lancer une recherche</button><br />
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Connection',
    data() {
      return {
        msg: 'Bienvenue sur SearchParking',
        userName: '',
        userPass: '',
      }
    },
    mounted() {
    },
    methods: {
      connect() {
        let url = 'http://localhost:3000/';
        axios.post(url,
          this.userName,
          this.userPass,
          {
            headers: {
              'Content-type': 'application/x-www-form-urlencoded',
            }
          }).then(function(res){
            const status = JSON.parse(res.data.response.status);
            if (status === '200'){
              this.$router.push({name: 'SearchParking'});
            }
        });
      },
      create() {
        this.$router.push({name: 'CreateUser'});
      },
      search() {
        this.$router.push({name: 'SearchParking'});
      }
    }
  }
</script>

<style scoped>
</style>
