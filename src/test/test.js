import sortCharactersByHealthDesc from '../index';
/*
correct data
*/
test('should sort correctly(given unsorted arr)', () => {
  const testcase = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const ex = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortCharactersByHealthDesc(testcase)).toEqual(ex);
});

test('should sort correctly(given same arr)', () => {
  const testcase = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const ex = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortCharactersByHealthDesc(testcase)).toEqual(ex);
});

test('should sort correctly(given arr with 5 elem)', () => {
  const testcase = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'мечник', health: 5 },
    { name: 'мечник', health: 90 },
  ];

  const ex = [
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 90 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'мечник', health: 5 },
  ];
  expect(sortCharactersByHealthDesc(testcase)).toEqual(ex);
});

test('should sort correctly(given arr with equal health values)', () => {
  const testcase = [
    { name: 'маг', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'маг', health: 100 },
  ];

  const ex = [
    { name: 'маг', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'маг', health: 100 },
  ];
  expect(sortCharactersByHealthDesc(testcase)).toEqual(ex);
});

/*
incorrect data
*/

test('should return empty arr(given empty arr)', () => {
  const testcase = [];
  const ex = [];
  expect(sortCharactersByHealthDesc(testcase)).toEqual(ex);
});

test('should throw exceprion(given arr with empty obj)', () => {
  const testcase = [{}, {}, {}, {}];
  expect(()=> {
    sortCharactersByHealthDesc(testcase);
  }).toThrow();
});

test('should throw exception(given array with wrong health values)', () => {
  const testArray = ['', '123', [], {}, true, false];

  for (const testcase of testArray) {
    let t = [
      { name: 'маг', health: testcase },
      { name: 'лучник', health: testcase },
      { name: 'мечник', health: testcase },
    ];
    expect(()=>{
      sortCharactersByHealthDesc(t);
    }).toThrow();
  }
});

test('should throw exception(given array with wrong name values)', () => {
  const testArray = ['', 123, [], {}, true, false];
  for (const testcase of testArray) {
    const t = [
      { name: testcase, health: 100 },
      { name: testcase, health: 70 },
      { name: testcase, health: 100 },
    ];
    expect(()=>{
      sortCharactersByHealthDesc(t);
    }).toThrow();
  }
});

test('should throw exception(given array with wrong health values)', () => {
  const t = [
    { name: 123, health: 100 },
    { name: 'Maxim', health: 70 },
    { name: 'Alex', health: 100 },
  ];

  expect(()=>{
      sortCharactersByHealthDesc(t);
    }).toThrow();
});

test('checking that to be won t work', () => {
  let testcase = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 }
  ];
  const result = sortCharactersByHealthDesc(testcase);
  expect(result).not.toBe([{ name: 'маг', health: 100 }, { name: 'мечник', health: 10 }]);
});
