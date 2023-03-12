import { CardConstructorParams } from '@customTypes/index';
import { v4 as uuidv4 } from 'uuid';

export class Card {
  id: number;
  name: string;
  ap: number;
  hp: number;

  constructor(id: number, name: string, ap: number, hp: number) {
    (this.id = id), (this.name = name), (this.ap = ap), (this.hp = hp);
  }

  showInfo(): string {
    return `Id:${this.id}\nName: ${this.name}\n AP: ${this.ap}\n HP:${this.hp}`;
  }
}

// Manu
export class ManuCard {
  id: string;
  name: string;
  ap: number;
  hp: number;

  constructor(params: CardConstructorParams) {
    const { name, hp, ap } = params;

    this.id = uuidv4();
    this.name = name;
    this.ap = ap;
    this.hp = hp;
  }

  showInfo(): string {
    return `Id:${this.id}
    Name: ${this.name}
    AP: ${this.ap}
    HP:${this.hp}`;
  }
}
