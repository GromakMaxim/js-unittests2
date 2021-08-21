import sortCharactersByHealthDesc from '../index';
/*
correct data
*/
test('should return true', () => {
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