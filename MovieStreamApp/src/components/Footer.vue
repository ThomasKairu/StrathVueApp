<template>
    <v-footer class="d-flex flex-column" >
      <div class="bg-green d-flex w-100 align-center px-4">
        <strong class="white--text">Unlimited movies, TV shows, and more</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2"
          :icon="icon"
          variant="icon"
          size="36"
        ></v-btn>
      </div>
  
      <div class="px-4 py-2 text-center w-100" style="background-color: green;">
        <v-row class="white--text">
          <v-col>
            <p>&copy; {{ new Date().getFullYear() }} MovieStreamApp. All rights reserved.</p>
          </v-col>
          <v-col>
            <v-btn icon @click="scrollToTop">
              <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-footer>
  </template>
  
  <script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    }
  }
  </script>
  
  