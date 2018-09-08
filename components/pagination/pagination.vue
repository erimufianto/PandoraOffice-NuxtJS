<template>
  <nav aria-label="Page navigation example" class="pagination_area">
    <ul class="pagination">
      <li v-for="n in totalPage" :key=n>
        <a @click="pageClicked(n)"
          class="page-link">
          {{n}}
        </a>        
      </li>
  </ul>
</nav>
</template>

<script>
export default {
  props: ["perPage", "page", "totalCount", "totalPage"],
  methods: {
    pageClicked(page) {
      this.$emit("PAGE_CLICKED", page);
    }
  },
  mounted() {
    console.log(this.totalPage*1);
  }
};
</script>