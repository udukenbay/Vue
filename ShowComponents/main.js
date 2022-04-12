new Vue({
    el: '#app',
    data: {
        show: true,
        num: 0
    },
    methods: {
        change() {
            this.show = !this.show
            this.num = this.num + 1
        }
    }
});