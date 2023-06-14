import { FindOptions } from "sequelize";

import { Dog } from '../models/dogs';

export const get = async (options: FindOptions) => {
  const foundDogs = await Dog.findAll(options);
  
  return foundDogs;
};

export const getByName = async (name: string) => {
  const foundDog = await Dog.findOne({
    where: {
      name,
    },
  });

  return foundDog;
};

export const add = async (
  name: string,
  color: string,
  tail_length: number,
  weight: number,
) => {
  const createdDog = await Dog.create({name, color, tail_length, weight});

  return createdDog;
};