<template>

  <section class="src-components-nav-bar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <!-- Ruta al punto 1 -->
          <li class="nav-item">
            <router-link to="/formulario">
              <a class="nav-link" href="#">Punto 1</a>
            </router-link>
          </li>

          <!-- Ruta al punto 2 -->
          <li class="nav-item">
            <router-link to="/punto2">
              <a class="nav-link" href="#">Punto 2</a>
            </router-link>
          </li>
          
        </ul>
      </div>
    </nav>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-nav-bar {

  }
</style>
