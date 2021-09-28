<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col class="mb-5" cols="12">
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form>
          <v-text-field label="Title" v-model="myform.cardTitle"></v-text-field>
          <v-text-field
            label="Sub-Title"
            v-model="myform.cartSubTitle"
          ></v-text-field>
          <v-text-field label="Text" v-model="myform.cardText"></v-text-field>
          <v-btn @click.prevent="submitForm(myform)">Submit</v-btn>
        </v-form>
      </v-col>
      <v-col>
        <p v-if="error">{{ error | caps }}</p>
        <transition name="fade">
          <v-card v-if="submitted">
            <v-card-title>{{ myform.cardTitle }}</v-card-title>
            <v-card-subtitle>{{ myform.cartSubTitle }}</v-card-subtitle>
            <v-card-text>
              {{ myform.cardText }}
            </v-card-text>
            <v-card-actions
              ><v-icon @click.prevent="clearCard">mdi-close</v-icon
              ><v-icon>mdi-heart</v-icon></v-card-actions
            >
          </v-card>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    title: "Hello world!",
    error: "",
    submitted: false,
    myform: {
      cardText: "",
      cardTitle: "",
      cartSubTitle: "",
    },
  }),
  methods: {
    submitForm(data) {
      console.log(data);
      if (
        !this.myform.cardText ||
        !this.myform.cardTitle ||
        !this.myform.cartSubTitle
      ) {
        this.error = "All fields must be completed.";
      } else {
        this.error = null;
        this.submitted = true;
      }
    },
    clearCard() {
      this.myform = {
        cardText: "",
        cardTitle: "",
        cartSubTitle: "",
      };
      this.submitted = false;
    },
  },
  filters: {
    caps: function(value) {
      return value.toUpperCase();
    },
  },
};
</script>
<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s ease-in;
}
</style>
