<template>
  <heading-title title="#1 Project => Form Validation"/>
  <form @submit.prevent="submit">
    <my-input
        name="Username"
        :rules="{
          required: true,
          min: 5
        }"
        :value="username.value"
        :error="username.error"
        @update="update"
    />
    <my-input
        name="Password"
        :rules="{
          required: true,
          min: 10
        }"
        :value="password.value"
        :error="password.error"
        @update="update"
        type="password"
    />
    <my-button
        background="blueviolet"
        color="white"
        :disabled="!valid"
    />
  </form>
</template>

<script>
import MyButton from "./MyButton.vue"
import MyInput from "./MyInput.vue";
import HeadingTitle from "@/components/HeadingTitle.vue";

export default {
  name: "FormValidation",
  components: {
    HeadingTitle,
    MyInput,
    MyButton,
  },
  data() {
    return {
      username: {
        value: 'user',
        error: ''
      },
      password: {
        value: 'pass',
        error: ''
      }
    }
  },
  computed: {
    valid() {
      return (
          !this.username.error && !this.password.error
      )
    }
  },
  methods: {
    update({name, value, error}) {
      this[name].value = value
      this[name].error = error
    },
    submit() {
      console.log('Event')
    }
  }
}
</script>

<style scoped>
  form {
    padding: 20px;
    border: 1px dashed silver;
    width: fit-content;
    border-radius: 8px;
    margin-bottom: 20px;
  }
</style>