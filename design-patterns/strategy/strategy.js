//

class Creature {
    constructor(attack, health) {
        this.attack = attack;
        this.health = health;
        this.alive = this.health > 0;
        this.currentDamage = 0;
        // todo
    }
}

class Game {
    constructor(damageStrategy) {
        this.damageStrategy = damageStrategy;
    }

    springTrapOn(creature) {
        this.damageStrategy.damage(creature);
        return creature.alive;
    }
}

class DamageStrategy {
    damage(creature) {
        if (creature.health <= 0) {
            creature.alive = false;
        }
    }
}

class ConstantDamageStrategy extends DamageStrategy {
    damage(creature) {
        creature.health--;
        creature.alive = creature.health > 0;
    }
}

class GrowingDamageStrategy extends DamageStrategy {
    damage(creature) {
        creature.currentDamage++;
        creature.health -= creature.currentDamage;
        creature.alive = creature.health > 0;
    }
}
GrowingDamageStrategy.impact = {};
