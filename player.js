// player
class Player {
    constructor() {
        this.health = 100;
        this.shield = 0;
        this.position = { x: 0, y: 0, z: 0 };
        this.abilities = {
            teleport: false,
            invisibility: false,
            turrets: 0,
        };
    }

    move(direction) {
        // Logic to move the player
    }

    useAbility(ability) {
        // Logic to use abilities
    }

    reload() {
        // Logic to reload weapon
    }
}