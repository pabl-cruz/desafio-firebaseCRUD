import { db } from '@/firebaseConfig.js'
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsuariosStore = defineStore('usuarios', () => {
  const usuarios = ref([])

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

  async function addUsuario(nameData, mailData) {
    try {
      const usuariosRef = collection(db, 'usuarios')
      await addDoc(usuariosRef, { nombre: nameData, correo: mailData })
    } catch (err) {
      console.error(err)
    }
  }

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
