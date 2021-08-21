import sortCharactersByHealthDesc from '../index';
/*
correct data
*/
test('should sort correctly(given unsorted arr)', () => {
    let testcase = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];

    let ex = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];
    expect(sortCharactersByHealthDesc(testcase)).toEqual(ex);
});

test('should sort correctly(given same arr)', () => {
    let testcase = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    let ex = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];
    expect(sortCharactersByHealthDesc(testcase)).toEqual(ex);
});

test('should sort correctly(given arr with 5 elem)', () => {
    let testcase = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
        { name: 'мечник', health: 5 },
        { name: 'мечник', health: 90 },
    ];

    let ex = [
        { name: 'маг', health: 100 },
        { name: 'мечник', health: 90 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
        { name: 'мечник', health: 5 }
    ];
    expect(sortCharactersByHealthDesc(testcase)).toEqual(ex);
});

test('should sort correctly(given arr with equal health values)', () => {
    let testcase = [
        { name: 'маг', health: 100 },
        { name: 'маг', health: 100 },
        { name: 'маг', health: 100 },
        { name: 'маг', health: 100 },
    ];

    let ex = [
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

test('should return emty arr(given empty arr)', () => {
    let testcase = [];
    let ex = [];
    expect(sortCharactersByHealthDesc(testcase)).toEqual(ex);
});

test('should throw exception(given array with wrong health values)', () => {
    let testArray = ['', '123', [], {}, true, false];
    for (let testcase of testArray) {
        let t = [
            { name: 'маг', health: testcase },
            { name: 'лучник', health: testcase },
            { name: 'мечник', health: testcase }
        ];
        expect(() => {
            sortCharactersByHealthDesc(t).toThrow(Error);
        })
    }
});

test('should throw exception(given array with wrong health values)', () => {
    let testArray = ['', 123, [], {}, true, false];
    for (let testcase of testArray) {
        let t = [
            { name: testcase, health: 100 },
            { name: testcase, health: 70 },
            { name: testcase, health: 100 }
        ];
        expect(() => {
            sortCharactersByHealthDesc(t).toThrow(Error);
        })
    }
});