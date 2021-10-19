const Potion = require('../lib/Potion.js');

// This is test 1
// test('creates a health potion object', () => {
//     const potion = new Potion('health');
  
//     expect(potion.name).toBe('health');
//     expect(potion.value).toEqual(expect.any(Number));
//   });

  test('creates a random potion object', () => {
    const potion = new Potion();
    // They aren't teaching us how to write a test. Just here is some code first.
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
  });