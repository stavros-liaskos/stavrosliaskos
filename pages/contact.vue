<template>
  <div class="contact z-3 section-secondary">
    <headline-animated
      v-bind:class="['text-center']"
      v-bind:content="'Let\'s talk'"/>

    <p class="desc text-center">
      Do you want to tell me something amazing?
      Do you have any questions?
      Don't hesitate to contact me at:
      <a href="mailto:hello@stavrosliaskos.com" target="_blank">hello@stavrosliaskos.com</a>
    </p>

    <!--
        <contact-form/>
    -->

    <br>
    <go-home v-bind:style="{textAlign: 'right'}"/>
  </div>
</template>

<script>
  // import ContactForm from '~/components/ContactForm';
  import HeadlineAnimated from '~/components/HeadlineAnimated';
  import GoHome from '~/components/GoHome';

  export default {
    components: {
      // ContactForm,
      HeadlineAnimated,
      GoHome
    },

    data() {
      return {
        name: '', // data for the name on the form
        email: '', // data for the email on the form
        message: '', // data for the message on the form
        maxLength: 300 // maximum length of the form message
      };
    },

    methods: { // all the actions our app can do
      isValidName: function () { // TODO what if name is just spaces?
        var valid = this.name.length > 0;
        console.log('checking for a valid name: ' + valid);
        return valid;
      },
      isValidEmail: function () { // TODO is a@b a valid email?
        var valid = this.email.indexOf('@') > 0;
        console.log('checking for a valid email: ' + valid);
        return valid;
      },
      isValidMessage: function () { // what is message is just spaces?
        var valid = (this.message.length > 0) &&
          (this.message.length < this.maxLength);
        console.log('checking for a valid message: ' + valid);
        return valid;
      },
      checkMessage: function () {
        // TODO keep the message below maxMessageLength?
        //      or maybe change the text, background, or counter color?
      },
      submitForm: function () {
        // TODO prevent form from submitting if name, email, or message
        //      are invalid and display message
        // TODO submit to form processor
        console.log('submitting message...');
        this.$http({
          url: '/someUrl',
          method: 'POST',
          data: {
            name: this.name,
            email: this.email,
            message: this.message
          }
        }).then(function () {
          alert('Your form was submitted!');
        }, function () {
          alert('Form submission failed');
        });
      }
    }
  };
</script>

<style lang="scss">
  @import '../assets/styles';

  // add properties to the parent .container (note that "scoped" is removed from <style>)
  .container {
    display: flex; // stretch div to fit parent height
  }

  .contact .desc {
    white-space: pre-line;
  }

  .form-container {
    width: 100%;
    margin: auto;

    .top {
      display: flex;
      flex-wrap: wrap;

      .flex-item {
        flex-grow: 1;
      }
    }
    .form-group {
      margin: $space_2;
    }
    .form-control {
      width: 100%;
    }
  }

  @include breakpoint($breakpoint_screen_md) {
    .form-container {
      width: 70%;

      .top {
        flex-wrap: nowrap;
      }
    }
  }
</style>
