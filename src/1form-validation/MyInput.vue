<template>
  <div class="label">
    <label :for="name">{{ name }}</label>
    <div class="error">{{ error }}</div>
  </div>
  <input
      :id="name"
      :value="value"
      @input="input"
      :type="type"
  >
</template>

<script>
export default {
  name: "MyInput",
  emits: ['update'],
  props: {
    name: {
      type: String,
      required: true
    },
    rules: {
      //min: number,
      //required: boolean,
      type: Object,
      default: {}
    },
    value: {
      type: String,
      required: true
    },
    error: {
      type: String,
    },
    type: {
      type: String,
      default: 'text'
    }
  },

  created() {
    this.$emit('update', {
      name: this.name.toLowerCase(),
      value: this.value,
      error: this.validate(this.value)
    })
  },

  methods: {
    input($event) {
      this.$emit('update', {
        name: this.name.toLowerCase(),
        value: $event.target.value,
        error: this.validate($event.target.value)
      })
    },
    validate(value) {
      if (this.rules.required && value.length === 0) {
        return 'Value is required.'
      }
      if (this.rules.min && value.length < this.rules.min) {
        return `The min length is ${this.rules.min}.`
      }
    },
  },
}
</script>

<style scoped>
.error {
  color: red;
}

.label {
  display: flex;
  justify-content: space-between;
}

input {
  background: none;
  color: black;
  border: 1px solid silver;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  font-size: 16px;
  width: 350px;
}
</style>