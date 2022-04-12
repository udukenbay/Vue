Vue.component('child', {
    template: '#child',
    methods: {
        handleClick() {
            this.$emit('clickEmitted', {
                string: 'new title', 
                num: 123
            });
        }
    }
})

Vue.component('hello', {
    props: ['name'],
    template: "#hello",
    data() {
        return {
            title: 'world'
        }
    },
    methods: {
        changeTitle(payload) {
            this.title = payload.string
        }
    }
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

//как сообщить ИЗ КОМПОНЕНТЫ, что в нем что-то произошло