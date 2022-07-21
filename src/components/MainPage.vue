<template>
  <ul>
    <base-card v-for="r in recipies" :key="r.id"
      ><recipe-item :item="r"></recipe-item
    ></base-card>
  </ul>
</template>

<script>
import BaseCard from "./base/BaseCard.vue";
import RecipeItem from "./ui/RecipeItem.vue";
export default {
  components: {
    BaseCard,
    RecipeItem,
  },
  inject: ["recipies"],
};
</script>