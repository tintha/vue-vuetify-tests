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
    <v-text-field
      label="title"
      v-model="title"
      @change="updateObj('title', title)"
    ></v-text-field>
    <v-text-field
      label="subtitle"
      v-model="subtitle"
      @change="updateObj('subtitle', subtitle)"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "Grandchild1",
  props: ["text", "textArray", "obj"],
  data: function() {
    return {
      newText: "",
      newArray: this.textArray,
      newObj: this.obj,
      title: "",
      subtitle: "",
    };
  },
  methods: {
    deleteText: function(t) {
      this.newArray = this.newArray.filter((x) => x !== t);
      this.$parent.$emit("update:textArray", this.newArray);
      console.log("delete", t, this.newArray);
    },
    updateObj: function(field, value) {
      this.newObj[field] = value;
      this.$parent.$emit("update:obj", this.newObj);
    },
  },
};
</script>

<style></style>
