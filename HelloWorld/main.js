new Vue({
    el: '#app',
    data: {
        title: 'Hello World! First Vue...',
        href: "https://www.google.com/",
        link: "<a href='loftschool.com'>ссылка</a>",
        example: {
            title: 'Hello World!!!',
            coordX: 0
        }
    },
    methods: {
        handleChange(e) {
            this.title = e.target.value;
        },
        onChange(newTitle, e) {
            this.example.title = newTitle;
            this.example.coordX = e.clientX;
        }
    }
});