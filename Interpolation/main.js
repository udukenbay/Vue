new Vue({
    el: '#app',
    data: {
        title: 'Hello World!!!',
    },
    computed: {
        reversedTitle() {
            return this.title.split('').reverse().join('');
        }
    },
    methods: {
        reverseTitle(title) {
            return title.split('').reverse().join('');
        },
    },
});