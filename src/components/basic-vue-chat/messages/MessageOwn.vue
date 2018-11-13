<template>
  <div
    class="message--own">
    <div class="message__date">
      {{ date }}
    </div>
    <div class="message__contents">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
    name: 'MessageOwn',
    props: {
        date: {
            type: Number,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
};
</script>

<style>

</style>
