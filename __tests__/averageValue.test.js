const {menghitungRerata, kelulusan} = require('../averageValue');

//line 4-14 merupakan unit testing dalam beberapa kondisi
//keadaan true
// test("Menghitung rerata true", () => {
//     const classValue = [80, '75', 84, 'a'];
//     expect(menghitungRerata(classValue)).toEqual(82.25);
// })

//keadaan false
// test("Menghitung rerata false", () => {
//     const classValue = [80, '75', 84, 'a'];
//     expect(() => menghitungRerata(classValue)).toThrow();
// })

describe("Kalkulasi nilai", () => {
    test("Menghitung rerata true", () => {
        const classValue = [80, 75, 84, 90];
        expect(menghitungRerata(classValue)).toEqual(82.25);
    });
    test("Kelulusan dengan nilai true", () => {
        const classValue = [80, 75, 84, 90];
        expect(kelulusan(classValue, "izal")).toEqual(true);
    });
    test("Kelulusan dengan nilai false", () => {
        const classValue = [50, 45, 34, 50];
        expect(kelulusan(classValue, "izal")).toEqual(false);
    });
})