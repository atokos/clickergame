
var app = new Vue({
    el: '#app',
    data: {
        coins: 0,
        coinsDisplayed: 0,
        coinsPerSecond: 0,
        upgrades: [
            {index: 0, id: "upgrade1", name: "Powershell script", description: "+0.1 coinz/second", increase: 0.1, price: 10, amount: 0, visible : true},
            {index: 1, id: "upgrade2", name: "Download RAM", description: "+1 coin/second",increase: 1, price: 100, amount: 0, visible : false},
            {index: 2, id: "upgrade3", name: "Backdoor Access", description: "+5 coinz/second",increase: 5, price: 1000, amount: 0, visible : false},
        ],
    },
    methods: {
        hackButtonPressed: function () {
            this.coins = this.coins + 1;
            this.coinsDisplayed = Math.round(this.coins);
        },
        buyUpgrade: function (index) {
            this.coins = this.coins - this.upgrades[index].price;
            this.coinsDisplayed = Math.round(this.coins);
            this.upgrades[index].price = Math.round(this.upgrades[index].price * 1.15);
            this.upgrades[index].amount = this.upgrades[index].amount + 1;
            this.upgrades[index + 1].visible = true;
            this.coinsPerSecond = this.coinsPerSecond + this.upgrades[index].increase
        },
        updateCoins: function () {
            this.coins = this.coins + this.coinsPerSecond / 10
            this.coinsDisplayed = Math.round(this.coins);
        }
    },
    mounted: function () {
        window.setInterval(() => {
            this.updateCoins()
        }, 100)
    }
  })

