'use strict';

(() => {
  const figuresLang = {
    ENG: {
      fig: ['rock', 'scissors', 'paper'],
      comp: 'Computer',
      us: 'You',
      res: 'Result',
      win: 'You win!',
      nowin: 'Computer win!',
      draw: 'Draw in the game!',
      more: 'Shall we continue?',
      sure: 'Are you sure you want to get out?',
      text: 'Ок. The game is over!',
    },
    EN: {
      fig: ['rock', 'scissors', 'paper'],
      comp: 'Computer',
      us: 'You',
      res: 'Result',
      win: 'You win!',
      nowin: 'Computer win!',
      draw: 'Draw in the game!',
      more: 'Shall we continue?',
      sure: 'Are you sure you want to get out?',
      text: 'Ок. The game is over!',
    },
    ES: {
      fig: ['piedra', 'tijeras', 'papel'],
      comp: 'Computadora',
      us: 'Usted',
      res: 'Resultado',
      win: 'Has ganado!',
      nowin: 'La computadora ganó!',
      draw: 'Empate!',
      more: 'Сontinuamos?',
      sure: '¿Seguro que quieres salir?',
      text: 'Picar. ¡Se acabó el juego!',
    },
    RUS: {
      fig: ['камень', 'ножницы', 'бумага'],
      comp: 'Компьютер',
      us: 'Вы',
      res: 'Результат',
      win: 'Вы выиграли!',
      nowin: 'Компьютер выиграл',
      draw: 'Ничья!',
      more: 'Продолжим?',
      sure: 'Точно хотите выйти?',
      text: 'Жаль. Игра окончена!',
    },
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = (lang) => {
    // получили значение от пользователя
    let figure;
    const getFigurePlayer = () => {
      figure = (prompt([...lang].join(', '))).toLowerCase();

      if (!lang.some((elem) => elem.startsWith(figure))) {
        getFigurePlayer();
      }

      figure = lang.find((item) => item.includes(figure, 0));

      return figure;
    };

    const user = lang.indexOf(getFigurePlayer(), 0);

    // получили от компа значение
    const pc = getRandomIntInclusive(0, lang.length - 1);

    console.log(`${lang[pc][0]} - ${lang[user][0]}`);

    // возвращаем массив из полученных значений
    return [user, pc];
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const getFigures = (obj, key = 'RUS') => {
      if (obj.hasOwnProperty(key)) {
        return obj[key].fig;
      }
    };

    const lang = getFigures(figuresLang, language);
    console.log('lang: ', lang);

    return function start() {
      // проверяем полученный результат
      console.log(figuresLang);
      const chekResult = ([user, pc]) => {
        if (
          user === 0 && pc === 1 ||
          user === 1 && pc === 2 ||
          user === 2 && pc === 0
        ) {
          alert(`
          ${figuresLang[language]?.comp ?? 'Компьютер'}: ${lang[pc]}
          ${figuresLang[language]?.us ?? 'Вы'}: ${lang[user]}
          ${figuresLang[language]?.res ?? 'Результат'}: ${figuresLang[language]?.win ?? 'Вы победили!'}`);
          result.player++;
        } else if (user === pc) {
          alert(`
          ${figuresLang[language]?.comp ?? 'Компьютер'}: ${lang[pc]}
          ${figuresLang[language]?.us ?? 'Вы'}: ${lang[user]}
          ${figuresLang[language]?.res ?? 'Результат'}: ${figuresLang[language]?.draw ?? 'Ничья!'}`);
        } else {
          alert(`
          ${figuresLang[language]?.comp ?? 'Компьютер'}: ${lang[pc]}
          ${figuresLang[language]?.us ?? 'Вы'}: ${lang[user]}
          ${figuresLang[language]?.res ?? 'Результат'}: ${figuresLang[language]?.nowin ?? 'Компьютер выиграл!'}`);
          result.computer++;
        }
      };

      // продолжение игры
      const continueGame = () => {
        const maybeMore = confirm(`${figuresLang[language]?.more ?? 'Продолжим?'}`);
        if (!maybeMore) {
          const youSure = confirm(`${figuresLang[language]?.sure ?? 'Точно хотите выйти?'}`);
          if (youSure) {
            alert(`
            ${figuresLang[language]?.text ?? 'Жаль. Игра окончена!'}
            ${figuresLang[language]?.us ?? 'Ваш результат'}: ${result.player}
            ${figuresLang[language]?.comp ?? 'Результат компьютера'}: ${result.computer}`);
            return;
          }

          const figures = getFigure(lang);
          chekResult(figures);
          continueGame();
        }
        const figures = getFigure(lang);
        chekResult(figures);
        continueGame();
      };

      const figures = getFigure(lang);
      chekResult(figures);
      continueGame();
    };
  };

  window.rsp = game;
})();
