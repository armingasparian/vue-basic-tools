<template>
  <h3>New Post</h3>
  <form @submit.prevent="submit">
    <input
        v-model="newPost.title"
        placeholder="Title"
    />
    <br/>
    <textarea
        cols="50"
        rows="10"
        v-model="newPost.content"
    />
    <br/>
    <button>
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: 'NewPostCard',
  date() {
    return {
      newPost: {
        title: '',
        content: '',
      }
    }
  },

  methods: {
    submit() {
      this.$emit('createPost', {
        title: this.newPost.title,
        content: this.newPost.content,
      })
    }
  }
}
</script>

<style scoped>
input {
  width: 270px;
  height: 42px;
  border-radius: 8px;
  box-shadow: 0 1px 3px darkgrey;
  border: 1px solid silver;
  outline: none;
  padding: 0 10px;
  margin: 0 5px 20px 5px;
}

textarea {
  border-radius: 8px;
  box-shadow: 0 1px 3px darkgrey;
  border: 1px solid silver;
  outline: none;
  padding: 10px;
  margin: 0 5px 20px 5px;
}

button {
  padding: 8px 16px;
  border-radius: 8px;
  background: cadetblue;
  color: white;
  font-size: 16px;
  border: none;
  transition: 0.5s;
  cursor: pointer;
}

button:hover {
  background: cornflowerblue;
}
</style>