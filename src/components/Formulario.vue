<template>

  <section class="src-components-formulario">
    <div class="jumbotron">
      <h2 class="text center">Formulario</h2>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">
    
        <!-- --------------------- -->
        <!--     Campo nombre      -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            name="nombre" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre" 
            required 
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            no-espacios
          />

          <!-- Mensajes de validación -->
          <field-messages name="nombre" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Mínimo {{nombreMinLength}} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Máximo {{nombreMaxLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>

        <!-- --------------------- -->
        <!--      Campo edad       -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="edad">Edad</label>
          <input 
            type="number"
            id="edad"
            name="edad" 
            class="form-control"
            autocomplete="off"
            v-model.number="formData.edad" 
            required 
            :min="edadMin"
            :max="edadMax"
          />

          <!-- Mensajes de validación -->
          <field-messages name="edad" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima permitida es de {{edadMin}} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima permitida es de {{edadMax}} años.
            </div>
          </field-messages>
        </validate>
        <br>

        <!-- --------------------- -->
        <!--    Campo email     -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="email">email</label>
          <input 
            type="email"
            id="email"
            name="email" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.email" 
            required 
          />

          <!-- Mensajes de validación -->
          <field-messages name="email" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>
        <br>

        <!-- Botón de envío -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid">Enviar</button>
      </vue-form>      

      <h4 v-if="!personas.length" class="alert alert-warning">
          No se encontraron registros
      </h4>

      <div class="table-responsive" v-else>
        <table class="table table-dark">
          <tr>
            <th>Index</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Mail</th>
          </tr>
          <tr v-for="(persona,index) in personas" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ persona.nombre }}</td>
            <td>{{ persona.edad }}</td>
            <td>{{ persona.email }}</td>
          </tr>
        </table>
      </div>
      
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        nombreMinLength : 5,
        nombreMaxLength : 15,
        edadMin: 18,
        edadMax: 120,
        personas: []
      }
    },
    methods: {
      getInicialData() {
        return {
          nombre: '',
          edad: '',
          email: ''
        }
      },
      enviar() {
        this.agregarPersona()
        this.formData = this.getInicialData() 
        this.formState._reset()
      },
      agregarPersona(){
        this.personas.push({...this.formData})
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }

  .jumbotron {
      background-color: teal;
      color: white;
  }

  hr {
      background-color: #bbb;
  }  

  pre {
    color: white;
  }
</style>
