<template>
    <div class="control">
        <button v-on:click="startGame()" v-show="show">Start Game</button>
        <h1>{{ message }}</h1>
    </div>

    <div class="awards">
        <div class="award" v-bind:class="{'highlight': awards[0]}" v-on:click="selectAwards(0)">
            <img src="../public/images/watermelon.png" alt="">
            <h3>฿ 10</h3>
        </div>
        <div class="award" v-bind:class="{'highlight': awards[1]}" v-on:click="selectAwards(1)">
            <img src="../public/images/grapes.png" alt="">
            <h3>฿ 100</h3>
        </div>
        <div class="award" v-bind:class="{'highlight': awards[2]}" v-on:click="selectAwards(2)">
            <img src="../public/images/orange.png" alt="">
            <h3>฿ 1,000</h3>
        </div>
        <div class="award" v-bind:class="{'highlight': awards[3]}" v-on:click="selectAwards(3)">
            <img src="../public/images/lemon.png" alt="">
            <h3>฿ 10,000</h3>
        </div>
        <div class="award" v-bind:class="{'highlight': awards[4]}" v-on:click="selectAwards(4)">
            <img src="../public/images/tomato.png" alt="">
            <h3>฿ 100,000</h3>
        </div>
        <div class="award" v-bind:class="{'highlight': awards[5]}" v-on:click="selectAwards(5)">
            <img src="../public/images/pineapple.png" alt="">
            <h3>฿ 1,000,000</h3>
        </div>
    </div>

    <div class="cards">
        <div class="card" v-bind:class="{'move-0': moves[0], 'flipped': flips[0], 'shuffle': shufs[0], 'highlight': highl[0]}" v-on:click="selectCard(0)">
            <div class="front"><img v-bind:src="images[0].image" alt=""></div>
            <div class="back"></div>
        </div>
        <div class="card" v-bind:class="{'move-1': moves[1], 'flipped': flips[1], 'shuffle': shufs[1], 'highlight': highl[1]}" v-on:click="selectCard(1)">
            <div class="front"><img v-bind:src="images[1].image" alt=""></div>
            <div class="back"></div>
        </div>
        <div class="card" v-bind:class="{'move-2': moves[2], 'flipped': flips[2], 'shuffle': shufs[2], 'highlight': highl[2]}" v-on:click="selectCard(2)">
            <div class="front"><img v-bind:src="images[2].image" alt=""></div>
            <div class="back"></div>
        </div>
        <div class="card" v-bind:class="{'move-3': moves[3], 'flipped': flips[3], 'shuffle': shufs[3], 'highlight': highl[3]}" v-on:click="selectCard(3)">
            <div class="front"><img v-bind:src="images[3].image" alt=""></div>
            <div class="back"></div>
        </div>
        <div class="card" v-bind:class="{'move-4': moves[4], 'flipped': flips[4], 'shuffle': shufs[4], 'highlight': highl[4]}" v-on:click="selectCard(4)">
            <div class="front"><img v-bind:src="images[4].image" alt=""></div>
            <div class="back"></div>
        </div>
        <div class="card" v-bind:class="{'move-5': moves[5], 'flipped': flips[5], 'shuffle': shufs[5], 'highlight': highl[5]}" v-on:click="selectCard(5)">
            <div class="front"><img v-bind:src="images[5].image" alt=""></div>
            <div class="back"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: `Welcome to cards lucky game`,
            show: true,
            ready: false,
            moves: [true, true, true, true, true, true],
            flips: [false, false, false, false, false, false],
            shufs: [false, false, false, false, false, false],
            highl: [false, false, false, false, false, false],
            awards: [true, true, true, false, false, false],

            images: [
                {
                    image: 'https://github.com/TamKanitnon/portfolios/blob/main/Multimedia/images/watermelon.png?raw=true',
                    award: '10'
                },
                {
                    image: 'https://github.com/TamKanitnon/portfolios/blob/main/Multimedia/images/grapes.png?raw=true',
                    award: '100'
                },
                {
                    image: 'https://github.com/TamKanitnon/portfolios/blob/main/Multimedia/images/orange.png?raw=true',
                    award: '1,000'
                },
                {
                    image: 'https://github.com/TamKanitnon/portfolios/blob/main/Multimedia/images/lemon.png?raw=true',
                    award: '10,000'
                },
                {
                    image: 'https://github.com/TamKanitnon/portfolios/blob/main/Multimedia/images/tomato.png?raw=true',
                    award: '100,000'
                },
                {
                    image: 'https://github.com/TamKanitnon/portfolios/blob/main/Multimedia/images/pineapple.png?raw=true',
                    award: '1,000,000'
                }
            ]
        }
    },
    methods: {
        flipped(action = false) { // true = open card, false = close card
            this.flips[0] = action;
            this.flips[1] = action;
            this.flips[2] = action;
            this.flips[3] = action;
            this.flips[4] = action;
            this.flips[5] = action;
        },

        supply() {
            this.moves[0] = !this.moves[0];
            setTimeout(() => this.moves[1] = !this.moves[1], 300);
            setTimeout(() => this.moves[2] = !this.moves[2], 600);
            setTimeout(() => this.moves[3] = !this.moves[3], 900);
            setTimeout(() => this.moves[4] = !this.moves[4], 1200);
            setTimeout(() => this.moves[5] = !this.moves[5], 1500);
        },

        shuffle() {
            this.shufs[0] = true;
            setTimeout(() => this.shufs[0] = false, 500);
            setTimeout(() => this.shufs[1] = true, 300);
            setTimeout(() => this.shufs[1] = false, 800);
            setTimeout(() => this.shufs[2] = true, 600);
            setTimeout(() => this.shufs[2] = false, 1100);
            setTimeout(() => this.shufs[3] = true, 900);
            setTimeout(() => this.shufs[3] = false, 1400);
            setTimeout(() => this.shufs[4] = true, 1200);
            setTimeout(() => this.shufs[4] = false, 1700);
            setTimeout(() => this.shufs[5] = true, 1500);
            setTimeout(() => this.shufs[5] = false, 2000);
        },

        startGame() {
            this.show = false;
            this.flipped(true);
            setTimeout(() => this.flipped(false), 2000);
            setTimeout(() => {
                this.supply(); 
                for(let i = 0; i < this.images.length; i++) {
                    this.images[i] = '';
                }
            }, 3000);
            setTimeout(() => this.shuffle(), 5000);
            setTimeout(() => this.shuffle(), 6000);
            setTimeout(() => this.supply(), 8500);
            setTimeout(() => this.ready = true, 10300);
        },

        selectAwards(i) {
            this.awards[i] = !this.awards[i];
        },

        async selectCard(i) {
            if(this.ready) {
                let input = {
                    index: i,
                    award: this.awards
                }
                this.images = await $fetch('/api/cards', { method: 'post', body: input})
                this.flips[i] = true;
                this.highl[i] = true;
                this.ready = false;
                setTimeout(() => {
                    this.flipped(true);
                    this.message = `Congratulations!!! You received award is money ${this.images[i].award} bath`;
                }, 1500);
            }
        }
    }
}
</script>

