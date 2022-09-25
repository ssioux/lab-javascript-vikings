// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack = () => {
    return this.strength;
  };

  receiveDamage = (damage) => {
    this.health = this.health - damage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage = (damage) => {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health === 0) {
      return `${this.name} has died in act of combat`;
    }
  };

  battleCry = () => {
    return "Odin Owns You All!";
  };
}

// Saxon
class Saxon extends Soldier {





  receiveDamage = (damage) => {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  };
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    
  }

  addViking = (viking) => {
    this.vikingArmy.push(viking);
  };

  addSaxon = (saxon) => {
    this.saxonArmy.push(saxon);
  };

  vikingAttack = () => {
   

        let randomArmyS = Math.ramdom() * this.saxonArmy.length;
        let saxonChosen = Math.floor(randomArmyS);
    
        let randomArmyV = Math.ramdom() * this.vikingArmy.length;
        let vikingChosen = Math.floor(randomArmyV);
    
        let randomViking = this.vikingArmy[vikingChosen]
        let randomSaxon = this.saxonArmy[saxonChosen]
    
       
       let result1 = randomSaxon.receiveDamage(randomViking.attack())
        if (randomSaxon.health === 0){
            this.saxonArmy.splice(randomSaxon, 1);
        }
            return result1;
      };

  

  saxonAttack = () => {
    let randomArmyS = Math.random() * this.saxonArmy.length;
    let saxonChosen = Math.floor(randomArmyS);

    let randomArmyV = Math.random() * this.vikingArmy.length;
    let vikingChosen = Math.floor(randomArmyV);

    let randomViking = this.vikingArmy[vikingChosen]
    let randomSaxon = this.saxonArmy[saxonChosen]

   
   let result2 = randomViking.receiveDamage(randomSaxon.attack())
    if (randomViking.health === 0){
        this.vikingArmy.splice(randomViking, 1);
    }
        return result2;
  };
    


  showStatus = () => {

    if (this.saxonArmy.length === 0){
        return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0){
        return `Saxons have fought for their lives and survived another day...`;
    } else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
        return `Vikings and Saxons are still in the thick of battle.`
    }
  };
}


