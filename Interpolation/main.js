new Vue({
    el: '#app',
    data: {
        title: 'Hello World!!!',
    },
    computed: {
        reversedTitle() {
            return this.title.split('').reverse().join('')
        },
        newTitle: {
            get() {
                return 'new title';
            },
            set(value) {
                console.log('computed prop seted for', value);
                this.title = 'setted value';
            }
        }
    },
    methods: {
        reverseTitle(title) {
            return title.split('').reverse().join('')
        },
        setupTitle() {
            // this.title = this.newTitle
            this.newTitle = 'vaaaaaluuuue'
            this.title = this.newTitle
        }
    }
});