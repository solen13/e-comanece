<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  inputType: {
    type: String,
    default: "text",
  },

  inputName: {
    type: String,
    default: "text",
  },

  placeholder: {
    type: String,
    default: "text",
  },

  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};

const { errorMessage } = useField(props.inputName);
</script>

<template >
  <div class="app-input">
    <input
      :type="inputType"
      :name="inputName"
      :id="inputName"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
    />
    <div class="error">{{ errorMessage }}</div>
  </div>
</template>

<style lang="scss" scoped>
.app-input {
  @apply my-3;

  input,
  textarea {
    @apply bg-gray-100 py-3 px-4 rounded-md border border-gray-200;
  }

  .error {
    @apply text-textRed text-xs;
  }
}
</style>
