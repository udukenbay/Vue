new Vue({
    el: '#app',
    data: {
        title: 'Hello World!!!',
    },
    methods: {
        reverseTitle(title) {
            return title.split('').reverse().join('');
        },
    },
});