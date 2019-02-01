var app = new Vue({
    el: '.static',
    data: {
        isActive: true,
        hasError: true
    }
});

var app2 = new Vue({
    el: '.static-2',
    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
});