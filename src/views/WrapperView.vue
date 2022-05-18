<template>
  <slot></slot>
  <Teleport to="dialog-content">
    <v-dialog v-model="dialog.isDisplaying">
      <slot></slot>
    </v-dialog>
  </Teleport>
</template>
<script lang="ts" setup>
import { useDialogStore } from "../stores/dialog";
const dialog = useDialogStore();
</script>
