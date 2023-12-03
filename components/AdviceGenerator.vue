<template>
  <BoxFrame v-if="!this.adviceValue">
    <template #title>Looking for some advice?</template>
    <template #description>Click below to get started!</template>
  </BoxFrame>
  <BoxFrame v-else>
    <template #title>ADVICE #{{ adviceId }}</template>
    <template #description>"{{ adviceValue }}"</template>
  </BoxFrame>
</template>

<script>
import BoxFrame from "../components/BoxFrame.vue";
export default {
  BoxFrame,
  data() {
    return {
      adviceValue: null,
      adviceId: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await useFetch("https://api.adviceslip.com/advice");
        const jsonData = response.data._rawValue;
        const data = JSON.parse(jsonData);

        this.adviceValue = data.slip.advice;
        this.adviceId = data.slip.id;
      } catch (error) {
        console.error("Error fetching advice:", error);
        this.adviceValue = "Looking for some advice?";
      }
    },
  },
  provide() {
    return {
      callFetchData: this.fetchData,
    };
  },
};
</script>
