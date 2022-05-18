<template>
  <v-form @submit="onSubmit">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="companyName"
            :error-messages="errors.companyName"
            label="Company Name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
            v-model="VATRegistrationsNumber"
            :counter="10"
            :error-messages="errors.VATRegistrationsNumber"
            label="VAT Registrations Number"
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
            required
          ></v-text-field>
          <div v-if="errors.typeOfCompany" class="text-caption error-msg">
            {{ errors.typeOfCompany }}
          </div>
        </v-col>

        <v-col cols="6">
          <v-text-field
            v-model="country"
            :counter="10"
            :error-messages="errors.country"
            label="Country"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <button type="submit">Submit</button>
  </v-form>
</template>
<script lang="ts" setup>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required().email(),
  country: yup.string().required(),
  companyName: yup.string().required("Company Name is required"),
  VATRegistrationsNumber: yup.string().max(10, "Maximum number digit is 10"),
  typeOfCompany: yup.string().required("Type of Company is required"),
  website: yup.string(),
});

const { errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const companyTypeDropdown = ["PLC", "LTD", "Partnership", "Sole Trader"];

const { value: companyName } = useField("companyName");
const { value: VATRegistrationsNumber } = useField("VATRegistrationsNumber");
const { value: typeOfCompany } = useField<string>("typeOfCompany");
const { value: website } = useField<string>("website");
const { value: email } = useField<string>("email");
const { value: country } = useField<string>("country");

const onSubmit = handleSubmit((values) => {
  console.log("values:", values);
});
</script>
<style>
.error-msg {
  color: rgb(176, 0, 32);
}
</style>
