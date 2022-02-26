<template>
  <v-card width="600" class="mx-auto mt-15">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Novo usuario</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <v-text-field v-model="userName" name="userName" label="Nome do usuario"></v-text-field>
      <v-text-field v-model="userEmail" name="userEmail" label="Email"></v-text-field>
      <v-text-field v-model="userPassword" name="userPassword" label="Senha" type="password"></v-text-field>
      <v-text-field v-model="userPasswordConfirmation" name="userPasswordConfirmation" label="Confirmar senha" type="password"></v-text-field>
      <v-radio-group v-model="userType" row>
        <v-radio label="Administrador" value="true"></v-radio>
        <v-radio label="Usuario comum" value="false"></v-radio>
      </v-radio-group>
    </v-card-text>
    <v-card-actions>
      <v-btn to="/users">Voltar</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="createNewUser">Cadastrar</v-btn>
      <dialog-modal v-model="dialogError" :title="dialogErrorMessage"/>
    </v-card-actions>
  </v-card>
</template>

<script>
import dialogModal from '~/components/dialogModal.vue';
export default {
  name: 'AddUser',
  components: { dialogModal },
  data(){
    return{
      userName:'',
      userEmail:'',
      userPassword:'',
      userPasswordConfirmation:'',
      userType:'',
      dialogError: false,
      dialogErrorMessage:''
    }
  },
  methods:{
    async createNewUser(){
      if(this.userPassword === '' || this.userPasswordConfirmation === '' || this.userName === '' || this.userEmail === ''){
        this.dialogError = true;
        this.dialogErrorMessage = 'Preencha todos os campos';
        return;
      }
      if(this.userPassword !== this.userPasswordConfirmation){
        this.dialogError = true;
        this.dialogErrorMessage = 'Senhas não conferem';
        return;
      }
      await this.$axios.post('users',{
        name:this.userName,
        email:this.userEmail,
        password:this.userPassword,
        isAdmin:this.userType,
      });
      this.$router.push('/users');
    }
  }
}
</script>
