<template>
  <div class="container">
    <div class="sideInfo">
      <div class="sideInfoContent">
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

        <div class="sideLine" />
      </div>
    </div>
    <div class="allContent">
      <div class="top">
        <img
          src="https://avatars.githubusercontent.com/u/65428910?v=4"
          alt="sinuca"
          class="avatar"
        />
        <div class="textTop">
          <span class="title">NovaDrake</span>
          <p class="subTitle">
            Thank you for visiting. My name is Nathan, I'm a Front-end
            developer. Here you can find some of my works.
          </p>
          <p class="subTitle">
            I'm focused on responsive design, SEO, code quality, etc, and I have
            experience with Agile Scrum Methodology.
          </p>
        </div>
      </div>

      <div class="mid">
        <div class="project">
          <div class="projectTop">
            <h1 class="projectTitle">Projects</h1>
            <div class="projectLine" />
          </div>
          <div
            class="projectContent"
            style="margin-top: 20px"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="200"
          >
            <div class="projectImageContainer">
              <a href="https://www.adinvestimentos.com.br" target="_blank">
                <img src="/ad.webp" alt="project" class="projectImage"
              /></a>
            </div>
            <div class="projectContentDetails">
              <span style="font-family: 'Fira Code', monospace; color: #62f9d6"
                >Featured Project</span
              >
              <a href="https://www.adinvestimentos.com.br" target="_blank">
                <h1 class="listTitle">AD Investimentos</h1></a
              >
              <div class="projectdescription">
                Professional Investment Management - Office linked to Guide
                Investimentos. I made this site in less than 2 liters of coffee.
              </div>
              <div class="projectTech">React, Tailwind</div>
            </div>
          </div>
          <div
            class="projectContentLeft"
            style="margin-top: 20px"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="200"
          >
            <div class="projectContentDetailsLeft">
              <span style="font-family: 'Fira Code', monospace; color: #62f9d6"
                >Featured Project</span
              >
              <a href="https://smartlibrary.netlify.app" target="_blank">
                <h1 class="listTitle">Zenetpay</h1></a
              >
              <div class="projectdescriptionLeft">
                Zenetpay is a Brazilian fintech company that provides digital
                payment solutions for businesses. As part of the team, I was
                responsible for the development of the Dashboard, working with
                Frond - API communication, and the creation of new features.
              </div>
              <div class="projectTech">
                Typescript, React, Material UI, UX, Python
              </div>
            </div>
            <div class="projectImageContainer">
              <a href="https://zenetpay.com" target="_blank">
                <img src="/zenetpay.webp" alt="project" class="projectImage"
              /></a>
            </div>
          </div>
          <div
            class="projectContent"
            style="margin-top: 20px"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="200"
          >
            <div class="projectImageContainer">
              <a href="https://smartlibrary.netlify.app" target="_blank">
                <img src="/library.webp" alt="project" class="projectImage"
              /></a>
            </div>
            <div class="projectContentDetails">
              <span style="font-family: 'Fira Code', monospace; color: #62f9d6"
                >Featured Project</span
              >
              <a href="https://smartlibrary.netlify.app" target="_blank">
                <h1 class="listTitle">Project Smart Library</h1></a
              >
              <div class="projectdescription">
                A web application to assist the administration of school
                libraries. Features such as study room reservation and computers
                disponibility checkers can make life easier for the students.
              </div>
              <div class="projectTech">
                Typescript, React, Styled Components
              </div>
            </div>
          </div>
          <div
            class="projectContent"
            v-motion
            :initial="{
              opacity: 0,
              x: -20,
            }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
            }"
            :delay="200"
          >
            <div class="projectContentDetailsLeft">
              <span style="font-family: 'Fira Code', monospace; color: #62f9d6"
                >Featured Project</span
              >
              <a href="https://novaskins.netlify.app" target="_blank"
                ><h1 class="listTitle">Novaskins</h1></a
              >
              <div class="projectdescriptionLeft">
                Track skins information directly from the CS:GO market. Verify
                the price, volume, median price and lowest price of a skin, and
                make sure if it worth your money. - [Out because of Heroku
                prices]
              </div>
              <div class="projectTech">Javascript, Vue, Plain CSS</div>
            </div>
            <div class="projectImageContainerLeft">
              <a href="https://novaskins.netlify.app" target="_blank">
                <img src="/novaskins.webp" alt="project" class="projectImage"
              /></a>
            </div>
          </div>
          <div
            class="projectContentLeft"
            v-motion
            :initial="{
              opacity: 0,
              x: 20,
            }"
            :visibleOnce="{
              opacity: 1,
              x: 0,
            }"
            :delay="200"
          >
            <div class="projectImageContainer">
              <a href="https://www.donacoruja.org" target="_blank">
                <img src="/coruja.webp" alt="project" class="projectImage" />
              </a>
            </div>
            <div class="projectContentDetails">
              <span style="font-family: 'Fira Code', monospace; color: #62f9d6"
                >Featured Project</span
              >
              <a href="https://www.donacoruja.org" target="_blank">
                <h1 class="listTitle">Campaign Dona Coruja</h1></a
              >

              <div class="projectdescription">
                The Campaign Dona Coruja helps children by giving them school
                materials. Here, the campaign organizers can track information
                such as how many children or schools will they help this year. -
                [Out because of Heroku prices]
              </div>
              <div class="projectTech">PHP, Laravel, Bootstrap</div>
            </div>
          </div>
        </div>
      </div>
      <div class="projectTop" style="margin-top: 20px">
        <h1 class="projectTitle">Skills</h1>
        <div class="projectLine" />
      </div>
      <div class="skills">
        <img src="/benjamin.webp" alt="benjamin" />
        <WordSphere
          id="id_sphere_object"
          ref="ref_sphere_object"
          class="wordSphere"
          :items_list="[
            'Vue',
            'React',
            'Bootstrap',
            'Tailwind',
            'Materialize',
            'Material UI',
            'MDB',
            'SASS',
            'CSS',
            'HTML',
            'MySQL',
            'PHP',
            'Javascript',
            'Git',
            'Salve',
            'Typescript',
          ]"
        />
      </div>
      <div class="mobileSkills">
        <p v-for="skill in skills" v-bind:key="skill.alt">
          <a class="skillIcon" :href="skill.link" target="_blank">
            <img class="skillImage" :src="skill.image" v-bind:alt="skill.alt" />
            {{ skill.alt }}
          </a>
        </p>
      </div>

      <footer>
        <span style="text-align: center"
          >Built by
          <a href="https://github.com/NovaDrake76" target="_blank">NovaDrake</a
          >, designed by
          <a href="https://github.com/bchiang7" target="_blank"
            >Brittany Chiang</a
          ></span
        >
      </footer>
    </div>
    <div class="sideInfo">
      <div class="sideInfoContent">
        <a class="email" href="mailto:novadrake76@gmail.com"
          >novadrake76@gmail.com</a
        >
        <div class="sideLine" />
      </div>
    </div>
  </div>
