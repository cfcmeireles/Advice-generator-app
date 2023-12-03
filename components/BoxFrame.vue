<template>
  <div class="flex flex-col items-center font-manrope justify-center h-screen">
    <div
      class="bg-darkgrayishblue text-center w-11/12 rounded-xl md:w-3/5 lg:w-1/3"
    >
      <p class="text-neongreen text-md pt-10 tracking-widest">
        <slot name="title"></slot>
      </p>

      <p class="text-lightcyan text-3xl p-10">
        <slot name="description"></slot>
      </p>
      <div class="flex justify-center pr-10 pl-10 pb-20">
        <img src="../images/pattern-divider-desktop.svg" />
      </div>
    </div>
    <button
      @click="callFetchData()"
      class="w-16 h-16 rounded-full flex justify-center items-center -mt-8"
    >
      <slot name="button">
        <img src="../images/icon-dice.svg" />
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  inject: ["callFetchData"],
};
</script>

<style scoped>
button {
  background: #52ffa8;
}

button:hover {
  color: rgba(82, 255, 168, 1);
  box-shadow: 0 0 15px rgba(82, 255, 168, 1);
}
</style>