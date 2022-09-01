<template>
  <div class="postWrapper">
    <RouterLink :to="{ path: `/${post.id}` }">
      <div>
        <div><strong>My title strong </strong> {{ post.title }}</div>
        <div><strong>My info strong </strong> {{ post.body }}</div>
      </div>
    </RouterLink>
    <div>
      <CustomButton @click="$emit('remove', post)">Delete</CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from './Ui/CustomButton.vue';

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
  components: { CustomButton },
};
</script>

<style>
.postWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
