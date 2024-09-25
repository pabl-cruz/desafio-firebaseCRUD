<script>
import { useUsuariosStore } from '@/stores/usuarios.js'

export default {
  data() {
    return {
      usuariosStore: useUsuariosStore()
    }
  },
  //obtener lista de usuarios al montar componente
  mounted() {
    this.usuariosStore.fetchUsuarios()
  },
  methods: {
    handleDeleteUsuario(id) {
      this.usuariosStore.deleteUsuario(id)
    }
  }
}
</script>
<template>
  <div>
    <h2>Listado de usuarios registrados en el sistema</h2>
    <ul>
      <li v-for="usuario in usuariosStore.usuarios" :key="usuario.id">
        {{ usuario.nombre }} - {{ usuario.correo }}
        <button @click="handleDeleteUsuario(usuario.id)" class="btn btn-delete">Eliminar</button>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.btn {
  border: none;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 15px;
  margin-left: 1rem;
}
.btn-delete {
  background-color: orangered;
}

.btn-delete:hover {
  opacity: 0.7;
}
</style>
