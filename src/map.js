export default class ErrorRepository {
  constructor() {
    this.map = new Map([[100, 'Continue'], [200, 'OK'], [300, 'Multiple Choices'], [400, 'Bad Request'],
      [500, 'Internal Server Error']]);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
