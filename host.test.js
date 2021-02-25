const Host = require('./host');

describe('host >', () => {

  let host;

  beforeEach(() => {
    host = new Host();
  });

  test('should greet a stranger', () => {
    expect(host.greet()).toBe('Hello Stranger');
  });
  
  test('should greet a named person', () => {
    expect(host.greet('John')).toBe('Hello John');
  });

  test('should farewell a stranger', () => {
    expect(host.farewell()).toBe('Goodbye Stranger');
  });
  
  test('should farewell a named person', () => {
    expect(host.farewell('Mary')).toBe('Goodbye Mary');
  });
});
