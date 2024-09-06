<script setup>
import logo from '@images/logo.svg?raw';
import authV1BottomShape from '@images/svg/auth-v1-bottom-shape.svg?url';
import authV1TopShape from '@images/svg/auth-v1-top-shape.svg?url';
import { VDialog } from 'vuetify/components';

const form = ref({
  firstName: '',
  lastName: '',
  username: '',
  mobile: '',
  email: '',
  password: '',
  privacyPolicies: false,
})

const isPasswordVisible = ref(false)
const showModal = ref(true); //
</script>

<template>

<VDialog v-model="showModal" max-width="1000px" persistent>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <div class="position-relative my-sm-16">
      <!-- 👉 Top shape -->
      <VImg
        :src="authV1TopShape"
        class="text-primary auth-v1-top-shape d-none d-sm-block"
      />

      <!-- 👉 Bottom shape -->
      <VImg
        :src="authV1BottomShape"
        class="text-primary auth-v1-bottom-shape d-none d-sm-block"
      />

      <!-- 👉 Auth card -->
      <VCard
        class="auth-card"
        max-width="460"
        :class="$vuetify.display.smAndUp ? 'pa-6' : 'pa-0'"
      >
        <VCardItem class="justify-center">
          <RouterLink
            to="/"
            class="app-logo"
          >
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="d-flex"
              v-html="logo"
            />
        
          </RouterLink>
        </VCardItem>

        <VCardText>
          <h4 class="text-h4 mb-1">
            Adventure starts here 
          </h4>
          <p class="mb-0">
            Create your employee account!
          </p>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="$router.push('/')">
            <VRow>
              <!-- First Name -->
              <VCol cols="12" md="6">
                <VTextField
                  v-model="firstName"
                  prepend-inner-icon="bx-user"
                  label="First Name"
                  placeholder="Enter First Name"
                />
              </VCol>
              <!-- Last Name -->
               <VCol cols="12" md="6">
                  <VTextField
                  v-model="lastName"
                  prepend-inner-icon="bx-user"
                  label="Last Name"
                  placeholder="Enter Last Name"
                 />
               </VCol>
              <!-- Username -->
              <VCol cols="12" md="6">
                <VTextField
                  v-model="form.username"
                  prepend-inner-icon="bx-user"
                  autofocus
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <VCol cols="12" md="6">
                <VTextField
                  v-model="mobile"
                  prepend-inner-icon="bx-mobile"
                  label="Mobile"
                  placeholder="(+63) 123 456 7890"
                  type="number"
                />
              </VCol>
              <!-- email -->
              <VCol cols="12" >
                <VTextField
                  v-model="form.email"
                  prepend-inner-icon="bx-envelope"
                  label="Email"
                  type="email"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="form.password"
                  prepend-inner-icon="bx-lock"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div class="d-flex align-center my-6">
                  <VCheckbox
                    id="privacy-policy"
                    v-model="form.privacyPolicies"
                    inline
                  />
                  <VLabel
                    for="privacy-policy"
                    style="opacity: 1;"
                  >
                    <span class="me-1 text-high-emphasis">I agree to</span>
                    <a
                      href="javascript:void(0)"
                      class="text-primary"
                    >privacy policy & terms</a>
                  </VLabel>
                </div>

                <VBtn
                  block
                  type="submit"
                >
                  Sign up
                </VBtn>
              </VCol>

              <!-- login instead -->
              <VCol
                cols="12"
                class="text-center text-base"
              >
                <span>Already have an account?</span>
                <RouterLink
                  class="text-primary ms-1"
                  to="/login"
                >
                  Sign in instead
                </RouterLink>
              </VCol>

              <VCol
                cols="12"
                class="d-flex align-center"
              >
               
              </VCol>

             
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </div>
  </div>
</VDialog>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>
