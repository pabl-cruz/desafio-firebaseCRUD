<script setup>
import { useUsuariosStore } from '@/stores/usuarios.js'
import { onMounted } from 'vue'
const usuariosStore = useUsuariosStore()

//obtener lista de usuarios al montar componente
onMounted(() => {
  usuariosStore.fetchUsuarios()
})

function handleDeleteUsuario(id) {
  usuariosStore.deleteUsuario(id)
}
</script>
<template>
  <h1>Listado de usuarios registrados en el sistema</h1>
  <ul>
    <li v-for="usuario in usuariosStore.usuarios" :key="usuario.id">
      {{ usuario.nombre }} - {{ usuario.correo }}
      <button @click="handleDeleteUsuario(usuario.id)">Eliminar</button>
    </li>
  </ul>
</template>
<style scoped></style>
