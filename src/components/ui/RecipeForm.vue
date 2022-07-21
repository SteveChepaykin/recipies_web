<template>
  <form @submit.prevent="saveForm">
    <input type="text" v-model="currentName"/>
    <input type="text" v-model="currentInput" />
    <button @click.prevent="addIngredient">add ingredient</button>
    <ul>
      <li v-for="i in ingredients" :key="i">{{ i }}</li>
    </ul>
    <input type="text" v-model="currentDescription"/>
    <button>Save Recipe</button>
  </form>
</template>

<script>
export default {
    inject: ['addRecipe'],
  data() {
    return {
      ingredients: [],
      currentInput: "",
      currentName: '',
      currentDescription: "",
    };
  },
  methods: {
    addIngredient() {
      this.ingredients.push(this.currentInput);
      this.currentInput = "";
    },
    saveForm() {
        this.addRecipe({
            id: this.currentName,
            name: this.currentName,
            ingredients: this.ingredients,
            description: this.currentDescription,
        })
    },
  },
  computed: {
    IdByIndex(item) {
      return this.ingredients.indexOf(item);
    },
  },
};
</script>