<template>
  <v-app>
    <v-main>
      <Suspense>
        <div class="pa-6">
          <router-view />
        </div>
        <template #fallback> Loading... </template>
      </Suspense>
      <ConfirmDialog />
      <SnackBar />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import SnackBar from "./components/SnackBar.vue";
import ConfirmDialog from "./components/ConfirmDialog.vue";
</script>
