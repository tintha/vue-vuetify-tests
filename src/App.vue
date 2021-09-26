<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
      >
        <v-list>
          <v-list-item v-for="link in links" :key="link">
            <v-list-item-action>
              <v-list-item-icon>x</v-list-item-icon>
            </v-list-item-action>
            <v-list-item-title>
              {{ link }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <hello-world />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
    drawer: false,
    links: ["Dashboard", "About", "Contact"],
  }),
};
</script>
