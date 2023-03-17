// import { Card, ManuCard } from '@models/index';
import { $ } from './helpers';

function startBattle() {
  alert('El ganador es player 1');
}

const btnBATTLE = $('#btnStart');
btnBATTLE?.addEventListener('click', () => {
  startBattle();
});
