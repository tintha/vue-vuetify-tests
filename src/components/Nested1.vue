<template>
  <div>
    <h1>This is nested 1</h1>
    <router-link exact to="/about/child1/grandchild1">Grandchild1</router-link>
    <router-view
      :text.sync="text"
      :textArray.sync="textArray"
      :obj.sync="obj"
    />
  </div>
</template>

<script>
export default {
  name: "Nested1",
  props: ["text", "textArray", "obj"],
};
</script>

<style></style>
