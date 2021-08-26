export interface Predator {
  id: string;
  genesis: string;
  name: string;
  biome: string;
  lifeSpan: string;
  biteForce: number;
}

export const emptyPredator = {
  id: '',
  genesis: '',
  name: '',
  biome: '',
  lifeSpan: '',
  biteForce: 0,
};