<style scoped>
    .control {
        margin: 40px 0;
        text-align: center;
    }
    .control button {
        width: 90px;
        height: 40px;
        cursor: pointer;
        margin: 0 5px;
    }
    .award img {
        width: 50px;
        height: 50px;
    }
    .cards img {
        width: 70px;
        height: 70px;
    }

    .awards {
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .award {
        border: 1px solid #bdb7b7;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 180px;
        height: 80px;
        border-radius: 10px;
        cursor: pointer;
    }

    .cards {
        /* border: 1px solid #bdb7b7; */
        width: 1180px;
        height: 660px;
        margin: 40px auto;
        position: relative;
    }
    .card {
        border: 1px solid #bdb7b7;
        width: 180px;
        height: 265px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 0px;
        left: 500px;
        transition: top 0.3s ease, left 0.3s ease, transform 0.5s linear;
        transform-style: preserve-3d;
    }

    .front, .back {
        backface-visibility: hidden;
        position: absolute;
        border-radius: 10px;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    .front {
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotateY(180deg);
    }
    .back {
        background-image: url("https://www.thairath.co.th/static/img/horoscope/tarot/tarot-card-back.jpg");
        background-position: center center;
        background-size: cover;
        backface-visibility: hidden;
    }

    @keyframes shuffle {
        0% { 
            transform: translateX(0);
        }
        50% {
            transform: translateX(150%);
        }
        100% {
            transform: translateX(0);
        }
    }
    .shuffle {
        animation: shuffle 0.5s linear;
    }

    .flipped {
        transform: rotateY(180deg);
    }
    .highlight {
        box-shadow: 0px 0px 2px 2px rgb(48, 235, 48);
    }

    .move-0 {
        top: 395px;
        left: 0;
    }
    .move-1 {
        top: 395px;
        left: 200px;
    }
    .move-2 {
        top: 395px;
        left: 400px;
    }
    .move-3 {
        top: 395px;
        left: 600px;
    }
    .move-4 {
        top: 395px;
        left: 800px;
    }
    .move-5 {
        top: 395px;
        left: 1000px;
    }

    @media screen and (max-width: 1230px) {
        .cards {
            width: 580px;
            height: 945px;
        }
        .card {
            left: 200px;
        }
        .move-0 {
            top: 395px;
            left: 0;
        }
        .move-1 {
            top: 395px;
            left: 200px;
        }
        .move-2 {
            top: 395px;
            left: 400px;
        }
        .move-3 {
            top: 680px;
            left: 0;
        }
        .move-4 {
            top: 680px;
            left: 200px;
        }
        .move-5 {
            top: 680px;
            left: 400px;
        }
    }

    @media screen and (max-width: 620px) {
        .cards {
            width: 380px;
            height: 1230px;
        }
        .card {
            left: 0;
        }
        .move-0 {
            top: 395px;
            left: 0;
        }
        .move-1 {
            top: 395px;
            left: 200px;
        }
        .move-2 {
            top: 680px;
            left: 0;
        }
        .move-3 {
            top: 680px;
            left: 200px;
        }
        .move-4 {
            top: 965px;
            left: 0;
        }
        .move-5 {
            top: 965px;
            left: 200px;
        }
    }

    @media screen and (max-width: 420px) {
        .cards {
            width: 180px;
            height: 1690px;
        }
        .card {
            left: 0;
        }
        .move-0 {
            top: 395px;
            left: 0;
        }
        .move-1 {
            top: 680px;
            left: 0;
        }
        .move-2 {
            top: 965px;
            left: 0;
        }
        .move-3 {
            top: 1250px;
            left: 0;
        }
        .move-4 {
            top: 1535px;
            left: 0;
        }
        .move-5 {
            top: 1820px;
            left: 0;
        }
    }
</style>