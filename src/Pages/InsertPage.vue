<template>
  <div class='form'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#99c5f1" fill-opacity="1" d="M0,96L12.6,128C25.3,160,51,224,76,261.3C101.1,299,126,309,152,288C176.8,267,202,213,227,170.7C252.6,128,278,96,303,106.7C328.4,117,354,171,379,176C404.2,181,429,139,455,117.3C480,96,505,96,531,128C555.8,160,581,224,606,234.7C631.6,245,657,203,682,165.3C707.4,128,733,96,758,112C783.2,128,808,192,834,224C858.9,256,884,256,909,224C934.7,192,960,128,985,133.3C1010.5,139,1036,213,1061,256C1086.3,299,1112,309,1137,288C1162.1,267,1187,213,1213,197.3C1237.9,181,1263,203,1288,218.7C1313.7,235,1339,245,1364,245.3C1389.5,245,1415,235,1427,229.3L1440,224L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"></path>
    </svg>
    <div class='formWrapper'>
      <p>Insert page</p>
      <div class='submitForm'>
        <input
          placeholder="Insert"
          type="text"
          class="d-inline-block"
          v-model="name"
          @keyup.enter="changeValue"
        />
        <button class="btn-tour-finish" @click="changeValue">Save</button>
      </div>
      <div class='link-position__wrapper'>
        <router-link to="/home">Go back to home ↩ ️</router-link>
      </div>
      <p>{{name}}</p>
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
    return {
      name: '',
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
    justify-content: flex-start;
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
</style>