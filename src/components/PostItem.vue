<template>
  <div class="postWrapper">
    <RouterLink :to="{ path: `/${post.id}` }" @click="handler">
      <div>
        <div><strong>My title strong </strong> {{ post.title }}</div>
        <div><strong>My info strong </strong> {{ post.body }}</div>
      </div>
    </RouterLink>
    <div>
      <MyButton @click="$emit('remove', post)">Delete</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from './Ui/MyButton.vue';
export default {
  data() {
    return {
      link: '/',
      linkId: this.post.id,
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: { MyButton },
};
</script>

<style>
.postWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
