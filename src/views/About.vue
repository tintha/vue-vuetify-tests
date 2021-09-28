<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-tabs>
      <v-tab v-for="tab in tabs" :key="tab" link exact :to="'/about/' + tab">
        {{ tab }}
      </v-tab>
    </v-tabs>
    <p>Grand parent {{ text }}</p>
    <p v-for="t in textArray" :key="t">{{ t }}</p>
    <p>{{ obj.title }}, {{ obj.subtitle }}</p>
    <router-view
      :key="$route.path"
      :text.sync="text"
      :textArray.sync="textArray"
      :obj.sync="obj"
    />
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  data: function() {
    return {
      tabs: ["child1", "child2", "child3"],
      text: "hallo",
      textArray: ["da", "bin", "ich"],
      obj: {
        title: "title",
        subtitle: "subtile",
      },
    };
  },
};
</script>
