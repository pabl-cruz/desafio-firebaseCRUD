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
  <h2>Agregar Usuario</h2>
  <form @submit.prevent="handleAddUsuario()">
    <label for="nombre-usuario">Nombre de usuario</label>
    <input type="text" name="nombre-usuario" id="nombreUsuario" v-model="nombreUsuario" />
    <label for="correo-usuario">Dirección de correo</label>
    <input type="email" name="correo-usuario" id="correoUsuario" v-model="correoUsuario" />
    <input type="submit" value="Agregar usuario" />
  </form>
</template>
