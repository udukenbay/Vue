const vueModel = new Vue({
    data: {
        title: 'hello world',
        testProp: ''
    },
    methods: {
        testMeth() {
            this.$data.newProp = '123';
        }
    }
});

vueModel.$mount('#app');

setTimeout(() => {
    vueModel.$data.title = 'Поменялось извне'
}, 2000);
//На стадии "mount" содержимое DOM узла указанного в свойстве "el" полностью заменяется
//на результат выполнения рендер-функции Vue.