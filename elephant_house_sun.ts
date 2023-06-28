// The Mindful Garden
// File 1

import { Plant, Tree } from './plant';

// Garden
class Garden {
  private plants: Plant[] = [];

  constructor() {}

  addPlant(plant: Plant): void {
    this.plants.push(plant);
  }

  getPlants(): Plant[] {
    return this.plants;
  }
}

// AppleTree
class AppleTree extends Tree {
  constructor() {
    super('AppleTree', 'Green', 5);
  }

  // Methods
  grow() {
    this.height += 2;
    this.width += 1;
  }

  blossom(): void {
    console.log('AppleTree is blossoming!');
  }
}

// RoseBush
class RoseBush extends Plant {
  constructor() {
    super('RoseBush', 'Red', 2);
  }

  // Methods
  grow() {
    this.height += 1;
    this.width += 3;
  }

  smell(): void {
    console.log('RoseBush is smelling sweetly!');
  }
}

const garden = new Garden();

// Adding plants to the Garden
garden.addPlant(new AppleTree());
garden.addPlant(new RoseBush());

// Retrieving all plants in the garden
const plants = garden.getPlants();

for (const plant of plants) 
{
  plant.grow();
  if (plant instanceof AppleTree) {
    plant.blossom();
  } else if (plant instanceof RoseBush) {
    plant.smell();
  }
}