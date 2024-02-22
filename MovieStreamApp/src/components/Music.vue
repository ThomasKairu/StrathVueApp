<template>
    <v-container>
        <v-row>
            <v-col>
                <v-img src="./../../public/music.jpg">
                    <v-container fill-height fluid>
                        <v-row align="center" justify="center">
                            <v-col class="text-center">
                                <h1 class="display-2">Discover Your Favorite Music</h1>
                                <p class="subheading">Explore a diverse collection of music genres and artists.</p>
                                <v-btn color="red" dark large @click="explore">Explore Music</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-img>
            </v-col>
        </v-row>


        <v-row>
            <v-col>
                <h2 class="headline">Featured Music</h2>
                <v-carousel>
                    <v-img aspect-ratio="16/9" cover src="https://img.youtube.com/vi/m1z_uSqTNLw/maxresdefault.jpg"></v-img>
                    <v-carousel-item v-for="(item, index) in featuredMusic" :key="index">
                        <v-img :src="item.imageUrl" aspect-ratio="16/9"></v-img>
                        <v-carousel-item-title>{{ item.title }}</v-carousel-item-title>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>


        <v-row>
            <v-col>
                <v-carousel>
                    <h2 class="headline">Popular Artists</h2>
                    <v-row>
                        <v-img :aspect-ratio="16 / 9" cover src="./../../public/popular.jpg"></v-img>
                        <v-col v-for="(artist, index) in popularArtists" :key="index" cols="12" md="4">
                            <v-card>
                                <v-img :src="artist.imageUrl" aspect-ratio="16/9"></v-img>
                                <v-card-title>{{ artist.name }}</v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-carousel>
            </v-col>
        </v-row>


        <v-row>
            <v-col>
                <h2 class="headline">New Releases</h2>
                <v-carousel>
                    <v-img aspect-ratio="16/9" cover src="https://img.youtube.com/vi/6w8be-QlHSk/maxresdefault.jpg"></v-img>
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
const variants = ['elevated', 'flat', 'tonal', 'outlined']
</script>
  
  