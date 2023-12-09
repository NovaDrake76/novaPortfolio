<template>
    <div>
        <div class="projectTop" style="margin-top: 20px">
            <h1 class="projectTitle">Skills</h1>
            <div class="projectLine" />
        </div>
        <div class="skills">
            <img src="/benjamin.webp" alt="benjamin" class="benjamin" />
            <WordSphere id="id_sphere_object" ref="ref_sphere_object" class="wordSphere" :items_list="skills" />
        </div>
        <div class="mobileSkills">
            <p v-for="skill in skillsList" :key="skill.alt">
                <a class="skillIcon" :href="skill.link" target="_blank">
                    <img class="skillImage" :src="skill.image" :alt="skill.alt" />
                    {{ skill.alt }}
                </a>
            </p>
        </div>
    </div>
</template>
  
<script>
import WordSphere from 'wordsphere';

export default {
    name: "SkillsSection",
    components: {
        WordSphere
    },
    props: {
        skills: Array,
        skillsList: Array
    }
};
</script>
  
<style scoped>
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

a {
    color: #ccd6f6;
    text-decoration: none;
    transition: color 0.2s;
}

a:hover {
    color: #62f9d6;
}

@media (max-width: 768px) {
    .skills {
        flex-direction: column;
    }

    .wordSphere {
        display: none;
    }

    .benjamin {
        width: 200px;
        height: 200px;
        object-fit: contain;
    }

}
</style>
  