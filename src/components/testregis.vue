<template>
<div>
    username: <input type="text" v-model="username" required> <br>
    password: <input type="password" v-model="password" required> <br>
    name: <input type="text" v-model="name" required> <br>
    lasname: <input type="text" v-model="lastname" required> <br>
    <button @click="signup">signup</button>
</div>
    
</template>
<script>
export default {
    name: 'testregis',
    data () {
        return {
            username: '',
            password: '',
            name: '',
            lastname: '',
        }
    },
    methods: {
        signup() {
            console.log(this.username);
            console.log(this.password);
            console.log(this.name);
            console.log(this.lastname);
        }
    }
}

</script>