<template>
  <div class="form-container">
    <!-- id of contact_form used in vue.js to designate this form as our app -->
    <!-- also, uses several bootstrap classes (form-group, form-control, btn, btn-primary, etc.) -->
    <!-- v- is our vue stuff; "on:" is hooking into an event -->
    <!-- here v-on:submit lets us connect the submit event of the form -->
    <!--    our ="submitForm" method that is called here is in vue.js -->
    <!--    note that .prevent after :submit prevents the form from submiting via the action attribute -->
    <form 
      id="contact_form" 
      action="" 
      @submit.prevent="submitForm">
      <div class="top">
        <div class="form-group  flex-item">
          <label for="name">Name: </label>
          <br>
          <!-- v-model link to the model (i.e. pieces of the data section of vue.js) -->
          <!-- v-on lets us run methods from vue.js : this one is v-on:blur for the blur event -->
          <!--    blur just means that the field no longer has 'focus' -->
          <input 
            v-model="name" 
            class="form-control" 
            name="name" 
            type="text" 
            @blur="isValidName">
        </div>

        <div class="form-group flex-item">
          <label for="email">Email: </label>
          <br>
          <input 
            v-model="email" 
            class="form-control" 
            name="email" 
            type="email" 
            @blur="isValidEmail">
        </div>
      </div>

      <div class="form-group">
        <label for="message">Message
          <small>(<span>{{ message.length }}</span> / <span>{{ maxLength }}</span>):</small>
        </label>
        <br>
        <textarea 
          v-model="message" 
          class="form-control" 
          name="message" 
          @blur="isValidMessage"/>
      </div>

      <button type="submit">Send it!</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: '', // data for the name on the form
      email: '', // data for the email on the form
      message: '', // data for the message on the form
      maxLength: 300 // maximum length of the form message
    }
  },

  methods: {
    // all the actions our app can do
    isValidName: function() {
      // TODO what if name is just spaces?
      var valid = this.name.length > 0
      console.log('checking for a valid name: ' + valid)
      return valid
    },
    isValidEmail: function() {
      // TODO is a@b a valid email?
      var valid = this.email.indexOf('@') > 0
      console.log('checking for a valid email: ' + valid)
      return valid
    },
    isValidMessage: function() {
      // what is message is just spaces?
      var valid =
        this.message.length > 0 && this.message.length < this.maxLength
      console.log('checking for a valid message: ' + valid)
      return valid
    },
    checkMessage: function() {
      // TODO keep the message below maxMessageLength?
      //      or maybe change the text, background, or counter color?
    },
    submitForm: function() {
      // TODO prevent form from submitting if name, email, or message
      //      are invalid and display message
      // TODO submit to form processor
      console.log('submitting message...')
      this.$http({
        url: '/someUrl',
        method: 'POST',
        data: {
          name: this.name,
          email: this.email,
          message: this.message
        }
      }).then(
        function() {
          alert('Your form was submitted!')
        },
        function() {
          alert('Form submission failed')
        }
      )
    }
  }
}
</script>

<style lang="scss">
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
