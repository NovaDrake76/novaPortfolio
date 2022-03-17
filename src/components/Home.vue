<template>
  <div class="container">
    <div class="sideInfo">
      <a target="”_blank”" href="https://github.com/NovaDrake76">
        <i class="sideIcon fa-brands fa-github"></i
      ></a>
      <a target="”_blank”" href="https://www.linkedin.com/in/nathan-marques/">
        <i class="sideIcon fa-brands fa-linkedin"></i
      ></a>
      <a
        target="”_blank”"
        href="https://discord.com/channels/@me/830191630069137459"
      >
        <i class="sideIcon fa-brands fa-discord"></i
      ></a>
      <a target="”_blank”" href="https://twitter.com/NovaDrake76">
        <i class="sideIcon fa-brands fa-twitter"></i
      ></a>
      <div class="sideLine" />
    </div>
    <div class="allContent">
      <div class="top">
        <img
          src="https://avatars.githubusercontent.com/u/65428910?v=4"
          alt="sinuca"
        />
        <div class="textTop">
          <span class="title">NovaDrake</span>
          <p class="subTitle">
            I'm a Front-end developer, here you can find some of my works.
          </p>
        </div>
      </div>
      <div class="mid">
        <div class="project">
          <div class="projectTop">
            <h1 class="projectTitle">Projects</h1>
            <div class="projectLine" />
          </div>
          <div class="projectContent">
            <div class="projectImageContainer">
              <img src="/novaskins.webp" alt="project" class="projectImage" />
            </div>
            <div class="projectContentDetails">
              <span style="font-family: 'Fira Code', monospace; color: #62f9d6"
                >Featured Project</span
              >
              <h1 class="projectTitle">Novaskins</h1>
              <div class="projectDescritpion">
                Track skins information directly from the CS:GO market. Verify
                the price, volume, median price and lowest price of a skin, and
                make sure if it worth your money.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sideInfo">
      <a class="email" href="mailto:novadrake76@gmail.com"
        >novadrake76@gmail.com</a
      >
      <div class="sideLine" />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Montserrat&display=swap");

a {
  color: #ccd6f6;
  text-decoration: none;
}

.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  color: #ccd6f6;
  background-color: #0a192f;
}

.sideInfo {
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-size: 22px;
}

.sideIcon {
  padding: 8px 0 20px 0;
  transition: all 0.5s;
}

.sideIcon:hover {
  color: #62f9d6;
  transform: translateY(-5px);
}

.sideLine {
  width: 1px;
  height: 100px;
  background-color: #ccd6f6;
}

.email {
  color: #ccd6f6;
  text-decoration: none;
  font-size: 17px;
  font-family: "Fira Code", monospace;
  writing-mode: vertical-rl;
  padding: 20px;
  transition: all 0.5s;
}

.email:hover {
  color: #62f9d6;
  transform: translateY(-5px);
}

.allContent {
  width: 80%;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  padding: 20px;
}

.top {
  display: flex;
}

.textTop {
  display: flex;
  flex-direction: column;
  padding-left: 25px;
}

.title {
  font-size: 60px;
  font-weight: bold;
}

.subTitle {
  width: 60%;
  font-size: 17px;
  font-family: "Montserrat", sans-serif;
}

.listTitle {
  font-size: 45px;
  font-weight: bold;
}

.mid {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.project {
  display: flex;
  flex-direction: column;
  max-width: 85%;
}

.projectTop {
  display: flex;
  align-items: center;
}

.projectTitle {
  font-weight: bold;
}

.projectLine {
  width: 300px;
  height: 1px;
  margin-left: 20px;
}

.projectContent {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.projectImageContainer {
  height: 98%;
  background: #5deccd;
  border-radius: 6px;
  transition: background 0.2s;
}

.projectImageContainer:hover {
  background: transparent;
}

.projectImage {
  width: 500px;
  border-radius: 4px;
  object-fit: cover;
  opacity: 0.9;
}

.projectContentDetails {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.projectDescritpion {
  background-color: #112240;
  margin-left: -60px;
  padding: 20px;
  border-radius: 4px;
}
</style>
