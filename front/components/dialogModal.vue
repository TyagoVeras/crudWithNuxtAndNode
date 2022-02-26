<template>
  <v-dialog v-model="show" max-width="350" >
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn v-if="excluir" color="success" @click="fnExcluir">Excluir</v-btn>
        <v-btn color="green darken-1" text @click.stop="show = false">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    title: {
      default: '',
      type: String,
    },
    excluir: {
      default: false,
      type: Boolean,
    },
    fnExcluir: {
      default: null,
      type: Function,
    },
  },
  computed: {
    show: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
