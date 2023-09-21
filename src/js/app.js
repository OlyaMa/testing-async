import GameSavingLoader from './gameSavingLoader';

(async () => {
  try {
    console.log(await GameSavingLoader.load());
  } catch (error) {
    console.log('error');
  }
})();
