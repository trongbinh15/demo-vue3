<template>
  <v-app>
    <v-main>
      <Suspense>
        <router-view />
        <template #fallback> Loading... </template>
      </Suspense>
      <DialogModal />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import DialogModal from "./components/DialogModal.vue";
</script>
