<template>
  <div class="inbox-body">
    <app-messages :messages="trashedMessages" />
  </div>
</template>

<script>
import Messages from './Messages';
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    computed: {
      trashedMessages() {
        return this.data.messages.filter(message => {
          return message.isDeleted === true;
        });
      }
    },
    components: {
      appMessages: Messages
    }
  }
</script>
