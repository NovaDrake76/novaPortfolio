<template>
    <div class="top">
        <img src="https://avatars.githubusercontent.com/u/65428910?v=4" alt="sinuca" class="avatar" />
        <div class="textTop">
            <span class="title">Greetings</span>
            <p class="subTitle">
                Thank you for visiting. My name is Nathan, I'm a Fullstack
                developer. Here you can find some of my works.
            </p>
            <p class="subTitle">
                I'm focused on responsive design, SEO, code quality, etc, and I have
                plenty of experience with Agile Scrum Methodology.
            </p>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "ProfileSection",
};
</script>
  
<style scoped>
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

.avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transition: all 0.5s;
}

@media screen and (max-width: 800px) {
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


    .avatar {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        transition: all 0.5s;
        margin: 0 auto;
    }
}
</style>
  