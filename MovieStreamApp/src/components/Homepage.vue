<template>
    <v-container fluid>
        <!-- Hero Section -->
        <v-row>
            <v-col>
                <v-img src="./../../public/movieapp.jpg" 
                    alt="Hero Image"
                    class="hero-image"
                    >
                    <v-container fill-height fluid class="hero-overlay">
                        <v-row align="center" justify="center">
                            <v-col class="text-center">
                                <h1 class="display-2 white--text mb-4">Discover Endless Entertainment</h1>
                                <p class="subheading white--text">Explore a vast collection of movies, music, and TV shows.
                                </p>
                                <v-btn color="red" dark large @click="explore">Explore Now</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-img>
            </v-col>
        </v-row>

        <!-- Featured Content Section -->
        <v-row>
            <v-col>
                <h2 class="headline">Featured Movies</h2>
                <!-- Display a carousel or grid of featured movies -->
            </v-col>
        </v-row>

        <!-- Trending Section -->
        <v-row>
            <v-col>
                <h2 class="headline">Trending Now</h2>
                <!-- Display a carousel or grid of trending content -->
            </v-col>
        </v-row>

        <!-- Recently Added Section -->
        <v-row>
            <v-col>
                <h2 class="headline">Recently Added</h2>
                <!-- Display a carousel or grid of recently added content -->
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    name: 'Home',
    methods: {
        explore() {
            // Implement navigation or any other action when the "Explore Now" button is clicked
        },
    },
};
</script>
  
