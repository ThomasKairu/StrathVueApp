<template>
    <v-container>
      <!-- TV Shows Header Section -->
      <v-row>
        <v-col>
          <v-img
            src="https://via.placeholder.com/1920x300" 
            alt="TV Shows Header Image"
            class="tvshows-header-image"
          >
            <v-container fill-height fluid class="tvshows-header-overlay">
              <v-row align="center" justify="center">
                <v-col class="text-center">
                  <h1 class="display-2 white--text mb-4">Explore Exciting TV Shows</h1>
                  <p class="subheading white--text">Discover a variety of TV shows across different genres.</p>
                  <v-btn color="red" dark large @click="exploreTVShows">Explore TV Shows</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
  
      <!-- Featured TV Shows Section -->
      <v-row>
        <v-col>
          <h2 class="headline">Featured TV Shows</h2>
          <v-carousel>
            <!-- Display featured TV shows with images and names -->
            <v-carousel-item v-for="(show, index) in featuredTVShows" :key="index">
              <v-img :src="show.imageUrl" aspect-ratio="16/9"></v-img>
              <v-carousel-item-title>{{ show.title }}</v-carousel-item-title>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
  
      <!-- Popular Genres Section -->
      <v-row>
        <v-col>
          <h2 class="headline">Popular Genres</h2>
          <v-row>
            <!-- Display popular genres with images and names -->
            <v-col v-for="(genre, index) in popularGenres" :key="index" cols="12" md="4">
              <v-card>
                <v-img :src="genre.imageUrl" aspect-ratio="16/9"></v-img>
                <v-card-title>{{ genre.name }}</v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  
      <!-- New Releases Section -->
      <v-row>
        <v-col>
          <h2 class="headline">New Releases</h2>
          <v-carousel>
            <!-- Display new TV show releases with images and names -->
            <v-carousel-item v-for="(release, index) in newReleases" :key="index">
              <v-img :src="release.imageUrl" aspect-ratio="16/9"></v-img>
              <v-carousel-item-title>{{ release.title }}</v-carousel-item-title>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'TVShows',
    data: () => ({
      featuredTVShows: [
        { title: 'TV Show 1', imageUrl: 'https://img.youtube.com/vi/ZTFDjaduHtY/maxresdefault.jpg' },
        { title: 'TV Show 2', imageUrl: 'https://img.youtube.com/vi/T81vO3_UJ2g/maxresdefault.jpg' },
        // Add more featured TV shows
      ],
      popularGenres: [
        { name: 'Drama', imageUrl: 'https://via.placeholder.com/300x169' },
        { name: 'Comedy', imageUrl: 'https://via.placeholder.com/300x169' },
        // Add more popular genres
      ],
      newReleases: [
        { title: 'New Release 1', imageUrl: 'https://via.placeholder.com/300x169' },
        { title: 'New Release 2', imageUrl: 'https://via.placeholder.com/300x169' },
        // Add more new releases
      ],
    }),
    methods: {
      exploreTVShows() {
        // Implement navigation or any other action when the "Explore TV Shows" button is clicked
      },
    },
  };
  </script>