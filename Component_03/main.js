Vue.component('hello', {
    template: "#hello",
    data() {
        return {
            title: 'hello world'
        }
    },
    methods: {
        handleClick() {
            this.title = 'new title'
        }
    },
    mounted() {
        console.log('компонент вмонтирован')
    },
    components: {
        test: {
            template: '<span> локальный компонент </span>'
        }
    }
})

const vueModel = new Vue();

vueModel.$mount('#app');

//На стадии "mount" содержимое DOM узла указанного в свойстве "el" полностью заменяется
//на результат выполнения рендер-функции Vue.