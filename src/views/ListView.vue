<template>
  <div class="d-flex justify-center item-center w-100 flex-column">
    <div>
      <v-btn @click="onAdd">Add</v-btn>
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
          <td>
            {{ contractor.companyName }}
          </td>
          <td>{{ contractor.typeOfCompany }}</td>
          <td>
            <div class="d-flex justify-start">
              <v-btn
                class="mr-2"
                icon="mdi-square-edit-outline"
                size="small"
                @click="onEdit(contractor.id)"
              ></v-btn>
              <v-btn
                color="error"
                size="small"
                icon="mdi-delete"
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
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useContractorStore } from "../stores/contractor";
import { useSnackBarStore } from "../stores/snackBar";

const router = useRouter();
const store = useContractorStore();
const snackBar = useSnackBarStore();
await store.load();

const contractors = computed(() => store.contractors);

const onDelete = async (id: string) => {
  const isOk = confirm("Are you sure?");
  if (isOk) {
    await store.delete(id);
    snackBar.show("Deleted successfully");
  }
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
