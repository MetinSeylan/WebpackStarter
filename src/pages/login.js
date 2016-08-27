var loginForm = new Vue({
    el: '.login-form',
    data: {
        email: null,
        password: null,
        remember: false
    },
    methods:{
        action(){
            this.$http.get('/login').then((response) => {
                alert('test isteği ok')
            }, (response) => {
                alert('endpoint yok hata döndü')
            });
        }
    }
});