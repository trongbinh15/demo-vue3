import type { Contractor } from "@/models/contractor.model";
import { defineStore } from "pinia";
import axios from "axios";

const endpoint = "api/contractors";

export const useContractorStore = defineStore({
  id: "contractor",
  state: () => ({
    contractors: [] as Contractor[],
  }),
  actions: {
    async delete(id: string) {
      await axios.delete(`${endpoint}/${id}`);
      this.contractors = [...this.contractors.filter((x) => x.id !== id)];
    },
    async load() {
      const response = await axios.get(endpoint);
      this.contractors = response.data;
    },
  },
});
