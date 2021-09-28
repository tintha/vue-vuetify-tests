<template>
  <div>
    <h1>This is grand child 1</h1>
    <v-text-field
      label="enter new text"
      v-model="newText"
      @keyup="$parent.$emit('update:text', newText)"
    ></v-text-field>
    <p v-for="t in newArray" :key="t">
      {{ t }}<v-icon @click="deleteText(t)">mdi-close</v-icon>
    </p>
  </div>
</template>

<script>
export default {
  name: "Grandchild1",
  props: ["text", "textArray"],
  data: function() {
    return {
      newText: "",
      newArray: this.textArray,
    };
  },
  methods: {
    deleteText: function(t) {
      this.newArray = this.newArray.filter((x) => x !== t);
      this.$parent.$emit("update:textArray", this.newArray);
      console.log("delete", t, this.newArray);
    },
  },
};
</script>

<style></style>
