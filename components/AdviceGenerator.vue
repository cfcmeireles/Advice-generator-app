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

        if (!response || !response.data || !response.data._rawValue) {
          throw new Error("Invalid response structure");
        }

        const jsonData = response.data._rawValue;
        console.log("JSON Data:", jsonData);
        const data = JSON.parse(jsonData);

        if (data && data.slip) {
          this.adviceValue = data.slip.advice;
          this.adviceId = data.slip.id;
        } else {
          throw new Error("Invalid data structure received");
        }
      } catch (error) {
        console.error("Error fetching advice:", error);
        this.adviceValue = "Default Advice";
        this.adviceId = 0;
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
