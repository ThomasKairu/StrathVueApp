<template>
  <div id="events">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="./../../public/events1.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="./../../public/events2.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="./../../public/events3.jpg"
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
                title="Hackathons and Innovation Challenges"
                subtitle="Igniting Ingenuity"
                text="Strathmore University stands at the forefront of fostering innovation and technological advancement through its dynamic hackathons and innovation challenges. These events bring together brilliant minds—students, faculty, and industry experts—to collaboratively tackle real-world problems. Whether it’s coding marathons, cybersecurity challenges, or design sprints, Strathmore’s hackathons ignite creativity, teamwork, and practical problem-solving skills. Participants immerse themselves in intense, time-bound sessions, developing groundbreaking solutions that span domains like renewable energy, data science, and sustainable agriculture. These events not only sharpen technical prowess but also nurture an entrepreneurial spirit, encouraging participants to transform ideas into impactful innovations1."
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="800">
                <template v-slot:title> Cultural Festivals and Celebrations </template>

                <template v-slot:subtitle>  “Harmony in Diversity </template>

                <template v-slot:text> Strathmore University celebrates diversity, creativity, and cultural richness through vibrant cultural festivals. The annual “Strathmore at 60” celebrations, for instance, mark significant milestones in the institution’s journey. These festivities honor the vision of the university’s founder, St. Josemaria Escriva, and express gratitude to all who contributed to Strathmore’s success. From music performances and dance showcases to art exhibitions and traditional food stalls, these festivals create a sense of community. They bridge cultural gaps, foster understanding, and allow students to showcase their talents. As the campus buzzes with energy, students, alumni, and faculty come together to celebrate their shared heritage and envision a brighter future for Strathmore2. </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="800">
                <v-card-item>
                  <v-card-title>Health and Wellness Weeks</v-card-title>

                  <v-card-subtitle>Nurturing Well-Being</v-card-subtitle>
                </v-card-item>

                <v-card-text> Strathmore University recognizes that holistic well-being is essential for academic excellence. During Health and Wellness Weeks, the campus becomes a hub of activities promoting physical and mental health. The Strathmore University Medical Centre plays a pivotal role in delivering comprehensive care, ensuring accessibility, affordability, and patient-centered services. From nutrition programs to stress management workshops, students engage in evidence-based practices. The annual Wellness Fair, organized by the wellness docket, emphasizes personal well-being. It’s a time to prioritize self-care, raise awareness about mental health, and encourage healthy lifestyles. Through these initiatives, Strathmore fosters a campus environment where students thrive physically, emotionally, and socially34.
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
const variants = ["elevated", "flat", "tonal", "outlined"];
</script>
