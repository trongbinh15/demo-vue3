import { defineStore } from "pinia";

type ConfirmOption = {
  title: string;
  message: string;
  onYes: () => void;
};

export const useDialogStore = defineStore({
  id: "dialog",
  state: () => ({
    isDisplaying: false,
    title: "",
    message: "",
    onYes: undefined as unknown as () => void,
  }),
  actions: {
    show() {
      this.isDisplaying = true;
    },
    hide() {
      this.isDisplaying = false;
      this.title = "";
    },
    confirm(option: ConfirmOption) {
      this.isDisplaying = true;
      this.onYes = option.onYes;
      this.message = option.message;
      this.title = option.title;
    },
  },
});
