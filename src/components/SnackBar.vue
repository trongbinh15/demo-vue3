<template>
  <v-snackbar v-model="snackbar">
    {{ text }}

    <template v-slot:actions>
      <v-btn color="pink" variant="text" @click="store.hide()"> Close </v-btn>
    </template>
  </v-snackbar>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useSnackBarStore } from "../stores/snackBar";
const store = useSnackBarStore();

const snackbar = computed(() => store.isDisplay);

const text = computed(() => store.text);
</script>
