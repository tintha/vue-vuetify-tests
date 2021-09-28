<template>
  <div class="home">
    <HelloWorld />
    <Amount :theamount.sync="theamount" />
    {{ theamount }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Amount from "../components/Amount.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Amount,
  },
  data: function() {
    return {
      theamount: 10,
    };
  },
};
</script>
