<script>
import Homepage from "./Homepage.vue";
import AboutUs from "./Tvshows.vue";
import Alumni from "./Movies.vue";
import ContactUs from "./Music.vue";
</script>
<template>
    <v-app-bar color="green">
        <div>
            <v-btn to="/" color="white" dark >Home</v-btn>
        </div>
        <div>
            <v-btn to="/tvshows" color="white" dark >Tv Shows</v-btn>
        </div>
        <div>
            <v-btn to="/movies" color="white" dark >Movies</v-btn>
        </div>
        <div>
            <v-btn to="/music" color="white" dark >Music</v-btn>
        </div>
    </v-app-bar>
</template>