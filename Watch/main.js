new Vue({
    el: '#app',
    data: {
        title: 'Hello World!!!',
        changed: false
    },
    methods: {
        setupTitle() {
            this.title = "new title"
        }
    },
    watch: {
        title(value) {
            // ввиде методов написать те свойства за которыми хотим следить - у нас это title
            this.changed = true
        }        
    }
});