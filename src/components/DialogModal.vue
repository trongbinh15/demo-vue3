<template>
  <v-dialog max-width="290" v-model="dialog.isDisplaying">
    <slot></slot>
  </v-dialog>
</template>
<script lang="ts" setup>
import { useDialogStore } from "../stores/dialog";
const dialog = useDialogStore();
</script>
<style lang=""></style>
