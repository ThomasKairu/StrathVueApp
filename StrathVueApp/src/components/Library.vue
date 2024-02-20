<template>
    <div id='homepage'>
        <v-container>
            <v-layout column>
                <v-carousel>
                    <v-carousel-item src="./../../public/library.jpg" cover></v-carousel-item>

                    <v-carousel-item src="./../../public/library2.jpg" cover></v-carousel-item>

                    <v-carousel-item src="./../../public/library3.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-layout>
            <v-layout>
                <v-container>
                    <v-row align="center" justify="center">
                        <div class="d-flex align-center flex-column">
                            <div class="text-subtitle-2">With props</div>

                            <v-card width="800" title="Library Search and Resources" subtitle="Empowering Minds"
                                text="At Strathmore University, the library provides a comprehensive array of search tools and resources to support students, faculty, and researchers. The Main Library, along with the James Gachui Library and the Anjarwalla & Khanna Law Library, offers study spaces, access to online resources, and assistance in finding and requesting materials. The library catalog allows users to explore the collection, while the SU+ Digital Repository houses scholarly works, including honors theses. Whether you’re seeking research assistance, subject guides, or online chat support, Strathmore’s library ensures that you have the tools you need for successful academic exploration."></v-card>

                            <div class="mt-4 text-subtitle-2">With slots</div>

                            <v-card width="800">
                                <template v-slot:title>
                                    Library Services and Support
                                </template>

                                <template v-slot:subtitle>
                                    Your Key to Academic Success
                                </template>

                                <template v-slot:text>
                                    Strathmore University’s commitment to student success extends beyond resources. The
                                    library provides a range of services to enhance the academic experience. From
                                    personalized research consultations to faculty support, students can access assistance
                                    tailored to their needs. The library’s operating hours accommodate busy schedules, with
                                    the Main Library open from 8:00 AM to 9:00 PM on weekdays and the A&K Law Library
                                    offering extended hours. Whether you’re borrowing materials, seeking guidance, or
                                    exploring subject-specific resources, Strathmore’s library services are designed to
                                    foster learning and scholarship.
                                </template>
                            </v-card>

                            <div class="mt-4 text-subtitle-2">With markup</div>

                            <v-card width="800">
                                <v-card-item>
                                    <v-card-title>Collections and Special Features</v-card-title>

                                    <v-card-subtitle>Beyond Books</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    Strathmore University’s library is not only a repository of knowledge but also a curator
                                    of unique collections. The Strathmore Heritage Collection stands out, preserving
                                    historical and cultural artifacts. Additionally, the university hosts special events and
                                    initiatives, such as the Care for People awareness campaign, which promotes acceptance
                                    and understanding of neurodivergent individuals. Strathmore’s commitment to diversity
                                    and excellence is reflected not only in its academic programs but also in its special
                                    features and community-focused endeavors.
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