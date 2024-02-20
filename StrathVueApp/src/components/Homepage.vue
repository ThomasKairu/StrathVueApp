<template>
    <div id = 'homepage'>
        <v-container>
                <v-layout column>
                    <v-carousel>
                        <v-carousel-item
                            src="./public\Strath1.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="./public\strath3.jpg" 
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="./public\strath2.jpg"
                            cover
                        ></v-carousel-item>
                    </v-carousel>
                    </v-layout>
                    <v-layout>
                    <v-container>
                        <v-row align="center" justify="center">
                            <div class="d-flex align-center flex-column">
                                <div class="text-subtitle-2">With props</div>

                                <v-card
                                width="800"
                                title="Students Life"
                                subtitle="A Students Survival Guide"
                                text="This is Student life: a thrilling expedition through the untamed wilderness of academia. Exhilarating climbs to knowledge peaks, exhilarating discoveries in hidden valleys, and yes, the occasional encounter with a metaphorical lion (think: that looming exam). But fear not, intrepid explorer! This survival guide will equip you with the tools to navigate this verdant jungle and emerge triumphant.

First, pack your mental compass – a clear vision of your goals. Whether it's scaling the research summit or charting a course towards a specific career, knowing your destination will steer you through the undergrowth. Next, gather your intellectual provisions – effective study habits. Time management is your machete, organization your backpack, and active learning your trusty map. Remember, collaboration is key – form study groups, seek guidance from professors, and don't be afraid to ask for help. Finally, embrace the unexpected twists and turns. The academic jungle throws curveballs, but resilience is your survival blanket. So, take a deep breath, adjust your metaphorical backpack, and embark on your academic adventure! Remember, the greatest treasure awaits those who persevere."
                                ></v-card>

                                <div class="mt-4 text-subtitle-2">With slots</div>

                                <v-card width="800">
                                <template v-slot:title>
                                    Accommondation
                                </template>

                                <template v-slot:subtitle>
                                    Finding Your Den
                                </template>

                                <template v-slot:text>
                                    Now, let's talk about your home away from home: accommodation. Whether you're braving dorm life, navigating shared apartments, or venturing into solo living, choosing the right spot is crucial. Consider your budget, desired level of social interaction, and proximity to campus. Research options thoroughly, read reviews, and don't be afraid to negotiate, especially for shared housing. Remember, your haven should be a place to relax, recharge, and focus, so prioritize features that support your well-being. Whether it's a quiet corner for studying or a shared kitchen for bonding over meals, find a space that fuels your academic journey and fosters a sense of belonging. With a little planning and resourcefulness, you'll discover your own personal oasis within the jungle.
                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>

                                <v-card width="800">
                                <v-card-item>
                                    <v-card-title>Sports</v-card-title>

                                    <v-card-subtitle>Finding Your Sporting Spirit</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    Don't forget the power of play! While academics are critical, student life wouldn't be the same without its adrenaline rushes and team spirit. Explore the diverse sports offerings at your university, from traditional team sports like basketball or soccer to unique options like rock climbing or martial arts. Stepping outside your comfort zone and trying something new can not only keep you physically fit but also build crucial life skills like teamwork, communication, and resilience. Remember, competition isn't always about winning. It's about pushing your limits, learning from setbacks, and celebrating the camaraderie forged on the field, court, or track. So, lace up your shoes, grab your racket, or join a dance class – unleash your inner wildcat and discover the joy of movement in the academic jungle!
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