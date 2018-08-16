<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="form-group">
      <input type="text" v-model="searchName" placeholder="Nom du parking"><br />
      <input type="text" v-model="searchCity" placeholder="Ville"><br />
      <input type="checkbox" v-model="searchPrice">Gratuit<br />
      <button class="btn btn-primary"@click="search">Rechercher</button><br />

      <table align="center">
        <thead>
        <tr>
          <th>
            Nom Parking
          </th>
          <th>
            Adresse
          </th>
          <th>
            Ville
          </th>
          <th>
            Code Postal
          </th>
          <th>
            Prix
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="key in results">
          <td>
            {{ key.name }}
          </td>
          <td>
            {{ key.adress }}
          </td>
          <td>
            {{ key.city }}
          </td>
          <td>
            {{ key.codePost }}
          </td>
          <td>
            {{ key.price }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchParking',
    data() {
      return {
        msg: 'Bienvenue sur SearchParking',
        searchName: '',
        searchCity: '',
        searchPrice: false,
        results: []
      }
    },
    mounted() {
      this.$http.get('https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=parkings-test-contribution-libre&facet=empty&facet=ville&facet=info&facet=nombre_de_places&rows=100').then(res => {
        this.results = res.body.records.map(parking => {
          return ({
            name: parking.fields.fiche,
            adress: parking.fields.adresse,
            city: parking.fields.ville,
            codePost: parking.fields.code_postal,
            price: parking.fields.info,
          })
        });
      });
    },
    methods: {
      search() {
        let query = `https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=parkings-test-contribution-libre&facet=empty&facet=ville&facet=info&facet=nombre_de_places&rows=10000`;
        if (this.searchName !== '')
          query += `&q=${this.searchName}`;
        if (this.searchCity !== '')
          query += `&refine.ville=${this.searchCity}`;
        if (this.searchPrice !== false)
          query += `&refine.info=Gratuit`;
        this.$http.get(query).then(res => {
          this.results = res.body.records.map(parking => {
            return ({
              name: parking.fields.fiche,
              adress: parking.fields.adresse,
              city: parking.fields.ville,
              codePost: parking.fields.code_postal,
              price: parking.fields.info,
            })
          });
        });
      }
    }
  }
</script>

<style scoped>
  table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
  }

  th {
    background-color: #42b983;
    color: rgba(255,255,255,0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  td {
    background-color: #f9f9f9;
  }

  th, td {
    min-width: 120px;
    padding: 10px 20px;
  }

  /*th.active {*/
    /*color: #fff;*/
  /*}*/

  /*th.active .arrow {*/
    /*opacity: 1;*/
  /*}*/

  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }
</style>
