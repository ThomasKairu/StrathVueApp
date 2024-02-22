<template>
    <v-container>
        <v-row>
            <v-col>
                <v-img src="./../../public/movie1.jpg" alt="Movies Header Image" class="movies-header-image">
                    <v-container fill-height fluid class="movies-header-overlay">
                        <v-row align="center" justify="center">
                            <v-col class="text-center">
                                <h1 class="display-2 white--text mb-4">Explore the Latest Movies</h1>
                                <p class="subheading white--text">Discover a wide range of movies in various genres.</p>
                                <v-btn color="red" dark large @click="explore">Explore Movies</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h2 class="headline">Featured Movies</h2>
                <v-carousel>
                    <v-carousel-item>
                        <v-img aspect-ratio="16/9" cover src="./../../public/movie2.jpg"></v-img>
                        <v-carousel-item-title>Movie 1</v-carousel-item-title>
                    </v-carousel-item>


                    <v-carousel-item>
                        <v-img aspect-ratio="16/9" cover src="./../../public/movie3.jpg"></v-img>
                        <v-carousel-item-title>Movie 2</v-carousel-item-title>
                    </v-carousel-item>
                    <v-carousel-item v-for="(movie, index) in featuredMovies" :key="index">
                        <v-img aspect-ratio="16/9" cover :src="movie.imageUrl"></v-img>
                        <v-carousel-item-title>{{ movie.title }}</v-carousel-item-title>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <h2 class="headline">Popular Genres</h2>
                <v-row>
                    <!-- Display popular genres with images or icons -->
                    <v-col v-for="(genre, index) in popularGenres" :key="index" cols="12" md="4">
                        <v-card>
                            <v-img :src="genre.imageUrl" aspect-ratio="16/9"></v-img>
                            <v-card-title>{{ genre.name }}</v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    name: 'Movies',
    data: () => ({
        featuredMovies: [
            { title: 'Movie 1', imageUrl: 'https://img.youtube.com/vi/moHa5xIOZ18/maxresdefault.jpg' },
            { title: 'Movie 2', imageUrl: 'https://img.youtube.com/vi/AdiDg7wo_1Y/maxresdefault.jpg' },
            // Add more featured movies
        ],
        popularGenres: [
            { name: 'Force 2016 Full Movie John Abraham | Vidyut Jamwal | Genelia Dsouza | Commando 2 full Movie Force', imageUrl: 'https://img.youtube.com/vi/cx4Xwae513g/mqdefault.jpg' },
            { name: 'A AA 2 (Chal Mohan Ranga) Full Hindi Dubbed Movie With English Subtitles | Nithiin, Megha Akash',imageUrl: 'https://img.youtube.com/vi/JDzXR_mV_fI/mqdefault.jpg'},
            // Add more popular genres
        ],
    }),
    methods: {
        explore() {
            // Implement navigation or any other action when the "Explore Movies" button is clicked
        },
    },
};
</script>
  