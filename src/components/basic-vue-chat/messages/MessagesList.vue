<template>
  <transition-group
    name="messages-list"
    tag="div">
    <div
      v-for="message in messageList"
      :key="messageKey(message)"
      class="messages-list-item">
      <message-own
        v-if="message.author.visitorId === authorId"
        :date="message.date"
        :text="message.text" />
      <message-foreign
        v-else
        :author="message.author.name"
        :date="message.date"
        :text="message.text" />
    </div>
  </transition-group>
</template>

<script>
import MessageOwn from './MessageOwn.vue';
import MessageForeign from './MessageForeign.vue';

export default {
    name: 'MessagesList',
    components: {
        MessageOwn,
        MessageForeign
    },
    props: {
        messageList: {
            type: Array,
            required: true
        },
        authorId: {
            type: String,
            required: true
        }
    },
    methods: {
        messageKey (message) {
            return message.text + message.date;
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
