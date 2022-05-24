<template>

  <section class="src-components-punto-2">
    <div class="jumbotron">
      <button class="btn btn-success my-3 mr-3" @click="getPostsXHRcb()">Pedir XHR</button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsFetch()">Pedir Fetch </button>
      <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">Pedir Axios </button>
      <button class="btn btn-danger my-3" @click="posts=[]">CLEAR</button>
      <br>

      <div v-if="posts.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>nombre</th>
            <th>email</th>
            <th>telefono</th>
          </tr>
          <tr v-for="(post, index) in posts" :key="index">
              <td>{{ post.nombre }}</td>
              <td>{{ post.email }}</td>
              <td>{{ post.telefono }}</td>
          </tr>
        </table>
        <h5 class="alert alert-primary">Se encontraron {{posts.length}} usuarios.</h5>
      </div>
      <h4 v-else class="alert alert-danger text-center">No se encontraron usuarios</h4>

     </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-punto-2',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://628c112fa3fd714fd02c36b5.mockapi.io/usuarios',
        posts: []

      }
    },
    methods: {
      getPostsXHRcb() {
          const xhr = new XMLHttpRequest()
          xhr.open('get', this.url)

          xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
              let respuesta = JSON.parse(xhr.response)
              //console.log(respuesta)
              this.posts = respuesta
            }
            else {
              console.error('ERROR XHR cb (status)', xhr.status)
            }
          })

          xhr.addEventListener('error', e => {
              console.error('ERROR XHR cb (ajax)', e)
          })

          xhr.send()
      },

      async getPostsFetch() {
        try {
          let response = await fetch(this.url)
          let respuesta = await response.json()
          this.posts = respuesta
        }
        catch(error) {
          console.error('Error Fetch', error)
        }
      },

      async getPostsAxios() {           
        try {
          let { data } = await this.axios(this.url)
          this.posts = data
        }
        catch(error) {
          console.error('Error Axios', error)
        }   
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-punto-2 {

  }
  
  .jumbotron{
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#87e0fd+14,87e0fd+14,53cbf1+40,05abe0+100 */
    background: rgb(135,224,253); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(135,224,253,1) 14%, rgba(135,224,253,1) 14%, rgba(83,203,241,1) 40%, rgba(5,171,224,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(135,224,253,1) 14%,rgba(135,224,253,1) 14%,rgba(83,203,241,1) 40%,rgba(5,171,224,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(135,224,253,1) 14%,rgba(135,224,253,1) 14%,rgba(83,203,241,1) 40%,rgba(5,171,224,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#87e0fd', endColorstr='#05abe0',GradientType=0 ); /* IE6-9 */


  }
</style>
