import { defineStore } from "pinia";

export const useSnackBarStore = defineStore({
  id: "snackBar",
  state: () => ({
    isDisplay: false,
    text: "",
  }),
  actions: {
    show(text: string) {
      this.text = text;
      this.isDisplay = true;
      setTimeout(() => {
        this.hide();
      }, 2000);
    },
    hide() {
      this.text = "";
      this.isDisplay = false;
    },
  },
});
