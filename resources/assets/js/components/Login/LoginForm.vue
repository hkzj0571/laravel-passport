<template>
    <form class="form-horizontal" @submit.prevent="login">

        <div class="form-group" :class="{'has-error' : errors.has('email')}">
            <label for="email" class="col-md-4 control-label">E-Mail Address</label>
            <div class="col-md-6">
                <input v-model="email" v-validate="{ rules: { required: true, email: true} }" id="email" type="email"
                       class="form-control" name="email" value="" required>
                <span class="help-block" v-show="errors.has('email')">{{errors.first('email')}}</span>
            </div>
        </div>

        <div class="form-group" :class="{'has-error' : errors.has('password')}">
            <label for="password" class="col-md-4 control-label">Password</label>
            <div class="col-md-6">
                <input v-model="password" v-validate="{ rules: { required: true, min: 6} }" id="password"
                       type="password" class="form-control" name="password" required>
                <span class="help-block" v-show="errors.has('password')">{{errors.first('password')}}</span>
            </div>
        </div>


        <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
                <button type="submit" class="btn btn-primary">
                    Login
                </button>
            </div>
        </div>
    </form>

</template>

<script>
    import JWTToken from './../../helpers/jwt'

    export default{
        data(){
            return {
                email : ' ',
                password:'',
            }
        },
        methods:{
            login(){
                let formData = {
                    email : this.email,
                    password : this.password,
                }
                this.$store.dispatch('loginRequest', formData).then(response => {
                    this.$router.push({name: 'profile'})
                })
            }
        }
    }

</script>