<template>
  <div class='form'>
    <div class="wrapper">
      <div class='formWrapper'>
        <p style="color: #030423">Home page</p>
        <div class='submitForm'>
          <input
              placeholder="Home"
              type="text"
              class="d-inline-block"
              v-model="name"
              @keyup.enter="changeValue"
          />
          <button class="btn-tour-finish" @click="changeValue">Save</button>
        </div>
        <div class="form_footer">
          <p :class="name == null ? 'red' : 'green'">
            {{ name == null ? "Old value:" + value : "New value:" + name }}
          </p>
          <div class='link-position__wrapper'>
            <router-link to="/">Go to insert Page ➡ ️</router-link>
          </div>
        </div>
      </div>
      <div class="bubble"><span class="dot"></span></div>
      <div class="bubble"><span class="dot"></span></div>
      <div class="bubble"><span class="dot"></span></div>
      <div class="bubble"><span class="dot"></span></div>
      <div class="bubble"><span class="dot"></span></div>
      <div class="bubble"><span class="dot"></span></div>
      <div class="bubble"><span class="dot"></span></div>
      <div class="bubble"><span class="dot"></span></div>
      <div class="bubble"><span class="dot"></span></div>
      <div class="bubble"><span class="dot"></span></div>
      <div class="bubble"><span class="dot"></span></div>
      <div class="bubble"><span class="dot"></span></div>
      <div class="bubble"><span class="dot"></span></div>
      <div class="bubble"><span class="dot"></span></div>
      <div class="bubble"><span class="dot"></span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const value = localStorage.getItem('home page value')
    return {
      name: null,
      value: value,
    };
  },
  methods: {
    changeValue() {
      localStorage.setItem('home page value', this.name);
    },
  },
}
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: space-between;
  }
  .formWrapper {
    padding: 25px;
    box-shadow: 6px 9px 14px 0 rgb(183 168 168 / 62%);
    -webkit-box-shadow: 6px 9px 14px 0 rgb(183 168 168 / 62%);
    -moz-box-shadow: 6px 9px 14px 0 rgb(183 168 168 / 62%);
  }
  input {
    width: 70%;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 12px 20px;
  }
  button {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    width: 20%;
    height: 50px;
    background-image: linear-gradient(to top, #D8D9DB 0%, #fff 80%, #FDFDFD 100%);
    border-radius: 30px;
    border: 1px solid #8F9092;
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1, 0 -6px 4px #fefefe, inset 0 0 3px 0 #cecfd1;
    transition: all 0.2s ease;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #606060;
    text-shadow: 0 1px #fff;
  }
  .submitForm {
    display: flex;
    justify-content: space-between;
  }
  .link-position__wrapper {
    display: flex;
    align-items: center;
    margin-left: 162px;
  }
  .red {
    color: red;
  }
  .green {
    color: green;
  }
  a, p {
    font-size: 16px;
    padding-top: 10px;
  }
  .form_footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  * {
    margin: 0;
    padding: 0;
  }
  .wrapper {
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, #04fafd, 5%, #119dff, 50%, #030423);
    position: absolute;
  }
  .wrapper .formWrapper {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    font-family: sans-serif;
    letter-spacing: 1px;
    word-spacing: 2px;
    color: #fff;
    font-size: 40px;
    font-weight: 888;
    background: #fff;
    border-radius: 6px;
  }
  .wrapper .bubble {
    height: 60px;
    width: 60px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 50px;
    position: absolute;
    top: 10%;
    left: 10%;
    animation: 4s linear infinite;
  }
  .bubble .dot {
    height: 10px;
    width: 10px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 20%;
    right: 20%;
  }
  .wrapper .bubble:nth-child(1) {
    top: 20%;
    left: 20%;
    animation: animate 8s linear infinite;
  }
  .wrapper .bubble:nth-child(2) {
    top: 60%;
    left: 80%;
    animation: animate 10s linear infinite;
  }
  .wrapper .bubble:nth-child(3) {
    top: 40%;
    left: 40%;
    animation: animate 3s linear infinite;
  }
  .wrapper .bubble:nth-child(4) {
    top: 66%;
    left: 30%;
    animation: animate 7s linear infinite;
  }
  .wrapper .bubble:nth-child(5) {
    top: 90%;
    left: 10%;
    animation: animate 9s linear infinite;
  }
  .wrapper .bubble:nth-child(6) {
    top: 30%;
    left: 60%;
    animation: animate 5s linear infinite;
  }
  .wrapper .bubble:nth-child(7) {
    top: 70%;
    left: 20%;
    animation: animate 8s linear infinite;
  }
  .wrapper .bubble:nth-child(8) {
    top: 75%;
    left: 60%;
    animation: animate 10s linear infinite;
  }
  .wrapper .bubble:nth-child(9) {
    top: 50%;
    left: 50%;
    animation: animate 6s linear infinite;
  }
  .wrapper .bubble:nth-child(10) {
    top: 45%;
    left: 20%;
    animation: animate 10s linear infinite;
  }
  .wrapper div:nth-child(11) {
    top: 10%;
    left: 90%;
    animation: animate 9s linear infinite;
  }
  .wrapper div:nth-child(12) {
    top: 20%;
    left: 70%;
    animation: animate 7s linear infinite;
  }
  .wrapper .bubble:nth-child(13) {
    top: 20%;
    left: 20%;
    animation: animate 8s linear infinite;
  }
  .wrapper .bubble:nth-child(14) {
    top: 60%;
    left: 5%;
    animation: animate 6s linear infinite;
  }
  .wrapper .bubble:nth-child(15) {
    top: 90%;
    left: 80%;
    animation: animate 9s linear infinite;
  }
  @keyframes animate {
    0% {
      transform: scale(0) translateY(0) rotate(70deg);
    }
    100% {
      transform: scale(1.3) translateY(-100px) rotate(360deg);
    }
  }

</style>