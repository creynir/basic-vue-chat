<template>
  <div class="basic-vue-chat">
    <section class="window">
      <header class="window__header__container">
        <slot name="header">
          {{ title }}
        </slot>
      </header>
      <section
        id="window__messages__container"
        class="window__messages__container">
        <slot>
          <messages-list
            :message-list="messageList"
            :author-id="author.visitorId"
            class="messages-list"/>
        </slot>
      </section>
      <div class="window__input__container">
        <slot name="input-container">
          <input-container @newOwnMessage="onNewOwnMessage"/>
        </slot>
      </div>
    </section>
  </div>
</template>

<script>
import { scrollToBottom } from '../../helpers/scroll.js';
import MessagesList from './messages/MessagesList.vue';
import InputContainer from './input/InputContainer.vue';

export default {
    name: 'BasicVueChat',
    components: {
        MessagesList,
        InputContainer
    },
    props: {
        title: {
            type: String,
            default: '',
            required: false
        },
        author: {
            type: Object,
            required: true
        },
        messageList: {
            type: Array,
            required: true
        },
        onSend: {
            type: Function,
            required: true
        }
    },
    watch: {
        messageList: function (newValue, oldValue) {
            scrollToBottom();
        }
    },
    mounted () {
    },
    methods: {
        onNewOwnMessage (message) {
            const newOwnMessage = {
                text: message,
                date: Date.now(),
                author: this.author
            };
            this.onSend(newOwnMessage);
        }
    }

};
</script>

<style lang="scss">
@import "../../assets/scss/main.scss";
</style>
