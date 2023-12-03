<template>
  <body class="bg-darkblue h-screen">
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- displays site properly based on user's device -->

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />

        <title>Frontend Mentor | Advice generator app</title>
      </head>
      <AdviceGenerator />

      <div class="attribution bg-darkblue text-lightcyan">
        Challenge by
        <a
          class="text-neongreen"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          >Frontend Mentor</a
        >. Coded by
        <a
          class="text-neongreen"
          href="https://github.com/cfcmeireles"
          target="_blank"
          >Carina Meireles</a
        >.
      </div>
    </div>
  </body>
</template>

<script>
import AdviceGenerator from "@/components/AdviceGenerator.vue";

export default {
  components: {
    AdviceGenerator,
  },
};
</script>


<style lang="scss" scoped>
.attribution {
  font-size: 11px;
  text-align: center;
}
</style>