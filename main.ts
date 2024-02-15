import { Warrior } from "./app/utils/Warrior";
import { Arena } from "./app/utils/Arena";

const firstWarrior = new Warrior("Berserk", 1, 100, 0, 10, 10);
const secondWarrior = new Warrior("Grifith", 1, 100, 0, 10, 10);

const arena = new Arena([firstWarrior, secondWarrior])
arena.figth()

// const firstWarrior = new Warrior("Berserk", 1, 100, 0, 10, 10);
// const secondWarrior = new Warrior("Grifith", 1, 100, 0, 10, 10);

// firstWarrior.giveOpponent(secondWarrior);
// secondWarrior.giveOpponent(firstWarrior);

// firstWarrior.attack(secondWarrior.hp);
// secondWarrior.attack(firstWarrior.hp);
