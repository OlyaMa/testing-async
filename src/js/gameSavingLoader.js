import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

export class GameSavingLoader {
  static async load() {
    try {
      const readed = await read();
      return new GameSaving(JSON.parse(await json(readed)));
    } catch (error) {
      return error;
    }
  }
}
