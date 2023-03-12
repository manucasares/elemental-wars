import { Card, ManuCard } from '@models/index';
import { $ } from './helpers';

const card1 = new Card(1, 'Jhon', 10, 15);
const card2 = new Card(2, 'Lucia', 14, 8);

const manuCard1 = new ManuCard({ name: 'Manu', hp: 100, ap: 50 });

console.log(card1.showInfo());
console.log(card2.showInfo());

function startBattle() {
  alert('El ganador es player 1');
}

const btnBATTLE = $('#btnStart');
btnBATTLE?.addEventListener('click', () => {
  startBattle();
});
