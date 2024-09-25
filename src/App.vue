<script>
import NewUser from '@/components/NewUser.vue'
import UserList from '@/components/UserList.vue'

export default {
  components: {
    NewUser,
    UserList
  }
}
</script>

<template>
  <h1>Usuarios cargados</h1>
  <UserList />
  <NewUser />
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 2rem 0;
}
div {
  margin: 1.5rem 0;
}
</style>
