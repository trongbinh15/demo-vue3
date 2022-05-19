<template>
  <v-form @submit="onSubmit">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-center mb-4">
            <v-avatar size="200">
              <v-img src="https://i.pravatar.cc/300"></v-img>
            </v-avatar>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="companyName"
            :error-messages="errors.companyName"
            label="Company Name"
            data-cy="companyName"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
            v-model="VATRegistrationsNumber"
            :counter="10"
            :error-messages="errors.VATRegistrationsNumber"
            label="VAT Registrations Number"
            data-cy="VATRegistrationsNumber"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-select
            :items="companyTypeDropdown"
            v-model="typeOfCompany"
            label="Type of Company"
            data-cy="typeOfCompany"
            dense
          ></v-select>
          <div v-if="errors.typeOfCompany" class="text-caption error-msg">
            {{ errors.typeOfCompany }}
          </div>
        </v-col>

        <v-col cols="6">
          <v-text-field
            v-model="website"
            :counter="10"
            :error-messages="errors.website"
            label="Website"
            data-cy="website"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="email"
            :counter="10"
            :error-messages="errors.email"
            label="Email"
            data-cy="email"
            required
          ></v-text-field>
          <div v-if="errors.typeOfCompany" class="text-caption error-msg">
            {{ errors.typeOfCompany }}
          </div>
        </v-col>

        <v-col cols="6">
          <v-text-field
            v-model="address"
            :counter="10"
            :error-messages="errors.address"
            label="Address"
            data-cy="address"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn type="submit" color="primary" class="mr-2" data-cy="submit-btn"
            >Save</v-btn
          >
          <v-btn @click="onBack">Back to Home</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script lang="ts" setup>
import type { Contractor } from "@/models/contractor.model";
import { useContractorStore } from "@/stores/contractor";
import { useSnackBarStore } from "@/stores/snackBar";
import { useField, useForm } from "vee-validate";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import * as yup from "yup";

const router = useRouter();
const route = useRoute();

const snackBar = useSnackBarStore();

const contractorStore = useContractorStore();
let contractor = ref({} as Contractor);

const id = route.params.id as string;

const isEditMode = !!id;

if (isEditMode) {
  contractor.value = await contractorStore.getContractorById(id);
}

const initialValues = {
  companyName: contractor.value?.companyName || "",
  VATRegistrationsNumber: contractor.value?.VATRegistrationsNumber || "",
  typeOfCompany: contractor.value?.typeOfCompany || "",
  website: contractor.value?.website || "",
  email: contractor.value?.email || "",
  address: contractor.value?.address || "",
};

const schema = yup.object({
  email: yup.string().required().email(),
  address: yup.string().required(),
  companyName: yup.string().required("Company Name is required"),
  VATRegistrationsNumber: yup.string().max(10, "Maximum number digit is 10"),
  typeOfCompany: yup.string().required("Type of Company is required"),
  website: yup.string(),
});

const { errors, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: initialValues,
});

const companyTypeDropdown = ["PLC", "LTD", "Partnership", "Sole Trader"];

const { value: companyName } = useField<string>("companyName");
const { value: VATRegistrationsNumber } = useField<string>(
  "VATRegistrationsNumber"
);
const { value: typeOfCompany } = useField<string>("typeOfCompany");
const { value: website } = useField<string>("website");
const { value: email } = useField<string>("email");
const { value: address } = useField<string>("address");

const onSubmit = handleSubmit(async (values) => {
  if (isEditMode) {
    await contractorStore.updateContractor(id, values as Contractor);
    snackBar.show("Contractor updated successfully");
    onBack();
  } else {
    await contractorStore.createContractor(values as Contractor);
    snackBar.show("Contractor created successfully");
    onBack();
  }
});

const onBack = () => {
  router.push("/");
};
</script>
<style>
.error-msg {
  color: rgb(176, 0, 32);
}
</style>
