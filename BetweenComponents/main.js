Vue.component('hello', {
    props: ['name'],
    template: "#hello"
})

const vueModel = new Vue({
    data() {
        return {
            names: ['John', 'Bill', 'Hank']
        }
    }
});

vueModel.$mount('#app');

//На стадии "mount" содержимое DOM узла указанного в свойстве "el" полностью заменяется
//на результат выполнения рендер-функции Vue.

//Основый взаимодействия компонентов