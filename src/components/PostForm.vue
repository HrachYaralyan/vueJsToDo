<template>
  <form action="">
    <h3>Create new post</h3>
    <input
      type="text"
      v-model="post.title"
      class="inputAdd"
      placeholder="Post Title"
    />
    <input
      type="text"
      v-model="post.body"
      class="inputAdd"
      placeholder="Info about title"
    />
    <MyButton @click="addPost">Add Post</MyButton>
  </form>
</template>

<script>
import MyButton from './Ui/MyButton.vue';
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    addPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
  components: { MyButton },
};
</script>

<style>
.inputAdd {
  width: 95%;
  height: 50px;
  border: 2px solid green;
  margin: 5px;
}
button {
  width: 200px;
  height: 50px;
  font-size: 22px;
}
</style>
