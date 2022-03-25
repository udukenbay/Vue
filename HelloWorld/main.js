new Vue({
    el: '#app',
    data: {
        title: 'Hello World! First Vue...'
    },
    methods: {
        handleChange(e) {
            this.title = e.target.value;
        }
    }
});