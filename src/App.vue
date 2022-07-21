<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from "./components/navigation/TheNavigation.vue";
export default {
  components: { TheNavigation },
  provide() {
    return {
      addRecipe: this.addNewRecipe,
      recipies: this.recipiesList,
    };
  },
  data() {
    return {
      recipiesList: [
        {
          id: 1,
          name: "Food",
          ingredients: ["ing 1"],
          description:
            "long long long long long long text about how to cook this thing",
        },
        {
          id: 2,
          name: "Food 2",
          ingredients: ["ing 1"],
          description:
            "long long long long long long text about how to cook this thing",
        },
      ],
    };
  },
  methods: {
    addNewRecipe(newRecipe) {
      this.recipiesList.push(newRecipe);
    },
  },
};
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
