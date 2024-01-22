<template>
    <div class="mid">
        <div class="projectTop">
            <h1 class="projectTitle">Projects</h1>
            <div class="projectLine"></div>
        </div>

        <div v-for="(project, index) in projects" :key="project.id" :ref="`projectRef${index}`"
            :class="['project', { 'reverse': index % 2 !== 0, 'animate': visibleProjects.has(project.id) }]"
            :style="{ animationDelay: `${index * 0.5}s` }">
            <div class="projectImageContainer">
                <a :href="project.link" target="_blank">
                    <img :src="project.imageUrl" alt="project" class="projectImage" />
                </a>
            </div>
            <div class="projectContentDetails">
                <span class="featured-project">Featured Project</span>
                <a :href="project.link" target="_blank">
                    <h1 class="listTitle">{{ project.title }}</h1>
                </a>
                <div class="projectdescription">
                    {{ project.description }}
                </div>
                <div class="projectTech">{{ project.technologies.join(', ') }}</div>
            </div>
        </div>
    </div>
</template>
  
  
<script>
export default {
    name: "ProjectSection",
    props: {
        projects: Array,
    },
    data() {
        return {
            visibleProjects: new Set(),
        };
    },
    mounted() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const projectId = entry.target.getAttribute('data-id');
                        this.visibleProjects.add(projectId);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        this.projects.forEach((project, index) => {
            const projectElement = this.$refs[`projectRef${index}`][0];
            projectElement.setAttribute('data-id', project.id);
            observer.observe(projectElement);
        });
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.checkElementsInViewport);
    },

    methods: {
        checkElementsInViewport() {
            this.projects.forEach((project) => {
                let element = this.$refs[`projectRef${project.id}`];
                if (element && this.isElementInViewport(element)) {
                    this.visibleProjects.add(project.id);
                }
            });
        },

        isElementInViewport(element) {
            let rect = element.getBoundingClientRect();
            return (
                rect.top < window.innerHeight && rect.bottom >= 0
            );
        }
    }
};

</script>
  
<style scoped>
a {
    text-decoration: none;
    color: #ccd6f6;
}

.mid {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    max-width: 1300px;
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


.project.reverse {
    flex-direction: row-reverse;
}

.projectImageContainer {
    flex: 1;
    text-align: center;
    margin: 0 20px;
    z-index: 1;
}

.projectImage {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}

.featured-project {
    color: #62f9d6;
    font-family: "Fira Code", monospace;
    font-size: 16px;
}

.listTitle {
    font-size: 30px;
    font-weight: bold;
    transition: color 0.4s;
    padding: 20px 0px;
    color: #ccd6f6;
    text-decoration: none;
}

.listTitle:hover {
    color: #5deccd;
}

.projectdescription {
    background-color: #112240;
    padding: 20px;
    border-radius: 4px;
    position: relative;
    z-index: 2;
}

.project.reverse .projectdescription {
    margin-right: -90px;
}

.project:not(.reverse) .projectdescription {
    margin-left: -90px;
}

.projectTech {
    font-family: "Fira Code", monospace;
    padding: 15px;
}

.projectContentDetails {
    flex: 1;
    padding: 15px;
    text-align: right;
}

.project.reverse .projectContentDetails {
    text-align: left;
}


.project.reverse {
    animation: fade-in-left 2s forwards;
}

.project:not(.reverse) {
    animation: fade-in-right 2s forwards;
}

.animate {
    opacity: 1;
}


.project {
    display: flex;
    align-items: center;
    margin-top: 40px;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}


.animate.reverse {
    animation: fade-in-left 2s forwards;
}

.animate:not(.reverse) {
    animation: fade-in-right 2s forwards;
}

@keyframes fade-in-left {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fade-in-right {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@media (max-width: 768px) {
    .project {
        flex-direction: column;
    }

    .projectImageContainer {
        margin: 0;
    }

    .projectContentDetails {
        text-align: center;
    }

    .project.reverse .projectContentDetails {
        text-align: center;
    }

    .project.reverse .projectdescription {
        margin-right: 0;
    }

    .project:not(.reverse) .projectdescription {
        margin-left: 0;
    }

    .projectdescription {
        margin: 0;
    }

    .project.reverse {
        flex-direction: column;
    }

    .project.reverse .projectImageContainer {
        margin-bottom: 20px;
    }

    .project.reverse .projectContentDetails {
        margin-top: 20px;
    }

    .project.reverse .projectdescription {
        margin-top: 20px;
    }


    .projectImage {
        width: 100%;
    }

    .projectLine {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
    }

    .projectTitle {
        font-size: 30px;
    }

}
</style>
  