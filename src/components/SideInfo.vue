<template>
    <div class="sideInfo">
        <div class="sideInfoContent">
            <template v-if="type === 'social'">
                <a target="_blank" href="https://github.com/NovaDrake76">
                    <i class="sideIcon fa-brands fa-github"></i>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/nathan-marques/">
                    <i class="sideIcon fa-brands fa-linkedin"></i>
                </a>
                <a target="_blank" href="https://discord.com/channels/@me/830191630069137459">
                    <i class="sideIcon fa-brands fa-discord"></i>
                </a>
            </template>
            <template v-else>
                <a class="email" href="mailto:novadrake76@gmail.com" target="_blank">novadrake76@gmail.com</a>
            </template>
            <div class="sideLine" />
        </div>
    </div>
</template>
  
<script>
export default {
    name: "SideInfo",
    props: {
        type: {
            type: String,
            default: 'social' // 'social' or 'email'
        }
    }
};
</script>
  
<style scoped>
a {
    text-decoration: none;
    color: #ccd6f6;
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
    font-size: 18px;
    font-family: "Fira Code", monospace;
    writing-mode: vertical-rl;
    padding: 20px;
    transition: all 0.5s;
}

.email:hover {
    color: #62f9d6;
    transform: translateY(-5px);
}

@media screen and (max-width: 800px) {
    .sideInfo {
        display: none;
    }
}
</style>
  