
var app = new Vue({
    el: '#app',
    data: {
      coins: 0
    },
    methods: {
        hackButtonPressed: function () {
            this.coins = this.coins + 1
        }
    }
  })