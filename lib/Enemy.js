const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character{
    constructor(name, weapon) {
    
    super(name)

    // this.name = name;
    this.weapon = weapon;
    this.potion = new Potion ();
    
    // this.health = Math.floor(Math.random() * 10 + 85);
    // this.strength = Math.floor(Math.random() * 5 + 5);
    // this.agility = Math.floor(Math.random() * 5 + 5);
    }
    
    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
      };
}

Object.create(Character.prototype);


// function Enemy(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
//   this.potion = new Potion();

//   this.health = Math.floor(Math.random() * 10 + 85);
//   this.strength = Math.floor(Math.random() * 5 + 5);
//   this.agility = Math.floor(Math.random() * 5 + 5);
// }

// In 10.5 These were all "deleted and replaced with Character prototype inheritance"
// Enemy.prototype.getHealth =function() {
//     return `${this.name}'s health is now ${this.health}!'`;
//   }
//   // Enemy is not dead
//   Enemy.prototype.isAlive = function() {
//     if (this.health === 0) {
//       return false;
//     }
//     return true;
//   };
//   // Enemy can get hurt
//   Enemy.prototype.reduceHealth = function(health) {
//     this.health -= health;
  
//     if (this.health < 0) {
//       this.health = 0;
//     }
//   };
//   // Enemy swings with force
//   Enemy.prototype.getAttackValue = function() {
//     const min = this.strength - 5;
//     const max = this.strength + 5;
  
//     return Math.floor(Math.random() * (max - min) + min);
//   };



module.exports = Enemy;