</template>

<script>
import WordSphere from "wordsphere"

export default {
  components: {
    WordSphere,
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  data() {
    return {
      skills: [
        {
          link: "https://reactjs.org",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
          alt: "React",
        },
        {
          link: "https://vuejs.org/",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
          alt: "Vue",
        },

        {
          link: "https://www.w3schools.com/css/",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
          alt: "CSS3",
        },
        {
          link: "https://www.w3.org/html/",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
          alt: "HTML5",
        },
        {
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          alt: "Javascript",
        },
        {
          link: "https://getbootstrap.com",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
          alt: "Bootstrap",
        },
        {
          link: "https://materializecss.com/",
          image:
            "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg",
          alt: "Materialize",
        },

        {
          link: "https://sass-lang.com",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
          alt: "SASS",
        },
        {
          link: "https://tailwindcss.com/",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
          alt: "Tailwind",
        },
        {
          link: "https://mui.com/",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg",
          alt: "Material UI",
        },
        {
          link: "https://www.mysql.com/",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
          alt: "MySQL",
        },
        {
          link: "https://www.php.net",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
          alt: "PHP",
        },
      ],
    }
  },
  methods: {
    onScroll(e) {
      // if the sphere becomes visible
      if (
        document.getElementById("id_sphere_object").getBoundingClientRect()
          .top <= window.innerHeight
      ) {
        this.$refs.ref_sphere_object.start_autonomous_move()
        window.removeEventListener("scroll", this.onScroll)
      }
    },
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Montserrat&display=swap");

a {
  color: #ccd6f6;
  text-decoration: none;
  transition: color 0.2s;
}

footer {
  padding: 50px 0 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Fira Code", monospace;
}

a:hover {
  color: #62f9d6;
}

.container {
  height: 100vh;
  width: 98vw;
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

.sideInfoContent {
  position: fixed;
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  max-width: 80%;
  display: flex;
  flex-direction: column;
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
  margin-top: 10px;
}

.listTitle {
  font-size: 30px;
  font-weight: bold;
  transition: color 0.4s;
  padding: 20px;
  text-align: center;
}

.listTitle:hover {
  color: #5deccd;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transition: all 0.5s;
}

.mid {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.project {
  display: flex;
  flex-direction: column;
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
  background-color: #233554;
}

.projectContent {
  display: flex;
  align-items: center;
  margin-top: 40px;
}

.projectContentLeft {
  display: flex;
  align-items: center;
  margin-top: 40px;
}

.projectImageContainer {
  height: fit-content;
  background: #5deccd;
  border-radius: 6px;
  transition: background 0.2s;
}

.projectImageContainer:hover {
  background: transparent;
}

.projectImage {
  width: 100%;
  height: 100%;
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

.projectContentDetailsLeft {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.projectdescriptionLeft {
  background-color: #112240;
  margin-right: -60px;
  padding: 20px;
  border-radius: 4px;
  z-index: 10;
}

.projectdescription {
  background-color: #112240;
  margin-left: -60px;
  padding: 20px;
  border-radius: 4px;
}

.projectTech {
  font-family: "Fira Code", monospace;
  padding: 15px;
}

.skills {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.mobileSkills {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.skillIcon {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skillImage {
  width: 40px;
  height: 40px;
}

@media screen and (max-width: 800px) {
  .container {
    width: 100%;
    margin: 0;
  }
  .allContent {
    max-width: 90%;
  }
  .sideInfo {
    display: none;
  }

  .top {
    display: flex;
    flex-direction: column;
  }

  .textTop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0;
  }

  .title {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  }

  .subTitle {
    width: 100%;
    font-size: 17px;
    font-family: "Montserrat", sans-serif;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .projectContent {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 30px;
  }

  .projectContentLeft {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  .projectImageContainer {
    background-color: transparent;
  }

  .projectdescriptionLeft {
    margin-right: 0;
  }

  .projectdescription {
    margin-left: 0;
  }

  .projectContentDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .projectContentDetailsLeft {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .skills {
    display: none;
  }
}

@media screen and (min-width: 1740px) {
  .allContent {
    max-width: 55%;
  }
}
</style>
