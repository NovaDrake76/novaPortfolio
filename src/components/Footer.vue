<template>
    <footer>
        <span style="text-align: center">
            Built by
            <a href="https://github.com/NovaDrake76" target="_blank">NovaDrake</a>, designed by
            <a href="https://github.com/bchiang7" target="_blank">Brittany Chiang</a>
        </span>
    </footer>
</template>
  
<script>
export default {
    name: "Footer",
};
</script>
  
<style scoped>
footer {
    padding: 50px 0 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Fira Code", monospace;
}

footer a {
    color: #ccd6f6;
    text-decoration: none;
    transition: color 0.2s;
}

footer a:hover {
    color: #62f9d6;
}
</style>
  