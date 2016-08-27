// Booting

window._ = require('lodash');


window.$ = window.jQuery = require('jquery');


window.Vue = require('vue');
require('vue-resource');



Vue.http.interceptors.push((request, next)  => {

    console.log("%cAjax istekleri öncesi global işlemler varsa(loading vs) burada işle", "color: blue; font-size: x-large");


        next((response) => {

            if (response.status == 401) {

                console.info('cevaptan sonra örnek yetki yok');

            }
            else if(response.status == 404){
                console.error('endpoint yok');
            }
            else if (response.status == 500) {
                console.error('sunucu hatası');
            }

        });
    }
);