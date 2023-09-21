import { GameSavingLoader } from '../gameSavingLoader';

beforeEach(() => {
  jest.resetModules();
});

test('GameSavingLoader.load() should return error', async () => {
  jest.doMock('../reader.js', () => jest.fn(() => Promise.reject('error')));
  const { GameSavingLoader } = require('../gameSavingLoader');
  const result = await GameSavingLoader.load();
  expect(result).toBe('error');
});

test('GameSavingLoader.load() should return parsed data', async () => {
  const result = await GameSavingLoader.load();
  expect(result).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
});
