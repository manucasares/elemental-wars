//CLASS

class Card {
    id: number;
    name: string;
    ap: number;
    hp: number;

    constructor(id: number, name: string, ap: number, hp: number) {
        (this.id = id), (this.name = name), (this.ap = ap), (this.hp = hp);
    }

    showInfo() {
        return `Id:${this.id}\nName: ${this.name}\n AP: ${this.ap}\n HP:${this.hp}`;
    }
}

const card1 = new Card(1, 'Jhon', 10, 15);
const card2 = new Card(2, 'Lucia', 14, 8);
const card3 = new Card(3, 'Spikear', 13, 10);
const card4 = new Card(4, 'Lisa', 17, 5);

console.log(card1.showInfo());
console.log(card2.showInfo());
console.log(card3.showInfo());
console.log(card4.showInfo());

function startBattle() {
    alert("El ganador es player 1");
}

const btnBATTLE = document.querySelector('#btnStart');
btnBATTLE?.addEventListener('click', () => {
    startBattle();
});
