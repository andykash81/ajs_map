import ErrorRepository from '../map';

test('class ErrorRepository has code true', () => {
  const error = new ErrorRepository();
  const correct = 'Bad Request';
  expect(error.translate(400)).toBe(correct);
});

test('class ErrorRepository has code false', () => {
  const error = new ErrorRepository();
  const correct = 'Unknown error';
  expect(error.translate(600)).toBe(correct);
});
