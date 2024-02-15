export interface IWarrior {
    name: string;
    level: number;
    hp: number;
    armor: number;
    speed: number;
    damage: number;
}

export class Warrior {
    public opponent: IWarrior = {
      name: "Some",
      level: 1,
      hp: 100,
      armor: 0,
      speed: 10,
      damage: 10,
    };

    constructor(
      public name: string,
      public level: number,
      public hp: number,
      public armor: number,
      public speed: number,
      public damage: number
    ) {
      // console.log(`New warrior success created: ${this.name}`);
    }

    attack(oppenentHP: number): number {
      const damage = this.getRandomDamage(0, this.damage);

      const newOppenetHP = (oppenentHP -= damage);
      // this.damage -= this.damage * 1;

      this.opponent.hp = newOppenetHP;

      // console.log(
      //   `\nWarrior ${this.name}:\n\n attacked oppenent ${this.opponent.name}\n hp ${newOppenetHP}\n me damage: ${damage}\n`
      // );

      return newOppenetHP;
    }

    getRandomDamage(max: number, min: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    giveOpponent(opponent: IWarrior) {
      this.opponent = opponent;
    }
}
