<template>
  <div class="d-flex justify-center item-center w-100 flex-column">
    <h1 class="text-center">Contractor Management</h1>
    <div class="d-flex justify-end">
      <v-btn @click="onAdd" color="primary" data-cy="add-btn">Add</v-btn>
    </div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Company Name</th>
          <th class="text-left">Type</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contractor in contractors" :key="contractor.id">
          <td data-cy="company-row">
            {{ contractor.companyName }}
          </td>
          <td>{{ contractor.typeOfCompany }}</td>
          <td>
            <div class="d-flex justify-start">
              <v-btn
                class="mr-2"
                icon="mdi-square-edit-outline"
                size="small"
                data-cy="edit-btn"
                @click="onEdit(contractor.id)"
              ></v-btn>
              <v-btn
                color="error"
                size="small"
                icon="mdi-delete"
                data-cy="delete-btn"
                @click="onDelete(contractor.id)"
              ></v-btn>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<script lang="ts" setup>
import { useDialogStore } from "@/stores/dialog";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useContractorStore } from "../stores/contractor";
import { useSnackBarStore } from "../stores/snackBar";

const router = useRouter();
const store = useContractorStore();
const snackBar = useSnackBarStore();
const dialog = useDialogStore();
await store.load();

const { contractors } = storeToRefs(store);

const onDelete = async (id: string) => {
  dialog.confirm({
    title: "Delete Contractor",
    message: "Are you sure you want to delete this contractor?",
    onYes: async () => {
      await store.delete(id);
      snackBar.show("Deleted successfully");
    },
  });
};

const onAdd = () => {
  router.push({ name: "new" });
};

const onEdit = (id: string) => {
  router.push({
    name: "edit",
    params: {
      id,
    },
  });
};
</script>
