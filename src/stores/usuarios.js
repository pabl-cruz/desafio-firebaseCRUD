import { db } from '@/firebaseConfig.js'
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'

//definir store de firebase y tabla
export const useUsuariosStore = defineStore('usuarios', () => {
  //usuarios es un arreglo asignado a valor referencial de vue para que tenga propiedades reactivas
  const usuarios = ref([])

  //busqueda de usuarios
  async function fetchUsuarios() {
    try {
      const usuariosRef = collection(db, 'usuarios')

      onSnapshot(usuariosRef, (snapshot) => {
        usuarios.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      })
    } catch (err) {
      console.error(err)
    }
  }
  //agregar usuario
  async function addUsuario(nameData, mailData) {
    try {
      const usuariosRef = collection(db, 'usuarios')
      await addDoc(usuariosRef, { nombre: nameData, correo: mailData })
    } catch (err) {
      console.error(err)
    }
  }
  //elminar usuario segun id
  async function deleteUsuario(id) {
    try {
      const usuariosRef = doc(db, 'usuarios', id)
      await deleteDoc(usuariosRef)
    } catch (err) {
      console.error(err)
    }
  }

  return {
    usuarios,
    fetchUsuarios,
    addUsuario,
    deleteUsuario
  }
})
