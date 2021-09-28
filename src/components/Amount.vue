<template>
  <v-text-field
    label="amount"
    placeholder="0"
    v-model="price"
    @change="$emit('update:theamount', price)"
  ></v-text-field>
</template>

<script>
export default {
  name: "Amount",
  data: function() {
    return {
      price: 0,
    };
  },
};
</script>

<style></style>
