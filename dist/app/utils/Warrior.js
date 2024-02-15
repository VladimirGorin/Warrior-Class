"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
class Warrior {
    constructor(name, level, hp, armor, speed, damage) {
        this.name = name;
        this.level = level;
        this.hp = hp;
        this.armor = armor;
        this.speed = speed;
        this.damage = damage;
        this.opponent = {
            name: "Some",
            level: 1,
            hp: 100,
            armor: 0,
            speed: 10,
            damage: 10,
        };
        // console.log(`New warrior success created: ${this.name}`);
    }
    attack(oppenentHP) {
        const damage = this.getRandomDamage(0, this.damage);
        const newOppenetHP = (oppenentHP -= damage);
        // this.damage -= this.damage * 1;
        this.opponent.hp = newOppenetHP;
        // console.log(
        //   `\nWarrior ${this.name}:\n\n attacked oppenent ${this.opponent.name}\n hp ${newOppenetHP}\n me damage: ${damage}\n`
        // );
        return newOppenetHP;
    }
    getRandomDamage(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    giveOpponent(opponent) {
        this.opponent = opponent;
    }
}
exports.Warrior = Warrior;
