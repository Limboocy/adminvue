<!-- eslint-disable import/no-unresolved -->
<script setup>
import Docudash from '@/views/doc-management/docudash.vue'
import CustomerStorage from '@/views/doc-management/CustomerStorage.vue'
import LegalStorage from '@/views/doc-management/LegalStorage.vue'
import ContractStorage from '@/views/doc-management/ContractStorage.vue'
import { ref } from 'vue'

const route = useRoute()
const activeTab = ref(route.params.tab)
const tabs = [
  {
    title: 'Customer Storage',
    icon: 'bx-user',
    tab: 'customer',
  },
  {
    title: 'Legal Storage',
    icon: 'bx-lock-open',
    tab: 'legal',
  },
  {
    title: 'Contract Storage',
    icon: 'bx-folder',
    tab: 'contract',
  },
]


</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      show-arrows
      class="v-tabs-pill"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>
    
 
    <VWindow
      v-model="activeTab"
      class="mt-5 disable-tab-transition"
    >
      <!-- customer -->
      <VWindowItem value="customer">
        <CustomerStorage />
      </VWindowItem>

      <!-- legal -->
      <VWindowItem value="legal">
        <LegalStorage />
      </VWindowItem>

      <!-- contract -->
      <VWindowItem value="contract">
        <ContractStorage />
      </VWindowItem>
    </VWindow>
  </div>


</template>
