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

        // let headers = {
        //   headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Origin, Authorization',
        //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   }
        // };

        // axios.post('http://localhost:3000/createUser', {name: this.userName, password: this.userPass}, headers).then(res => {
        // });

        // return axios.request({
        //   url: url,
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/x-www-form-urlencoded",
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Origin, Authorization',
        //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        //   },
        //   data: this.data
        // });

        axios.post(url, {name: this.userName, password: this.userPass}).then(res => {
        })
      }
    }
  }
</script>

<style scoped>
</style>
