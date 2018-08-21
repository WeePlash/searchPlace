  <template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form method="post" @submit="validate" action="/createUser">
      <div class="form-group">
        <input type="text" v-model="userName" placeholder="pseudo"><br/>
        <input type="text" v-model="userPass" placeholder="mot de passe"><br/>
        <input type="submit" value="Valider">
        <br/>
      </div>
    </form>
    <button class="btn btn-primary"@click="retour">Retour</button><br />
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'CreateUser',
    data() {
      return {
        msg: 'Créer un compte',
        userName: '',
        userPass: '',
      }
    },
    mounted() {
    },
    methods: {
      validate() {
        let url = 'http://localhost:3000/createUser';
        axios.post(url,
          this.userName,
          this.userPass,
          { headers: {
              'Content-type': 'application/x-www-form-urlencoded',
            }
          }).then(res =>{});
      },
      retour() {
        this.$router.push({name: 'Connection'})
      }
    }
  }
</script>

<style scoped>
</style>
