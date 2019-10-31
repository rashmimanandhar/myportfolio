<template>
  <div class="about main-content">
    <div class="left-content">
      <h1>About me</h1>
      <p class="subtxt">I design, code and learn</p>

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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        assumenda atque cumque enim esse excepturi fugiat ipsam laborum neque
        ratione, sit sunt voluptatibus. Earum eos nulla perferendis quos sint,
        voluptatibus.
      </p>

      <div class="skill-container ">
        <h3>Expertise</h3>
        <div class="skill">
          <div class="label">
            Angular
          </div>
          <div class="bg-100">
            <div class="animation-95"></div>
          </div>
        </div>
        <div class="skill">
          <div class="label">
            Vue
          </div>
          <div class="bg-100">
            <div class="animation-80"></div>
          </div>
        </div>
        <div class="skill">
          <div class="label">
            CodeIgniter
          </div>
          <div class="bg-100">
            <div class="animation-75"></div>
          </div>
        </div>
        <div class="skill">
          <div class="label">
            Python
          </div>
          <div class="bg-100">
            <div class="animation-60"></div>
          </div>
        </div>
        <div class="skill">
          <div class="label">
            Java
          </div>
          <div class="bg-100">
            <div class="animation-70"></div>
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
