import ErrorRepository from '../app/errorrepository.js';

test('01 ErrorRepository.translate: Проверка существующих ошибок', () => {
  const rep = new ErrorRepository();

  expect(rep.translate(1)).toBe('Ошибка 1');
});

test('01 ErrorRepository.translate: Проверка не существующих ошибок', () => {
  const rep = new ErrorRepository();

  expect(rep.translate(100500)).toBe('Unknown error');
});
