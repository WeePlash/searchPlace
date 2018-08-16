<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="form-group">
      <input type="text" v-model="userName" placeholder="pseudo"><br />
      <input type="text" v-model="userPass" placeholder="mot de passe"><br />
      <button class="btn btn-primary"@click="connect">Connection</button><br />
      <button class="btn btn-primary"@click="create">Créer un compte</button><br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Connection',
  data () {
    return {
      msg: 'Bienvenue sur SearchParking',
      userName: '',
      userPass: '',
    }
  },
  mounted() {
  },
  methods: {
    connect () {

    },
    create () {
      this.$router.push('CreateUser')
    }
  }
}
</script>

<style scoped>
</style>
