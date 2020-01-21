class Fighter {
  constructor(name, damage, hp, strenght, agility, Wins, Losses) {
    this.name = name,
      this.damage = damage,
      this.hp = hp,
      this.strenght = strenght,
      this.agility = agility,
      this.combatHistory = {
        Wins: Wins,
        Losses: Losses
      },
      Fighter.prototype.getName = function () {
        console.log(this.name);
      },
      Fighter.prototype.getDamage = function () {
        console.log(this.damage);
      },
      Fighter.prototype.getAgility = function () {
        console.log(this.agility);
      },
      Fighter.prototype.getHelth = function () {
        console.log(this.hp);
      },
      Fighter.prototype.getStrenght = function () {
        console.log(this.strenght);
      },
      Fighter.prototype.attack = function (defender) {
        let sto = 100;
        if (Math.ceil(Math.random() * sto) > defender.hp) {
          defender.hp -= this.damage;
          this.combatWins = this.addWin;
          defender.Losses = defender.addLoss;
          console.log(`${this.name} make ${this.damage} damage to ${defender.name}`);
        } else {
          console.log(`${defender.name} attak missed`);
        }
      },
      Fighter.prototype.logCombatHistory = function () {
        console.log(`Name: ${this.name}, ${this.Wins}`);
      },
      Fighter.prototype.heal = function (a) {
        let sto = 100;
        if (this.hp + a > sto) {
          this.hp += a;
        }
      },
      Fighter.prototype.dealDamage = function (b) {
        if (this.hp - b >= 0) {
          this.hp -= b;
        } else {
          this.hp = 0;
        }
      },
      Fighter.prototype.addWin = function () {
        this.Wins = this.Wins + 1;
      },
      Fighter.prototype.addLoss = function () {
        this.Losses = this.Losses + 1;
      };
  }
}
