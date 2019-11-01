<template>
  <div class="about main-content">
    <div class="left-content">
      <h1>About me</h1>
      <p class="subtxt">I lead, design, code and learn</p>

      <button>
        <router-link to="/timeline">My Journey</router-link>
      </button>
      <br />
      <div class="social-logo-container">
        <a href="https://github.com/himars3290" target="_blank"
          ><img class="social-logo" src="../assets/github-logo.svg"
        /></a>
        <a target="_blank" href="https://www.linkedin.com/in/rashmi-manandhar"
          ><img class="social-logo" src="../assets/linkedin.svg"
        /></a>
        <a href="https://codepen.io/himars3290" target="_blank"
          ><img class="social-logo" src="../assets/codepen.png"
        /></a>
      </div>
    </div>
    <div class="right-content">
      <p>
        For the last 3 years, I have been working in KUDO. I was hired as a QA engineer but then I moved to product manager for about 1.5 years.
        I was a Web developer before i started with KUDO, so after 2 years of being involved in Product & QA, I shifted my focus in Frontend Development. Now I have been working as a Frontend Developer for about a year.
      </p>

      <div class="skill-container ">
        <h3>Skills</h3>
        <SkillSet :skill="'Vue'" :animation="'animation-80'"></SkillSet>
        <div class="skill" v-for="(percentage, skill) in skills" :key="skill">
          <div class="label">
            {{skill}}
          </div>
          <div class="bg-100">
            <div :class="getAnimationClass(percentage)"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$blue: #017faf;
$gray: #eaeaea;
$columns: 100;

@mixin slideAnim-x {
  @for $i from 50 through $columns {
    @keyframes slideAnim-#{$i} {
      from {
        opacity: 0;
        transform: translateX(-100%);
      }
      to {
        opacity: 100;
        transform: translateX(-100 + $i * 1%);
      }
    }
  }
}

@include slideAnim-x;

@mixin animation-x {
  @for $i from 50 through $columns {
    .animation-#{$i} {
      height: 10px;
      background-color: $blue;
      border-radius: 10px;
      animation: slideAnim-#{$i} 3s forwards;
      opacity: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}

@include animation-x;

.percentage-value {
  margin-right: 15px;
  font-size: 14px;
  color: white;
}

.bg-100 {
  background: $gray;
  border-radius: 10px;
  overflow: hidden;
}

.skill-container {
  padding: 10px;
  overflow: hidden;
}

.skill {
  padding-bottom: 1.2em;
}

.label {
  margin-bottom: 0.5em;
}

.left-content {
  background-color: #ffe476;

  .social-logo {
    width: 1.5em;
    height: 1.5em;
  }

  .social-logo-container {
    position: absolute;
    bottom: 2px;
    display: grid;
    width: 100%;
    grid-template-columns: 3% 3% 3%;
    justify-content: flex-start;
    align-items: center;
  }
}

.right-content {
  background: #fff;
  padding: 50px;
  margin-top: 80px;
  display: block;
}

button {
  font-size: 1.5em;
  margin-top: 100px;
}

.subtxt {
  font-size: 1.5em;
  margin-top: 30px;
}
</style>
<script>
  export default {
    data() {
      return {
        skills: {
          'Vue': 80,
          'React': 75,
          'Angular': 70,
          'CodeIgniter': 55,
          'Python': 50,
          'Java': 70,
          'Product Management' : 85
        }
      }
    },
    methods: {
      getAnimationClass(percentage){
        return 'animation-'+percentage;
      }
    }
  }
</script>
