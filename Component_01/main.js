Vue.component('hello', {
    template: '<h1 @click="handleClick">{{title}}</h1>',
    data() {
        return {
            title: 'hello world'
        }
    },
    methods: {
        handleClick() {
            this.title = 'new title'
        }
    }
})

const vueModel = new Vue();

vueModel.$mount('#app');

//На стадии "mount" содержимое DOM узла указанного в свойстве "el" полностью заменяется
//на результат выполнения рендер-функции Vue.