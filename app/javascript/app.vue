<template>
  <div id="app">
    <div class="container">
      <div class="mail-box">
        <app-sidebar :messages="messages" />
        <app-content :messages="messages" />
      </div>
    </div>
  </div>
</template>

<script>
  import messages from './src/data/messages'
  import Sidebar from './src/components/Sidebar'
  import Content from './src/components/Content'
  import { eventBus } from './main'

  export default {
    data: function () {
      return {
        messages: messages
      }
    },
    created() {
      eventBus.$on('refreshMessages', () => {
          let randomIndex = Math.floor(Math.random() * randomMessages.length);
          let temp = [randomMessages[randomIndex]];
          this.messages = temp.concat(this.messages.slice(0));
      });

      eventBus.$on('sentMessage', (data) => {
          let temp = [data.message];
          this.messages = temp.concat(this.messages.slice(0));
      });
    },
    components: {
      appSidebar: Sidebar,
      appContent: Content
    }
  }
  </script>

<style>
</style>
