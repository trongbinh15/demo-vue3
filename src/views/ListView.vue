<template>
  <div class="d-flex justify-center item-center w-100 flex-column">
    <div c>
      <v-btn>Add</v-btn>
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
          <td>{{ contractor.title }}</td>
          <td>
            <div class="d-flex justify-start">
              <v-btn
                class="mr-2"
                icon="mdi-square-edit-outline"
                size="small"
              ></v-btn>
              <v-btn color="error" size="small" icon="mdi-delete"></v-btn>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<script lang="ts" setup>
import axios from "axios";
import { computed } from "vue";

const response = await axios.get("api/contractors");
const contractors = computed(() => response.data);
</script>
