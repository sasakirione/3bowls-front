<template>
  <v-app-bar
      app
      color=#EB9486
      dark
  >
    <div class="d-flex align-center">
      <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo_transparent.png"
          transition="scale-transition"
          width="40"
      />

      <v-img
          alt="Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="../assets/text.png"
          width="100"
      />
    </div>
    <v-btn
        flat to="/"
        text
        transition="scale-transition"
    >
      <span class="mr-2">TOP</span>
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>
    <v-btn
        flat to="/search"
        text
        transition="scale-transition"
    >
      <span class="mr-2">探す</span>
      <v-icon>mdi-comment-search-outline</v-icon>
    </v-btn>
    <v-btn
        flat to="/recommend"
        text
        transition="scale-transition"
    >
      <span class="mr-2">薦める</span>
      <v-icon>mdi-comment-plus-outline</v-icon>
    </v-btn>
    <v-btn
        flat to="/about"
        text
        transition="scale-transition"
    >
      <span class="mr-2">このサイトについて</span>
      <v-icon>mdi-details</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
        flat to="/login"
        text
    >
      <span class="mr-2">Login</span>
      <v-icon>mdi-account-check-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
name: "MyHeader"
}
</script>

<style scoped>

</style>