const errors = {
  1: 'Ошибка 1',
  2: 'Ошибка 2',
  3: 'Ошибка 3',
  4: 'Ошибка 4',
  5: 'Ошибка 5',
  6: 'Ошибка 6',
  7: 'Ошибка 7',
  8: 'Ошибка 8',
  9: 'Ошибка 9',
};

export default class ErrorRepository {
  constructor() {
    this.map = new Map();
    Object.entries(errors).forEach((element) => {
      this.map.set(Number(element[0]), element[1]);
    });
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
