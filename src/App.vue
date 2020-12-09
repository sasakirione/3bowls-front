<template>
  <v-app>
    <MyHeader></MyHeader>
    <v-main>
        <transition>
          <router-view/>
        </transition>
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

<style>
.v-enter-active{
  transition: opacity 1s;
}
.v-enter, .v-leave-to{
  opacity: 0;
}
</style>