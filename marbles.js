'use strict';

(() => {
  let marbles;

  const setDefaultValues = () => {
    const defaultValues = {
      player: {
        count: 5,
        next: 0,
      },
      bot: {
        count: 5,
        next: 0,
      },
    };
    return defaultValues;
  };

  marbles = setDefaultValues();

  const arr = ['четное', 'нечетное'];

  const getFirstPlayer = () => {
    const FIGURES = ['камень', 'ножницы', 'бумага'];

    const result = {
      player: 0,
      computer: 0,
    };

    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const getFigure = () => {
      const getFigurePlayer = () => {
        const figureUser = (prompt([...FIGURES].join(', '))).toLowerCase();

        if (!FIGURES.some((elem) => elem.startsWith(figureUser))) {
          getFigurePlayer();
        }

        if (figureUser[0] === 'к') return 'камень';
        if (figureUser[0] === 'н') return 'ножницы';
        if (figureUser[0] === 'б') return 'бумага';
      };

      const figurePlayer = getFigurePlayer();

      const figureComputer =
        FIGURES[getRandomIntInclusive(0, FIGURES.length - 1)];

      console.log(`${figurePlayer[0]} - ${figureComputer[0]}`);

      return [figurePlayer, figureComputer];
    };

    const chekResult = ([player, computer]) => {
      if (
        (player === 'камень' && computer === 'ножницы') ||
        (player === 'ножницы' && computer === 'бумага') ||
        (player === 'бумага' && computer === 'камень')
      ) {
        alert(`
        Бот: ${computer}
        Вы: ${player}
        Результат: Вы выиграли, Вам первому ходить`);
        result.player++;
      } else if (player === computer) {
        alert(`
        Бот: ${computer}
        Вы: ${player}
        Результат: Ничья`);
        const figures = getFigure();
        chekResult(figures);
      } else {
        alert(`
        Бот: ${computer}
        Вы: ${player}
        Результат: Я выиграл, я хожу первым`);
        result.computer++;
      }
    };

    const figures = getFigure();
    chekResult(figures);

    return result;
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let playerNumber;
  const getNumberPlayer = () => {
    playerNumber = prompt(`У тебя ${marbles.player.count} шариков. Загадай число от 1 до ${marbles.player.count}:`);

    if (Number.isNaN(parseFloat(playerNumber)) ||
      playerNumber < 0 || playerNumber > marbles.player.count) {
      getNumberPlayer();
    }

    return [playerNumber % 2 ? 1 : 0, +playerNumber];
  };

  const getAnswerBot = () => {
    const answer = getRandomIntInclusive(0, 1);
    alert(`Я думаю, что ты загадал ${arr[answer]} число. Проверим?`);
    return answer;
  };

  const getNumberBot = () => {
    const num = getRandomIntInclusive(1, marbles.bot.count);
    alert(`Я загадал число шариков от 1 до ${marbles.bot.count}`);

    return [num % 2 ? 1 : 0, +num];
  };

  let answerPlayer;
  const getAnswerPlayer = () => {
    answerPlayer = +confirm(`Число четное? ОК - четное, Отмена - нечетное`);
    return answerPlayer === 1 ? 0 : 1;
  };

  const game = () => {
    const summ = marbles.player.count + marbles.bot.count;

    const check = (num, answer) => {
      if (num[0] === answer) {
        marbles.player.count -= num[1];
        marbles.bot.count += num[1];

        if (marbles.player.count < 0 && marbles.bot.count >= summ) {
          marbles.player.count = 0;
          marbles.bot.count = summ;
        }

        alert(`
        Я угадал и забираю себе шарики.
        У тебя ${marbles.player.count} шариков
        У меня ${marbles.bot.count} шариков`);
      } else {
        marbles.bot.count -= num[1];
        marbles.player.count += num[1];

        if (marbles.bot.count < 0 && marbles.player.count > summ) {
          marbles.bot.count = 0;
          marbles.player.count = summ;
        }

        alert(`
        Я проиграл, ты забираешь себе шарики.
        У тебя ${marbles.player.count} шариков
        У меня ${marbles.bot.count} шариков`);
      }
    };

    const continueGame = () => {
      if (marbles.player.count === 0 || marbles.bot.count === 0) {
        marbles.player.count === 0 ?
        alert(`У тебя нет больше шариков. Я победил!`) :
        alert(`У меня нет больше шариков. Ты победил!`);
        marbles = setDefaultValues();
        return;
      }

      if (marbles.bot.next < marbles.player.next) {
        const numBot = getNumberBot();
        const answerPlayer = getAnswerPlayer();
        marbles.bot.next++;
        marbles.player.next--;
        check(numBot, answerPlayer);
      } else {
        const num = getNumberPlayer();
        const answer = getAnswerBot();
        marbles.player.next++;
        marbles.bot.next--;
        check(num, answer);
      }

      continueGame();
    };

    const {player, computer} = getFirstPlayer();

    if (player > computer) {
      const num = getNumberPlayer();
      const answer = getAnswerBot();
      marbles.player.next++;
      check(num, answer);
      continueGame();
    } else {
      const numBot = getNumberBot();
      const answerPlayer = getAnswerPlayer();
      marbles.bot.next++;
      check(numBot, answerPlayer);
      continueGame();
    }
  };

  window.marbles = game;
})();
