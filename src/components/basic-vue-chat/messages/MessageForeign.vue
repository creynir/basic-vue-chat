<template>
  <div
    class="message--foreign">
    <div class="message__author">
      {{ author }}
    </div>
    <div class="message__contents">
      {{ text }}
    </div>
    <div class="message__date">
      {{ date }}
    </div>
  </div>
</template>

<script>
export default {
    name: 'MessageForeign',
    props: {
        author: {
            type: String,
            required: true
        },
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
