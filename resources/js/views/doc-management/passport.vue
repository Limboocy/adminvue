<!-- eslint-disable vue/component-api-style -->
<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        {
          align: 'start',
          key: 'name',
          sortable: false,
          title: 'Contract Type',
        },
        { key: 'Supplier', title: 'Suppliers' },
        { key: 'Vendor', title: 'Vendors' },
        { key: 'Client', title: 'Clients' },
        { key: 'DateModified', title: 'Date Modified' },
        { key: 'Uuid', title: 'UUID' },
      ],
      desserts: [
        {
          name: 'Gago ka ba boss?',
          Supplier: 159,
          Vendor: 6.0,
          Client: 24,
          DateModified: 4.0,
          Uuid: 1,
        },
        {
          name: 'Kupal ka ba boss?',
          Supplier: 237,
          Vendor: 9.0,
          Client: 37,
          DateModified: 4.3,
          Uuid: 1,
        },
        {
          name: 'Tanga ka ba boss?',
          Supplier: 262,
          Vendor: 16.0,
          Client: 23,
          DateModified: 6.0,
          Uuid: 7,
        },
        {
          name: 'Siraulo ka ba boss?',
          Supplier: 305,
          Vendor: 3.7,
          Client: 67,
          DateModified: 4.3,
          Uuid: 8,
        },
        {
          name: 'Pokpok ka ba boss?',
          Supplier: 356,
          Vendor: 16.0,
          Client: 49,
          DateModified: 3.9,
          Uuid: 16,
        },
        {
          name: 'Tarantado ka ba boss?',
          Supplier: 375,
          Vendor: 0.0,
          Client: 94,
          DateModified: 0.0,
          Uuid: 0,
        },
        {
          name: 'Kingina ka ba boss?',
          Supplier: 392,
          Vendor: 0.2,
          Client: 98,
          DateModified: 0,
          Uuid: 2,
        },
        {
          name: 'Puta ka ba boss?',
          Supplier: 408,
          Vendor: 3.2,
          Client: 87,
          DateModified: 6.5,
          Uuid: 45,
        },
        {
          name: 'Adik ka ba boss?',
          Supplier: 452,
          Vendor: 25.0,
          Client: 51,
          DateModified: 4.9,
          Uuid: 22,
        },
        {
          name: 'Manyak ka ba boss?',
          Supplier: 518,
          Vendor: 26.0,
          Client: 65,
          DateModified: 7,
          Uuid: 6,
        },
        {
          name: 'Siraulo ka ba boss?',
          Supplier: 305,
          Vendor: 3.7,
          Client: 67,
          DateModified: 4.3,
          Uuid: 8,
        },
        {
          name: 'Siraulo ka ba boss?',
          Supplier: 305,
          Vendor: 3.7,
          Client: 67,
          DateModified: 4.3,
          Uuid: 8,
        },
      ],
    }
  },
}
</script>

<template>
  <VCard
    title="Contract Document Storage"
    flat
  >
    <template #text>
      <VTextField
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      />
    </template>

    <VDataTable
      :headers="headers"
      :items="desserts"
      :search="search"
    />
  </VCard>
</template>