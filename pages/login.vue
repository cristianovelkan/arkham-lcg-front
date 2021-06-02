<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline"> Login </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="email" label="Email" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                label="password"
                type="password"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="login"> Login </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data: () => ({
    email: null,
    password: null,
  }),
  methods: {
    login() {
      this.$auth
        .loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then((response) => {
          this.$router.push({ path: '/' })
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error.response.data)
        })
    },
  },
}
</script>
