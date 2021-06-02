<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-btn v-for="link in links" :key="link.id" text nuxt :to="link.route">
          {{ link.name }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Cards', route: '/' },
      { name: 'Rules', route: '/rules' },
      { name: 'FAQs', route: '/faqs' },
      { name: 'Login', route: '/login' },
    ],
  }),
}
</script>
