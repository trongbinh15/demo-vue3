<template>
  <div class="d-flex justify-center item-center w-100 flex-column">
    <div>
      <v-btn @click="onAdd">Add</v-btn>
      <!-- <v-btn @click="showConfirm = true">Show</v-btn> -->
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
            {{ contractor.id }}
          </td>
          <td>{{ contractor.companyName }}</td>
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

  <!-- <v-dialog v-model="showConfirm" max-width="700px">
    <v-card>
      <v-card-title class="text-h5">Confirm</v-card-title>
      <v-card-text>Are you sure to delete this contractor?</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="showConfirm = false">
          Yes
        </v-btn>

        <v-btn color="green darken-1" text @click="showConfirm = false">
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog> -->
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useContractorStore } from "../stores/contractor";

const router = useRouter();
const store = useContractorStore();
await store.load();

// const showConfirm = ref(false);

const contractors = computed(() => store.contractors);

const onDelete = (id: string) => {
  store.delete(id);
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
