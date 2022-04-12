new Vue({
    el: '#app',
    data: {
        title: 'Hello World!!!',
        activeClass: 'active',
        errorClass: 'error',
        changed: false
    },
    methods: {
        setupTitle() {
            this.changed = !this.changed
            // this.title = "new title"
        }
    },
    // watch: {
    //     title(value) {
    //         // ввиде методов написать те свойства за которыми хотим следить - у нас это title
    //         this.changed = true
    //     }        
    // }
});