<template>
  <v-container grid-list-xs>
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="5"
      class="elevation-1"
    >
      <template #[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editUser(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteUser(item)"> mdi-delete </v-icon>
      </template>
      <template #no-data>
        <p>Nenhum registro encontrado</p>
      </template>
    </v-data-table>
    <dialog-modal v-model="dialogError" :title="dialogErrorMessage" :excluir="true" :fn-excluir="deleteConfirm" />
  </v-container>
</template>

<script>
import dialogModal from '~/components/dialogModal.vue'

export default {
  name: 'UserIndex',
  components: { dialogModal },
  data() {
    return {
      dialogError: false,
      dialogErrorMessage: '',
      user: {},

      headers: [
        {
          text: 'Nome do usuario',
          value: 'name',
        },
        {
          text: 'Email',
          value: 'email',
        },
        {
          text: 'Tipo',
          value: 'isAdmin',
        },
        { text: 'Actions', value: 'actions', sortable: false },
      ],

      users: [],
    }
  },
  async created() {
    const response = await this.$axios.get('users')
    this.users = response.data
  },
  methods: {
    editUser(user) {
      this.$router.push({ name: 'users-edit-id', params: { id: user.id } })
    },
    deleteUser(user) {
      this.dialogError = true
      this.dialogErrorMessage = `Deseja realmente excluir o usuario ${user.name}?`
      this.user = user;
    },
    deleteConfirm() {
      this.$axios.delete(`users/${this.user.id}`)
      this.users = this.users.filter((u) => u.id !== this.user.id)
      this.dialogError = false
    },
  },
}
</script>
