<script setup>
import { ref } from 'vue'

const dialog = ref(false)
const snackbar = ref(false);
const snackbarMessage = ref('');
const navigationTab = ref('Passport') // Default selected tab

// Initialize an object to hold selected files per tab
const selectedFilesMap = ref({
  Passport: [],
  Visa: [],
  Insurances: [],
});

// Custom file size validation rule (Max: 5MB)
const fileSizeRule = (files) => {
  const maxFileSize = 5000000; // 5 MB
  for (const file of files) {
    if (file.size > maxFileSize) {
      return `File ${file.name} exceeds 5MB size limit.`;
    }
  }
  return true;
};

// Function to handle the upload event
const onAdvancedUpload = () => {
  if (selectedFilesMap.value[navigationTab.value].length) {
    // Log the files being uploaded (you can replace this with an actual upload process)
    console.log('Files uploaded:', selectedFilesMap.value[navigationTab.value]);

    // Show success message
    snackbarMessage.value = `${navigationTab.value} files uploaded successfully!`;
    snackbar.value = true;

    // Clear the selected files after uploading for the current tab
    selectedFilesMap.value[navigationTab.value] = [];
  }
};

// Function to handle the scan file action
const onScanFile = () => {
  // Simulate scanning logic (you can add actual scan logic here)
  console.log('Scanning a file...');

  // Show success message after scanning
  snackbarMessage.value = 'This feature is under development!';
  snackbar.value = true;
};

const tabItems = [
  'Passport',
  'Visa',
  'Insurances', // Updated tab name
]

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
              <div class="card">
                <!-- Snackbar for success toast message -->
                <VSnackbar v-model="snackbar" :timeout="1500" color="red">
                  {{ snackbarMessage }}
                </VSnackbar>

                <!-- File Upload -->
                <VFileInput
                  v-model="selectedFilesMap[navigationTab]" 
                  label="Select File(s)"
                  multiple
                  show-size
                  :rules="[fileSizeRule]"
                  accept="*/*"
                >
                  <template #selection="{ fileNames }">
                    <span>{{ fileNames.length ? fileNames.join(', ') : 'Drag and drop files here to upload.' }}</span>
                  </template>
                </VFileInput>

                <!-- Buttons for Upload and Scan -->
                <div class="button-group mt-3">
                  <VBtn
                    color="primary"
                    @click="onAdvancedUpload"
                    :disabled="!selectedFilesMap[navigationTab].length"
                  >
                    Upload Files
                  </VBtn>

                  <!-- New Scan Button -->
                  <VBtn
                    color="primary"
                    @click="onScanFile"
                    class="ml-2"
                  >
                    Scan a File
                  </VBtn>
                </div>
              </div>
            </VCardText>
          </VWindowItem>
        </VWindow>
      </VCard>
    </VCol>
  </VRow>
</template>


