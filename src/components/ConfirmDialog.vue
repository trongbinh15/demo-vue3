<template>
  <DialogModal>
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>
      <v-card-text>{{ message }} </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="onCancel"
          data-cy="confirm-cancel-btn"
        >
          Cancel
        </v-btn>
        <v-btn color="blue darken-1" text @click="onOk" data-cy="confirm-ok-btn"
          >OK</v-btn
        >
      </v-card-actions>
    </v-card>
  </DialogModal>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useDialogStore } from "../stores/dialog";
import DialogModal from "./DialogModal.vue";

const dialog = useDialogStore();
const { title, message } = storeToRefs(dialog);

const onOk = async () => {
  await dialog.onYes();
  dialog.hide();
};

const onCancel = () => {
  dialog.hide();
};
</script>
