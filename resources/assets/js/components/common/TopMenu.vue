<template>
    <nav class="navbar navbar-default navbar-static-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <router-link class="navbar-brand" to="/">Vue-spa</router-link>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <router-link v-if="!user.authenticated" to="/login" tag="li">
                        <a>Login</a>
                    </router-link>
                    <router-link v-if="!user.authenticated" to="/register" tag="li">
                        <a>Register</a>
                    </router-link>
                    <router-link v-if="user.authenticated" to="/profile" tag="li">
                        <a>Profile</a>
                    </router-link>
                    <li v-if="user.authenticated">
                        <a @click.prevent="logout" href="#">Lgout</a>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script>
    import {mapState} from  'vuex'

    export default {
        computed:{
            ...mapState({
                user: state =>state.AuthUser
            })
        }
    }
</script>