<template>
  <div class="container">
    <SideInfo type="social" />
    <div class="allContent">
      <ProfileSection />
      <ProjectSection :projects="projects" />
      <SkillsSection :skills="skills" :skillsList="skillsList" />
      <Footer />
    </div>
    <SideInfo type="email" />
  </div>
</template>
<script>
import SideInfo from './SideInfo.vue';
import ProfileSection from './ProfileSection.vue';
import ProjectSection from './ProjectSection.vue';
import SkillsSection from './SkillsSection.vue';
import Footer from './Footer.vue';

export default {
  components: {
    SideInfo,
    ProfileSection,
    ProjectSection,
    SkillsSection,
    Footer
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Conthabil',
          description: 'Automate your accounting routines and do more with less. Leave the repetitive and operational activities to our robot and focus on what really matters.',
          imageUrl: '/conha.webp',
          link: 'https://conthabilbr.com/',
          technologies: ['React', 'Styled Components']
        },
        {
          id: 2,
          title: 'Zenetpay',
          description: 'Zenetpay is a Brazilian fintech company that provides digital payment solutions for businesses. As part of the team, I was responsible for the development of the Dashboard, working with Frond - API communication, and the creation of new features.',
          imageUrl: '/zenetpay.webp',
          link: 'https://zenetpay.com',
          technologies: ['Typescript', 'React', 'Material UI', 'UX', 'Python']
        },
        {
          id: 6,
          title: 'Campaing Dona Coruja',
          description: 'The goal of the campaing is to serve public school students, so that they can start the school year with decent school supplies. We hope that this way they will feel more stimulated in relation to their studies and will be able to contribute to a better future.',
          imageUrl: '/donacoruja.webp',
          link: 'https://donacoruja.org',
          technologies: ['Typescript', 'React', 'Tailwindcss']
        },
        {
          id: 5,
          title: 'AD Investimentos',
          description: 'Professional Investment Management - Office linked to Guide Investimentos.',
          imageUrl: '/ad.png',
          link: 'https://adinvestimentos.netlify.app/',
          technologies: ['React', 'Tailwindcss', 'Javascript']
        },
        {
          id: 3,
          title: 'KaniCasino',
          description: "Kanicasino is a 4fun casino, no real money involved (unless...?). You can open cases in a CSGO-like style, play roulette, coinflip, and more. I've been working on this project for months now, and it's my favorite one",
          imageUrl: '/kanicasino.webp',
          link: 'https://kanicasino.novadrake.com',
          technologies: ['Node', 'Typescript', 'React', 'Tailwindcss']
        },
        {
          id: 4,
          title: 'Novaskins',
          description: 'Track skins information directly from the CS:GO market. Verify the price, volume, median price and lowest price of a skin, and make sure if it worth your money. - [Out because of Heroku prices]',
          imageUrl: '/novaskins.webp',
          link: 'https://novaskins.netlify.app',
          technologies: ['Javascript', 'Vue', 'Plain CSS']
        }
      ],
      skills: [
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
        'Typescript',],
      skillsList: [
        {
          link: "https://reactjs.org",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
          alt: "React",
        },
        {
          link: "https://vuejs.org/",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
          alt: "Vue",
        },
        {
          link: "https://www.w3schools.com/css/",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
          alt: "CSS3",
        },
        {
          link: "https://www.w3.org/html/",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
          alt: "HTML5",
        },
        {
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          alt: "Javascript",
        },
        {
          link: "https://getbootstrap.com",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
          alt: "Bootstrap",
        },
        {
          link: "https://materializecss.com/",
          image: "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg",
          alt: "Materialize",
        },
        {
          link: "https://sass-lang.com",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
          alt: "SASS",
        },
        {
          link: "https://tailwindcss.com/",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
          alt: "Tailwind",
        },
        {
          link: "https://mui.com/",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg",
          alt: "Material UI",
        },
        {
          link: "https://www.mysql.com/",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
          alt: "MySQL",
        },
        {
          link: "https://www.php.net",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
          alt: "PHP",
        },
        {
          link: "https://git-scm.com/",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
          alt: "Git",
        },
        {
          link: "https://www.typescriptlang.org/",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
          alt: "Typescript",
        },
      ]
    };
  }
};
</script>

<style>
.container {
  height: 100vh;
  width: 98vw;
  display: flex;
  justify-content: space-around;
  color: #ccd6f6;
  background-color: #0a192f;
}

.allContent {
  max-width: 80%;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
</style>
