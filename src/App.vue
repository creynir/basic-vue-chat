<template>
  <div id="app">
    <basic-vue-chat
      :author="author"
      :message-list="messageList"
      :on-send="onSend"
      title="Awesome Title"/>
  </div>
</template>

<script>
import BasicVueChat from './components/basic-vue-chat/BasicVueChat.vue';

export default {
    name: 'App',
    components: {
        BasicVueChat
    },
    data: function () {
        return {
            author: {
                name: 'Mikhail',
                visitorId: 'test@test.com',
                email: ''
            },
            messageList: [
                {
                    text: 'hello',
                    date: Date.now() - 20000,
                    author: {
                        name: 'Mikhail',
                        visitorId: 'test@test.com',
                        email: ''
                    }
                },
                {
                    text: 'Hi!',
                    date: Date.now() - 15000,
                    author: {
                        name: 'Support',
                        visitorId: '1212',
                        email: ''
                    }
                },
                {
                    text: 'We have a problem',
                    date: Date.now() - 10000,
                    author: {
                        name: 'Mikhail',
                        visitorId: 'test@test.com',
                        email: ''
                    }
                },
                {
                    text: 'Wait a minute please',
                    date: Date.now() - 5000,
                    author: {
                        name: 'Support',
                        visitorId: '1212',
                        email: ''
                    }
                }
            ]
        };
    },
    methods: {
        onSend (message) {
            this.messageList.push(message);
        }
    }
};
</script>

<style lang="scss">
</style>
