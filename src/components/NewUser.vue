<script setup>
import { ref } from 'vue'
import { useUsuariosStore } from '@/stores/usuarios.js'

//data(){

//}
const nombreUsuario = ref('')
const correoUsuario = ref('')
const usuariosStore = useUsuariosStore()

//callback
function handleAddUsuario() {
  usuariosStore.addUsuario(nombreUsuario.value, correoUsuario.value)
}
</script>
<template>
  <div>
    <h2>Agregar Usuario</h2>
    <form @submit.prevent="handleAddUsuario()">
      <div>
        <label for="nombre-usuario">Nombre de usuario</label>
        <input type="text" name="nombre-usuario" id="nombreUsuario" v-model="nombreUsuario" />
      </div>
      <div>
        <label for="correo-usuario">Dirección de correo</label>
        <input type="email" name="correo-usuario" id="correoUsuario" v-model="correoUsuario" />
      </div>
      <input type="submit" value="Agregar usuario" class="btn" />
    </form>
  </div>
</template>
<style scoped>
.btn {
  border: none;
  padding: 5px;
  border-radius: 15px;
  margin: 1rem 0;
}

input[type='text'],
input[type='email'] {
  border-radius: 15px;
  margin: 0.3rem 0 0.3rem 1rem;
  padding: 5px;
  border: 1px solid grey;
}
</style>
