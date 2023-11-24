'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = lang => {
    // получили значение от пользователя
    const getFigurePlayer = () => {
      const figureUser = (prompt([...FIGURES_RUS].join(', '))).toLowerCase();

      if (!FIGURES_RUS.some((elem) => elem.startsWith(figureUser))) {
        getFigurePlayer();
      }

      if (figureUser[0] === 'к') return 'камень';
      if (figureUser[0] === 'н') return 'ножницы';
      if (figureUser[0] === 'б') return 'бумага';
    };

    const figurePlayer = getFigurePlayer();

    // получили от компа значение
    const figureComputer =
      FIGURES_RUS[getRandomIntInclusive(0, FIGURES_RUS.length - 1)];

    console.log(`${figurePlayer[0]} - ${figureComputer[0]}`);

    // возвращаем массив из полученных значений
    return [figurePlayer, figureComputer];
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      // проверяем полученный результат
      const chekResult = ([player, computer]) => {
        if (
          (player === 'камень' && computer === 'ножницы') ||
          (player === 'ножницы' && computer === 'бумага') ||
          (player === 'бумага' && computer === 'камень')
        ) {
          alert(`
          Компьютер: ${computer}
          Вы: ${player}
          Результат: Вы выиграли`);
          result.player++;
        } else if (player === computer) {
          alert(`
          Компьютер: ${computer}
          Вы: ${player}
          Результат: Ничья`);
        } else {
          alert(`
          Компьютер: ${computer}
          Вы: ${player}
          Результат: Компьютер выиграл`);
          result.computer++;
        }
      };

      // продолжение игры
      const continueGame = () => {
        const maybeMore = confirm('Продолжим?');
        if (!maybeMore) {
          const youSure = confirm('Точно хотите выйти?');
          if (youSure) {
            alert(`
            Жаль. Игра окончена!
            Ваш результат: ${result.player}
            Результат компьютера: ${result.computer}`);
            return;
          }

          const figures = getFigure();
          chekResult(figures);
          continueGame();
        }
        const figures = getFigure();
        chekResult(figures);
        continueGame();
      };

      const figures = getFigure();
      chekResult(figures);
      continueGame();
    };
  };

  window.rsp = game;
})();
