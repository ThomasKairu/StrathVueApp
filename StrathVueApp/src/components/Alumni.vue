<template>
    <div id='alumni'>
        <v-container>
            <v-layout column>
                <v-carousel>
                    <v-carousel-item src="./../../public/alumni1.jpg" cover></v-carousel-item>

                    <v-carousel-item src="./../../public/alumni2.jpg" cover></v-carousel-item>

                    <v-carousel-item src="./../../public/alumni3.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-layout>
            <v-layout>
                <v-container>
                    <v-row align="center" justify="center">
                        <div class="d-flex align-center flex-column">
                            <div class="text-subtitle-2">With props</div>

                            <v-card width="800" title="Success Stories and Achievements" subtitle="Triumphs and Milestones"
                                text="Within the hallowed halls of Strathmore University, success stories come alive. Our alumni, like constellations in the academic sky, have left indelible marks on their chosen paths. Take Dr. Jane Muthoni, a Strathmore graduate who pioneered groundbreaking research in renewable energy. Her journey began here, fueled by late-night study sessions and unwavering determination. Today, her patents power villages across Africa.
And then there’s Samuel Kariuki, the serial entrepreneur. Armed with a Strathmore degree in business, he launched not one but three successful startups. His journey—from cramped dorm rooms to boardroom meetings—inspires budding entrepreneurs. Samuel’s impact extends beyond profits; he mentors young minds, paying forward the wisdom he gained.
Remember Wanjiku Kamau, the celebrated artist? Her canvas was once a Strathmore lecture hall. Now, her vibrant paintings adorn galleries worldwide. Her journey from sketchbooks to solo exhibitions reflects the fusion of creativity and discipline instilled here.
"></v-card>

                            <div class="mt-4 text-subtitle-2">With slots</div>

                            <v-card width="800">
                                <template v-slot:title>
                                    Alumni Networks and Connections
                                </template>

                                <template v-slot:subtitle>
                                    Bonds Beyond Graduation
                                </template>

                                <template v-slot:text>
                                    Strathmore’s alumni network is a lifeline. Graduates stay connected through regional
                                    chapters, virtual meetups, and annual reunions. Whether it’s a coffee chat in Nairobi or
                                    a LinkedIn message across continents, our network thrives. Brian Odhiambo, a Strathmore
                                    alumnus, landed his dream job through an alumni referral. The power of connections!
                                    Picture this: Dr. Amina Hussein, a seasoned lawyer, mentoring fresh graduates. She’s
                                    part of our mentorship program, guiding students through legal mazes. Alumni also
                                    organize career fairs, bridging the gap between academia and industry. When Grace Mwangi
                                    secured her internship at a top law firm, she knew her Strathmore family had her back.
                                </template>
                            </v-card>

                            <div class="mt-4 text-subtitle-2">With markup</div>

                            <v-card width="800">
                                <v-card-item>
                                    <v-card-title>Giving Back and Philanthropy</v-card-title>

                                    <v-card-subtitle>Impactful Generosity</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    Strathmore University, a beacon of excellence in education, has consistently
                                    demonstrated impactful generosity through its commitment to giving back and
                                    philanthropy. As alumni forge their paths beyond graduation, they remain deeply
                                    connected to the institution that shaped their futures. Their unwavering support,
                                    whether through scholarships, mentorship programs, or community initiatives, reflects a
                                    profound desire to uplift others. Strathmore's culture of benevolence extends beyond its
                                    walls, touching lives and fostering positive change. From funding educational
                                    opportunities for underprivileged youth to championing sustainable development projects,
                                    Strathmore's legacy of giving reverberates far and wide. Through their collective
                                    efforts, the Strathmore community continues to make a lasting difference, embodying the
                                    spirit of impactful generosity.
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