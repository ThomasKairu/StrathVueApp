<template>
    <div id='aboutus'>
        <v-container>
            <v-layout column>
                <v-carousel>
                    <v-carousel-item src="./../../public/About 1.jpg" cover></v-carousel-item>

                    <v-carousel-item src="./../../public/about2.jpg" cover></v-carousel-item>

                    <v-carousel-item src="./../../public/about3.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-layout>
            <v-layout>
                <v-container>
                    <v-row align="center" justify="center">
                        <div class="d-flex align-center flex-column">
                            <div class="text-subtitle-2">With props</div>

                            <v-card width="800" title="Our Rich History and Legacy"
                                subtitle="Strathmore’s Journey Through Time"
                                text="At Strathmore University, our roots run deep. Founded in 1961, we emerged as a beacon of educational excellence in Kenya. Our journey began with a vision—to nurture leaders who would shape Africa’s future. From humble beginnings, we’ve grown into a vibrant institution, fostering innovation, ethics, and academic rigor. Our legacy is etched in the achievements of our alumni, who occupy influential positions across industries. Just as John Harvard’s legacy lives on at Harvard, Strathmore’s legacy thrives through the impact our graduates make in society."></v-card>

                            <div class="mt-4 text-subtitle-2">With slots</div>

                            <v-card width="800">
                                <template v-slot:title>
                                    Diverse Community and Impact
                                </template>

                                <template v-slot:subtitle>
                                    Unity in Diversity
                                </template>

                                <template v-slot:text>
                                    Step onto our campus, and you’ll encounter a tapestry of cultures. Strathmore celebrates
                                    diversity—students from various backgrounds converge here, creating a dynamic learning
                                    environment. Our global outlook extends beyond borders; our alumni network spans
                                    continents. Whether it’s a student-led cultural festival or collaborative research with
                                    international partners, we embrace diversity as our strength. As we engage with local
                                    communities, we embody the spirit of Ubuntu: “I am because we are.” Strathmore’s impact
                                    reverberates far beyond our gates.
                                </template>
                            </v-card>

                            <div class="mt-4 text-subtitle-2">With markup</div>

                            <v-card width="800">
                                <v-card-item>
                                    <v-card-title>Academic Excellence and Innovation:</v-card-title>

                                    <v-card-subtitle>Innovate, Elevate</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    Strathmore University: Where minds ignite and ideas flourish. Our academic ecosystem
                                    thrives on excellence. Our schools—be it business, law, or technology—nurture critical
                                    thinkers and problem solvers. Our faculty, akin to torchbearers, lead groundbreaking
                                    research. From fintech innovations to sustainable practices, we’re at the forefront.
                                    Strathmore isn’t just about degrees; it’s about shaping visionaries. As we tackle
                                    real-world challenges, we echo the words of Wangari Maathai: “In a gentle way, you can
                                    shake the world.” Strathmore shakes it with purpose.
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-row>
                </v-container>
            </v-layout>
        </v-container>
    </div>
</template>
<script setup>
const variants = ['elevated', 'flat', 'tonal', 'outlined']
</script>