<template>
  <div class="inbox-body">
    <app-messages :messages="importantMessages" />
  </div>
</template>

<script>
  import Messages from './Messages'

  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    computed:{
      importantMessages() {
        return this.data.messages.filter(message => {
          return (message.type == 'incoming' && message.isImportant && !message.isDeleted);
        });
      }
    },
    components: {
      appMessages: Messages
    }
  }
</script>
