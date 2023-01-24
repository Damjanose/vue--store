<template>
  <div class='form'>
    <div class="ocean top">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
    <div class='formWrapper'>
      <p>Insert page</p>
      <div class='submitForm'>
        <input
          placeholder="Insert"
          type="text"
          class="d-inline-block"
          v-model="name"
        />
        <button class="btn-tour-finish" @click="changeValue">Save</button>
      </div>
      <div class='link-position__wrapper'>
        <router-link to="/home">Go back to home ↩ ️</router-link>
      </div>
      <p :class="name == null ? 'red' : 'green'">
        {{ name == null ? "Old value:" + value : "New value:" + name }}
      </p>
    </div>
    <div class="ocean">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const value = localStorage.getItem('insert page value')
    return {
      name: null,
      value: value,
    }
  },
  methods: {
    changeValue() {
      localStorage.setItem('insert page value', this.name);
    },
  },
}
</script>

<style scoped>
  a {
    color: #3f503ff2;
    text-decoration: none;
  }
  .form {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
  .ocean {
    height: 200px; /* change the height of the waves here */
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
  }

  .wave {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23003F7C'/%3E%3C/svg%3E");
    position: absolute;
    width: 200%;
    height: 100%;
    animation: wave 2s -1s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
  }

  .wave:nth-of-type(2) {
    bottom: 0;
    animation: wave 10s linear reverse infinite;
    opacity: 0.5;
  }

  .wave:nth-of-type(3) {
    bottom: 0;
    animation: wave 20s -1s linear infinite;
    opacity: 0.5;
  }

  @keyframes wave {
    0% {transform: translateX(0);}
    50% {transform: translateX(-25%);}
    100% {transform: translateX(-50%);}
  }
  .top {
    position: absolute;
    top: 0;
    transform: rotate(180deg);;
  }
  .red {
    color: red;
    font-style: italic;
  }
  .green {
    color: green;
  }
</style>