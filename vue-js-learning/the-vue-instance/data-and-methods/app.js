var data = { a: 1 }

var vm = new Vue({
    data: data
});

vm.a == data.a;

vm.a = 2;
console.log(data.a);

data.a = 3;
console.log(vm.a);