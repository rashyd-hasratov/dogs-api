import { Request, Response } from "express";
import { FindOptions } from "sequelize";

import { formatQueryToKey } from "../helpers/formatQueryToKey";
import { isCorrectSortOder } from "../helpers/isCorrectSortOrder";
import { isNonEmptyString } from "../helpers/isNonEmptyString";
import { isNonNegativeNumber } from "../helpers/isNonNegativeNumber";

import {
  get,
  getByName,
  add,
} from '../services/dogs';

export const ping = (req: Request, res: Response) => {
  res.send('Dogshouseservice.Version1.0.1');
};

export const getDogs = async (req: Request, res: Response) => {
  const {
    attribute,
    order = 'asc',
    pageNumber = 1,
    limit,
  } = req.query;

  const findOptions: FindOptions = {};
  const orderToString = String(order);
  const pageNumberToNum = Number(pageNumber);
  const limitToNum = Number(limit);

  if (!isCorrectSortOder(orderToString)
    || !isNonNegativeNumber(pageNumberToNum) 
    || (limit && !isNonNegativeNumber(limitToNum))
  ) {
    res.sendStatus(400);

    return;
  }

  if (attribute) {
    const attributeFormatted = formatQueryToKey((String(attribute)));

    findOptions.order = [
      [attributeFormatted, orderToString],
    ];
  }

  if (limit) {
    findOptions.limit = limitToNum;
    findOptions.offset = (pageNumberToNum - 1) * limitToNum;
  }

  try {
    const foundDogs = await get(findOptions);

    res.send(foundDogs);
  } catch {
    res.sendStatus(500);
  }
};

export const addDog = async (req: Request, res: Response) => {
  const {
    name,
    color,
    tail_length,
    weight,
  } = req.body;

  const tailLengthToNum = Number(tail_length);
  const weightToNum = Number(weight);

  if (
    !isNonEmptyString(name)
    || !isNonEmptyString(color)
    || !isNonNegativeNumber(tailLengthToNum)
    || !isNonNegativeNumber(weightToNum)
  ) {
    res.sendStatus(400);

    return;
  }

  try {
    const foundDog = await getByName(name);

    if (foundDog) {
      res.sendStatus(400);

      return;
    }

    const createdDog = await add(name, color, tailLengthToNum, weightToNum);

    res.statusCode = 201;
    res.send(createdDog);
  } catch {
    res.sendStatus(500);
  }
};