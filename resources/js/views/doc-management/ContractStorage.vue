<script setup>
import { ref } from 'vue'

const navigationTab = ref('Passport') // Default selected tab

const tabItems = [
  'Passport',
  'Visa',
  'Insurances', // Updated tab name
]

// Additional specific button labels for each tab
const buttonLabelMap = {
  Passport: 'Upload Passport',
  Visa: 'Upload Visa',
  Insurances: 'Upload Insurance', // Updated button label
}

const search = ref('')

// Define headers and datasets for each tab
const headersMap = {
  Passport: [
    {
      align: 'start',
      key: 'name',
      sortable: false,
      title: 'Passport File',
    },
    { key: 'owner', title: 'Owner' },
    { key: 'expiration', title: 'Expiration Date' },
    { key: 'date_modified', title: 'Date Modified' },
    { key: 'uuid', title: 'UUID' },
  ],
  Visa: [
    {
      align: 'start',
      key: 'name',
      sortable: false,
      title: 'Visa File',
    },
    { key: 'owner', title: 'Owner' },
    { key: 'expiration', title: 'Expiration Date' },
    { key: 'date_modified', title: 'Date Modified' },
    { key: 'uuid', title: 'UUID' },
  ],
  Insurances: [ // Updated header for Insurances
    {
      align: 'start',
      key: 'name',
      sortable: false,
      title: 'Insurance File',
    },
    { key: 'owner', title: 'Owner' },
    { key: 'expiration', title: 'Expiration Date' },
    { key: 'date_modified', title: 'Date Modified' },
    { key: 'uuid', title: 'UUID' },
  ],
}

// Define data for each tab
const itemsMap = {
  Passport: [
    {
      name: 'Frozen Yogurt',
      owner: 'John Doe',
      expiration: '2025-12-31',
      date_modified: '2024-09-24',
      uuid: '1234-5678-9012',
    },
    {
      name: 'Ice Cream Sandwich',
      owner: 'Jane Smith',
      expiration: '2026-01-15',
      date_modified: '2024-09-20',
      uuid: '2234-5678-9012',
    },
  ],
  Visa: [
    {
      name: 'Visa Application 1',
      owner: 'Alice Johnson',
      expiration: '2025-11-30',
      date_modified: '2024-09-15',
      uuid: '3234-5678-9012',
    },
    {
      name: 'Visa Application 2',
      owner: 'Bob Brown',
      expiration: '2026-02-28',
      date_modified: '2024-09-10',
      uuid: '4234-5678-9012',
    },
  ],
  Insurances: [ // Updated data for Insurances
    {
      name: 'Travel Insurance A',
      owner: 'Charlie Green',
      expiration: '2025-08-15',
      date_modified: '2024-09-05',
      uuid: '5234-5678-9012',
    },
    {
      name: 'Travel Insurance B',
      owner: 'Dana White',
      expiration: '2026-05-01',
      date_modified: '2024-09-01',
      uuid: '6234-5678-9012',
    },
    
  ],
}
</script>

<template>
  <VRow>
    <VCol md="12" cols="12">
      <VCard>
        <!-- Tabs Navigation -->
        <VTabs v-model="navigationTab">
          <VTab
            v-for="item in tabItems"
            :key="item"
            :value="item"
          >
            {{ item }}
          </VTab>
        </VTabs>

        <VDivider />

        <!-- Tabs Content -->
        <VWindow v-model="navigationTab">
          <VWindowItem
            v-for="item in tabItems"
            :key="item"
            :value="item"
          >
            <VCardItem>
              <VCardTitle>{{ item }} Details</VCardTitle>
            </VCardItem>

            <VCardText>
              <VTextField
                v-model="search"
                :label="`Search for ${item} Files`"
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                hide-details
                single-line
                class="mx-auto"
                style="max-width: 100%"
              />

              <VDataTable
                :headers="headersMap[item]"
                :items="itemsMap[item]"
                :search="search"
                item-value="name"
              />
            </VCardText>

            <VCardText>
              <VBtn :label="buttonLabelMap[item]">
                {{ buttonLabelMap[item] }}
              </VBtn>
            </VCardText>
          </VWindowItem>
        </VWindow>
      </VCard>
    </VCol>
  </VRow>
</template>
