<template>
  <div>
    <div>
      <h2 @click="fetchPosts">Open modal and create New post</h2>

      <div class="buttonsWrapper">
        <MyButton @click="openModal"> Open Modal </MyButton>
      </div>

      <MyDialog v-model:show="dialogVisble">
        <post-form @create="createPost"
      /></MyDialog>

      <post-list :posts="posts" @remove="removePost" v-if="!isLoading" />
      <div v-else style="color: red; margin-top: 50px">
        wite a second and i will get data ...
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import MyButton from '@/components/Ui/MyButton.vue';
import MyDialog from '@/components/Ui/MyDialog.vue';
// import { RouterView } from "vue-router";
import axios from 'axios';

export default {
  name: 'App',
  components: {
    PostForm,
    PostList,
    MyButton,
    MyDialog,
  },
  data() {
    return {
      posts: [],
      dialogVisble: false,
      title: '',
      body: '',
      isLoading: false,
      selectedSort: '88',
      sortOptions: [
        { value: 'title', name: 'Sort to Title' },
        { value: 'body', name: 'Sort to Info' },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisble = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    inputTitle(e) {
      console.log(e.target.value);
      this.title = e.target.value;
    },
    openModal() {
      this.dialogVisble = true;
    },
    async fetchPosts() {
      try {
        this.isLoading = true;
        setTimeout(async () => {
          const response = await axios
            .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then((res) => res.data);
          this.posts = response;
          console.log(response);
          this.isLoading = false;
        }, 1000);
      } catch (error) {
        console.log(error, 'error---');
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.but {
  margin: 20px;
}
.buttonsWrapper {
  display: flex;
  justify-content: center;
  column-gap: 20px;
}
</style>
