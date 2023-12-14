<script setup>
import {ref,reactive,computed} from "vue"
import { useForm } from "vee-validate";

const form = reactive({
  email: "",
  password: "",
  terms: false,
});

const formSchema = computed(() => {
  return {
    email: "required|email",
    password: "required",
    terms: "required",
  };
});

const { validate, errors } = useForm({
  validationSchema: formSchema,
});

const scrollToValidation = (errorName) => {
  const el = document.querySelector(`[name="${errorName}"]`);
  if (el) {
    el.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};

const handleFormSubmit = async () => {
  const validator = await validate();

  const firstErrorFieldName = Object.keys(errors.value)[0];
  scrollToValidation(firstErrorFieldName);

  if (!validator.valid) {
    return;
  }

  alert("Submited");
};
</script>

<template>
  <div class="simple-form">
    <h1>Simple Form</h1>
    <form>
      <app-input
        inputType="text"
        inputName="email"
        placeholder="email"
        v-model="form.email"
      ></app-input
      ><app-input
        inputType="password"
        inputName="password"
        placeholder="password"
        v-model="form.password"
      ></app-input
      >
      
      <app-checkbox
        name="terms"
        inputId="terms"
        v-model="form.terms"
        :value="true"
        text="Terms check!"
      ></app-checkbox>
      <div class="h-[1000px] w-1/2 bg-gray-100 p-8 my-4">
        <p>Scroll to invalid validation check</p>
      </div>
    </form>
    <button @click.prevent="handleFormSubmit" type="submit">Submit</button>
    <pre>{{ form }}</pre>
  </div>
</template>
