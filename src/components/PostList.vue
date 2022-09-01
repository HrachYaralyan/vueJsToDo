<template>
  <div v-if="posts.length > 0">
    <h3>List of Languages</h3>
    <div>
      <post-item
        class="miniBox"
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </div>
  </div>
  <h1 v-else style="color: red; font-size: 50px">
    list is empty please add post
  </h1>
</template>

<script>
import PostItem from './PostItem';
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.miniBox {
  margin: 20px;
  border: 5px solid rgb(27, 120, 83);
}
</style>
