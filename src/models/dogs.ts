import { sequelize } from '../../config/db';
import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

export interface DogModel extends Model<InferAttributes<DogModel>, InferCreationAttributes<DogModel>> {
  name: string;
  color: string;
  tail_length: number;
  weight: number;
}

export const Dog = sequelize.define<DogModel>('dog', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  tail_length: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  weight: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
}, {
  tableName: 'dogs',
  createdAt: false,
  updatedAt: false,
});

Dog.sync()
  .then(() => {
    console.log('Dog Model synced');
  })
  .catch((error) => {
    console.log(error)
  });
