import { defineStore } from "pinia";

export const useDialogStore = defineStore({
  id: "dialog",
  state: () => ({
    isDisplaying: false,
  }),
  //   getters: {
  //     : (state) => state.isDisplaying: false,
  //   },
  actions: {
    show() {
      this.isDisplaying = true;
    },
    hide() {
      this.isDisplaying = false;
    },
  },
});
