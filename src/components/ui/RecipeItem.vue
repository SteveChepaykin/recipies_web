<template>
  <section>
    <h3>{{ item.name }}</h3>
    <h4>{{ item.description }}</h4>
  </section>
  <router-link :to="recipePage">see recipe</router-link>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    recipePage() {
        return {
            name: 'recipe',
            params: {
                recipeId: this.item.id,
            }
        }
    }
  }
};
</script>