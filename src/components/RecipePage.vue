<template>
  <section>
    <h2>{{ name }}</h2>
    <h3>{{ description }}</h3>
    <ul>
        <li v-for="i in ingredients" :key="i">{{ i }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  inject: ["recipies"],
  props: ["recipeId"],
  data() {
    return {
      name: "",
      ingredients: [],
      description: "",
    };
  },
  methods: {
    onLoadedPage(id) {
      const item = this.recipies.find((i) => i.id == id);
      if (item != null) {
        this.name = item.name;
        this.ingredients = item.ingredients;
        this.description = item.description;
      }
    },
  },
  created() {
    this.onLoadedPage(this.recipeId);
  },
};
</script>