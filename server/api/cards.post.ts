export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    let cards = [
        'https://github.com/TamKanitnon/portfolios/blob/main/Multimedia/images/watermelon.png?raw=true',
        'https://github.com/TamKanitnon/portfolios/blob/main/Multimedia/images/grapes.png?raw=true',
        'https://github.com/TamKanitnon/portfolios/blob/main/Multimedia/images/orange.png?raw=true',
        'https://github.com/TamKanitnon/portfolios/blob/main/Multimedia/images/lemon.png?raw=true',
        'https://github.com/TamKanitnon/portfolios/blob/main/Multimedia/images/tomato.png?raw=true',
        'https://github.com/TamKanitnon/portfolios/blob/main/Multimedia/images/pineapple.png?raw=true',
    ]

    let agent = [0, 1, 2, 3, 4, 5];
    let award = body.award;
    let index = body.index;
    let allow = [];
    let result = 0;

    for(let i = 0; i < agent.length; i++) {
        if(award[i]) {
            allow.push(agent[i])
        }
    }

    result = Math.floor(Math.random() * allow.length);
    shuffleCards(agent);
    changeCards(allow[result], agent, index);

    return [
        cards[agent[0]],
        cards[agent[1]],
        cards[agent[2]],
        cards[agent[3]],
        cards[agent[4]],
        cards[agent[5]],
    ];
})

function shuffleCards(cards: number[]) {
    let currentIndex = cards.length;
    let randomIndex, temporaryValue;
    while(currentIndex != 0) {
        randomIndex = Math.floor(currentIndex * Math.random());
        currentIndex = currentIndex - 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
}

function changeCards(want: number, cards: number[], choose: number) {
    for(let i = 0; i < cards.length; i++) {
        if(want === cards[i]) {
            cards[i] = cards[choose];
            cards[choose] = want;
        }
    }
}