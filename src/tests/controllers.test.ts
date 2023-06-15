import cors from 'cors';
import express from 'express';
import request from 'supertest';

import { router } from '../routes/dogs';
import { generateNewDogData } from '../helpers/generateNewDogData';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

describe('Superheroes Controller', () => {
  describe('ping', () => {
    test('should respond with correct text', (done) => {
      request(app)
        .get('/ping')
        .expect(response => {
          if (response.text !== 'Dogshouseservice.Version1.0.1') throw new Error();
        })
        .expect(200, done);
    });
  });

  describe('getDogs', () => {
    test('should respond with 400 if invalid order was passed', (done) => {
      const attribute = 'name';
      const order = 'aaa';
      const limit = 5;

      request(app)
        .get('/dogs')
        .query({ attribute, order, limit })
        .expect(400, done);
    });

    test('should respond with 400 if invalid page number was passed', (done) => {
      const attribute = 'name';
      const pageNumber = -4;
      const limit = 5;

      request(app)
        .get('/dogs')
        .query({ attribute, pageNumber, limit })
        .expect(400, done);
    });

    test('should respond with 400 if invalid limit was passed', (done) => {
      const attribute = 'name';
      const pageNumber = 1;
      const limit = 'aaa';

      request(app)
        .get('/dogs')
        .query({ attribute, pageNumber, limit })
        .expect(400, done);
    });

    test('should respond with array if query is empty', (done) => {
      request(app)
        .get('/dogs')
        .expect(response => {
          expect(Array.isArray(response.body)).toBe(true);
        })
        .expect(200, done);
    });

    test('should respond with array if query data is correct', (done) => {
      const attribute = 'name';
      const order = 'desc';
      const pageNumber = 1;
      const limit = '2';

      request(app)
        .get('/dogs')
        .query({ attribute, order, pageNumber, limit })
        .expect(response => {
          expect(Array.isArray(response.body)).toBe(true);
        })
        .expect(200, done);
    });
  });

  describe('addDog', () => {
    test('should respond with 400 if necessary data was not passed', (done) => {
      request(app)
        .post('/dog')
        .expect(400, done);
    });

    test('should respond with 400 if dog with passed name alreay exists', (done) => {
      const newDogData = generateNewDogData();

      request(app)
        .post('/dog')
        .send(newDogData)
        .then(() => {
          request(app)
            .post('/dog')
            .send(newDogData)
            .expect(400, done);
        });
    });

    test('should create new dog if passed data is correct', (done) => {
      const newDogData = generateNewDogData();

      request(app)
        .post('/dog')
        .send(newDogData)
        .expect(response => {
          if (response.body.name !== newDogData.name) throw new Error();
        })
        .expect(201, done);
    });
  });
});
