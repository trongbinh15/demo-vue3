<template>
  <v-app>
    <v-main>
      <Suspense>
        <div class="pa-6">
          <router-view />
        </div>
        <template #fallback> Loading... </template>
      </Suspense>
      <DialogModal />
      <SnackBar />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import DialogModal from "./components/DialogModal.vue";
import SnackBar from "./components/SnackBar.vue";
</script>
