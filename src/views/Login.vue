<template>
  <div class="row">
    <v-card class="mx-auto mt-5 col-sm-4">
      <v-card-title>メールアドレスでログイン</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="メールアドレス" prepend-icon="mdi-account-circle" />
          <v-text-field v-bind:type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
                        v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        label="パスワード" @click:append="showPassword = !showPassword" />
          <v-card-actions>
            <v-btn class="info">ログイン</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto mt-5 col-sm-4">
      <v-card-title>Twitterでログイン</v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  date: () => ({
    showPassword : false
  })
}
</script>

<style scoped>
  h1, v-card-title {
    text-align: center;
  }
</style>