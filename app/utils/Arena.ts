import { Warrior, IWarrior } from "./Warrior";

export class Arena {
  public winner: IWarrior = {
    name: "Some",
    level: 1,
    hp: 100,
    armor: 0,
    speed: 10,
    damage: 10,
  };

  public loser: IWarrior  = {
    name: "Some",
    level: 1,
    hp: 100,
    armor: 0,
    speed: 10,
    damage: 10,
  };

  constructor(public participants: Warrior[]) {}

  figth() {
    const firstWarrior = this.participants[0];
    const secondWarrior = this.participants[1];

    firstWarrior.giveOpponent(secondWarrior);
    secondWarrior.giveOpponent(firstWarrior);

    while (true) {
      firstWarrior.attack(secondWarrior.hp);
      secondWarrior.attack(firstWarrior.hp);

      if (firstWarrior.hp <= 0) {
        this.winner = secondWarrior
        this.loser = firstWarrior

        break
      } else if (secondWarrior.hp <= 0) {
        this.winner = secondWarrior
        this.loser = firstWarrior
        break
      }
    }

    this.getWinner()
  }

  getWinner(){
    console.log(`Winner ${this.winner.name}\n hp: ${this.winner.hp}\n\nLoser ${this.loser.name}\n hp: ${this.loser.hp}`)
  }
}
