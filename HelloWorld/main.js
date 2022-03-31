new Vue({
    el: '#app',
    data: {
        title: 'Hello World! First Vue...',
        href: "https://www.google.com/",
        link: "<a href='loftschool.com'>ссылка</a>"
    },
    methods: {
        handleChange(e) {
            this.title = e.target.value;
        }
    }
});