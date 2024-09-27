<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import { ref } from 'vue'

const notifications = ref([]);
const notificationCount = ref(0); // Keep track of notification count

// Function to simulate adding a notification
const addNotification = () => {
  const newNotification = `New notification at ${new Date().toLocaleTimeString()}`;
  notifications.value.push(newNotification);
  notificationCount.value++;
};

// Function to clear notifications when clicked
const clearNotifications = () => {
  notifications.value = [];
  notificationCount.value = 0;
};
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
    bordered
  >
    <VAvatar
      class="cursor-pointer"
      color="primary"
      variant="tonal"
    >
      <VImg :src="avatar1" />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    color="primary"
                    variant="tonal"
                  >
                    <VImg :src="avatar1" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              John Doe
            </VListItemTitle>
            <VListItemSubtitle>Admin</VListItemSubtitle>
          </VListItem>
          <VDivider class="my-2" />

          <!-- 👉 Notifications -->
          <VListItem link @click="clearNotifications">
            <template #prepend>
              <VIcon class="me-2" icon="bx-bell" size="22" @click="addNotification" />
            </template>
            <VListItemTitle>Notifications ({{ notificationCount }})</VListItemTitle>
          </VListItem>

          <VDivider class="my-2" />

          <!-- Other Menu Items -->
          <VListItem link>
            <template #prepend>
              <VIcon class="me-2" icon="bx-user" size="22" />
            </template>
            <VListItemTitle>Profile</VListItemTitle>
          </VListItem>

          <VListItem link to="/account-settings">
            <template #prepend>
              <VIcon class="me-2" icon="bx-cog" size="22" />
            </template>
            <VListItemTitle>Settings</VListItemTitle>
          </VListItem>

          <VListItem link>
            <template #prepend>
              <VIcon class="me-2" icon="bx-dollar" size="22" />
            </template>
            <VListItemTitle>Pricing</VListItemTitle>
          </VListItem>

          <VListItem link>
            <template #prepend>
              <VIcon class="me-2" icon="bx-help-circle" size="22" />
            </template>
            <VListItemTitle>FAQ</VListItemTitle>
          </VListItem>

          <VDivider class="my-2" />

          <VListItem to="/login">
            <template #prepend>
              <VIcon class="me-2" icon="bx-log-out" size="22" />
            </template>
            <VListItemTitle>Logout</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
