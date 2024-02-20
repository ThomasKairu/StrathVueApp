<template>
    <div id = 'homepage'>
        <v-container>
                <v-layout column>
                    <v-carousel>
                        <v-carousel-item
                            src="./../../public/partn1.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="./../../public/partn2.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="./../../public/partn3.jpg"
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
                                title="Partnering for Impact"
                                subtitle="Strathmore University's Collaborative Journey"
                                text="At Strathmore University, we believe that true progress emerges from the synergy of collective action. That's why we actively cultivate partnerships with diverse organizations, unlocking the potential for transformative impact across various domains."
                                ></v-card>

                                <div class="mt-4 text-subtitle-2">With slots</div>

                                <v-card width="800">
                                <template v-slot:title>
                                    Benefits of Partnerships
                                </template>

                                <template v-slot:subtitle>
                                    Empowerment for Students
                                </template>

                                <template v-slot:text>
                                    Strathmore partnerships empower students, faculty, and the wider community in numerous ways:

Students: Gain invaluable work experience through internships, access cutting-edge research opportunities, and engage in international exchange programs.

Faculty: Collaborate with industry experts on real-world projects, secure research funding, and contribute to knowledge advancement.

Community: Benefit from joint initiatives addressing social and environmental challenges, promoting cultural exchange, and fostering sustainable development.
                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>

                                <v-card width="800">
                                <v-card-item>
                                    <v-card-title>Existing Partnerships</v-card-title>

                                    <v-card-subtitle>Students Wings to Fly</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    With a dynamic network spanning industry, government, NGOs, and international universities, Strathmore fosters impactful collaborations. Here are just a few examples:

Enel Foundation: Joint research on energy access and climate change informs policy and business practices.

IntraHealth: Collaborative programs train healthcare professionals, strengthening healthcare systems in Africa.

SAP Africa: The "SAP Dual Study Program" awards scholarships and equips students with industry-relevant skills.

I&M Bank: Provides scholarships for underprivileged students, ensuring access to quality education in finance and economics.
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