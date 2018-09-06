<template>
  <div class="notification is-danger">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'notification',
  props: ['message'],
};
</script>
