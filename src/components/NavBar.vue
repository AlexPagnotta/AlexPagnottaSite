<template> 
    <nav class="NavBar navbar is-spaced" role="navigation" aria-label="main navigation">

        <div class="NavBar__brand navbar-brand">
            <a class="navbar-item" href="https://google.it">
                <img src="../assets/logo.png">
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <a class="navbar-item" href="https://google.it">
                        <font-awesome-icon icon="user-secret" />
                    </a>
                    <a class="navbar-item" href="https://google.it">
                        Linkedin
                    </a>
                    <a class="navbar-item" href="https://google.it">
                        Email
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

</style>
