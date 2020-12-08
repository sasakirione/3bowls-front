<template>
  <v-app>
    <MyHeader></MyHeader>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import MyHeader from "@/components/MyHeader";

export default {
  name: 'App',
  components: {MyHeader},
  comments: MyHeader ,

  data: () => ({
    //
  }),
};
</script>
