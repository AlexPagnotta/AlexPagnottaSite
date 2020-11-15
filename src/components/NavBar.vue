<template> 
    <nav class="NavBar navbar is-spaced" role="navigation" aria-label="main navigation">

        <div class="NavBar__brand navbar-brand">
            <a class="navbar-item" href="https://google.it">
                <img src="../assets/images/logo.png">
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <a class="navbar-item" href="mailto:alex.pagnotta@outlook.it">
                        <font-awesome-icon :icon="['far', 'envelope']" class="NavBar__icon"/>
                    </a>
                    <a class="navbar-item" href="https://www.linkedin.com/in/alex-pagnotta/">
                        <font-awesome-icon :icon="['fab', 'linkedin-in']" class="NavBar__icon"/>
                    </a>
                    <a class="navbar-item" href="curriculum.pdf" download>
                        <font-awesome-icon :icon="['far', 'file']" class="NavBar__icon"/>
                    </a>
                </div>
            </div>
        </div>

    </nav>
</template>

<script>

export default {
  name: 'NavBar'
}

</script>

<style scoped>

.NavBar__brand  img{
    max-height: 60px;
}

.NavBar__icon  {
    font-size: 24px; 
}

</style>
