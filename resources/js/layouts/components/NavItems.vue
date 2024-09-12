<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue';
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue';
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavGroup
    :item="{
      title: 'Dashboards',
      badgeContent: '1',
      badgeClass: 'bg-light-primary text-primary',
      icon: 'bx-home-smile',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Analytics',
        to: '/dashboard',
      }"
    />
  </VerticalNavGroup>

  <!-- 👉 Apps & Pages -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Apps & Pages',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Register',
      icon: 'bx-user-plus',
      to: '/register',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Error',
      icon: 'bx-info-circle',
      to: '/no-existence',
    }"
  />
  <VerticalNavGroup
    :item="{
      title: 'Facility Reservation',
      badgeContent: '5',
      badgeClass: 'bg-light-primary text-primary',
      icon: 'bx-arch',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Facility Management',
        to: '/facility-management',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Reservation Requests',
        to: '/facility-request',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Calendar Management',
        to: '/facility-calendar',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Report and Analytics',
        to: '/facility-analytics',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Audit and History',
        to: '/facility-audit',
      }"
    />
  </VerticalNavGroup>
 
  <VerticalNavGroup
    :item="{
      title: 'Visitor Management',
      badgeContent: '4',
      badgeClass: 'bg-light-primary text-primary',
      icon: 'bx-user',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Visitor Registration',
        to: '/visitor-registration',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Approval and Access Control',
        to: '/visitor-approval',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Visitor Log and History',
        to: '/visitor-log',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Report and Analytics',
        to: '/visitor-analytics',
      }"
    />
  </VerticalNavGroup>

  <VerticalNavGroup
    :item="{
      title: 'Legal Management',
      badgeContent: '5',
      badgeClass: 'bg-light-primary text-primary',
      icon: 'bx-archive',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Facility Management',
        to: '/facility-management',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Reservation Requests',
        to: '/facility-request',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Calendar Management',
        to: '/facility-calendar',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Report and Analytics',
        to: '/facility-analytics',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Audit and History',
        to: '/facility-audit',
      }"
    />
  </VerticalNavGroup>

  <VerticalNavGroup
    :item="{
      title: 'Document Management',
      badgeContent: '5',
      badgeClass: 'bg-light-primary text-primary',
      icon: 'bx-folder',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Facility Management',
        to: '/facility-management',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Reservation Requests',
        to: '/facility-request',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Calendar Management',
        to: '/facility-calendar',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Report and Analytics',
        to: '/facility-analytics',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Audit and History',
        to: '/facility-audit',
      }"
    />
  </VerticalNavGroup>

  <!-- 👉 User Interface -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'User Interface',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Typography',
      icon: 'bx-text',
      to: '/typography',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Icons',
      icon: 'bx-package',
      to: '/icons',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Cards',
      icon: 'bx-credit-card',
      to: '/cards',
    }"
  />

  <!-- 👉 Forms & Tables -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Forms & Tables',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Form Layouts',
      icon: 'bx-layout',
      to: '/form-layouts',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Tables',
      icon: 'bx-table',
      to: '/tables',
    }"
  />

  <!-- 👉 Others -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Others',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Account Settings',
      icon: 'bx-user',
      to: '/account-settings',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Logout',
      icon: 'bx-log-out',
      to: '/login',
    }"
  />
</template>
