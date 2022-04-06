new Vue({
    el: '#app',
    data: {
        example: {
            title: 'Hello World!!!',
            coordX: 0
        }
    },
    methods: {
        handleOuter(e) {
            console.log('outer');
        },
        handleInner(e) {
            console.log('inner');
        },
        handleKeydown(e) {
            console.log(e.target.value);
        }
    }
});