/*
Function which determines the likelihood of the car encountering an
obstacle on the left or right side. There is a 50/50 chance of 
either outcome
*/
export function getObstacleEvents() {
    const coinFlip = Boolean(Math.random() > 0.5);
    return { 
      'ObstacleLeft': coinFlip, 
      'ObstacleRight': !coinFlip 
    };
  }
