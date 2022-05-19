<template>
  <v-dialog max-width="700" v-model="isDisplaying">
    <slot></slot>
  </v-dialog>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useDialogStore } from "../stores/dialog";

const dialog = useDialogStore();
const { isDisplaying } = storeToRefs(dialog);
</script>
<style lang=""></style>
