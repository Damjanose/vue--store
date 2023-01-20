<template>
  <div class='form'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#0099ff" fill-opacity="1" d="M0,32L12.6,53.3C25.3,75,51,117,76,122.7C101.1,128,126,96,152,117.3C176.8,139,202,213,227,245.3C252.6,277,278,267,303,234.7C328.4,203,354,149,379,112C404.2,75,429,53,455,80C480,107,505,181,531,218.7C555.8,256,581,256,606,261.3C631.6,267,657,277,682,245.3C707.4,213,733,139,758,128C783.2,117,808,171,834,202.7C858.9,235,884,245,909,250.7C934.7,256,960,256,985,224C1010.5,192,1036,128,1061,117.3C1086.3,107,1112,149,1137,176C1162.1,203,1187,213,1213,208C1237.9,203,1263,181,1288,181.3C1313.7,181,1339,203,1364,202.7C1389.5,203,1415,181,1427,170.7L1440,160L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"></path>
    </svg>
    <div class='formWrapper'>
      <p>Home page</p>
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
      <div class='link-position__wrapper'>
        <router-link to="/insert">Go to insert Page ➡ ️</router-link>
      </div>
      <p>{{name}}</p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#0099ff" fill-opacity="1" d="M0,224L13.3,202.7C26.7,181,53,139,80,149.3C106.7,160,133,224,160,213.3C186.7,203,213,117,240,90.7C266.7,64,293,96,320,133.3C346.7,171,373,213,400,213.3C426.7,213,453,171,480,176C506.7,181,533,235,560,261.3C586.7,288,613,288,640,266.7C666.7,245,693,203,720,165.3C746.7,128,773,96,800,96C826.7,96,853,128,880,117.3C906.7,107,933,53,960,26.7C986.7,0,1013,0,1040,5.3C1066.7,11,1093,21,1120,58.7C1146.7,96,1173,160,1200,181.3C1226.7,203,1253,181,1280,144C1306.7,107,1333,53,1360,37.3C1386.7,21,1413,43,1427,53.3L1440,64L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"></path>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
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
  webkit-appearance: none;
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
  float: right;
  padding-top: 30px;
}
</style>