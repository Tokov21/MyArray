/*
! 1
*/
function sayType(data) {
    if (isNaN(data)) {
        return "Не знаю";
    }

    switch (typeof data) {
        case "number":
            return "Это число";
        case "string":
            return "Это строка";

        default:
            return "Не знаю";
    }
}

/*
! 2
*/
function randNum() {
    return Math.round(Math.random() * 100);
}

/*
! 3 - 4
*/
function getAlmostSquareStars() {
    let variable = "";

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            variable += "*";
        }

        variable += "\n";
    }

    return console.log(variable);
}

/*
! 5
*/
const arr = [];

for (let index = 0; index < 10; index++) {
    arr.push(index + 1);
}

for (let i = 0; i < 10; i += 2) {
    delete arr[i];
}

/*
! 6
*/
const arr1 = [];

for (let index = 0; index < 5; index++) {
    arr1.push(index + 1);
}

/*
 * first solution
 */
// for (let index = 10; index > 5; index--) {
//     arr1.splice(5, 0, index);
// }

/*
 * second solution
 */
for (let i = 0; i < 5; i++) {
    arr1[i + 5] = i + 6;
}

/*
! 7
*/
const arr2 = [];

for (let i = 0; i < 5; i++) {
    arr2[i] = `user${i + 1}`;
}

const arr2Length = arr2.length;

/*
 * first solution
 */
// for (let i = 0; i < arr2Length; i++) {
//     if (arr2[i].endsWith(2) || arr2[i].endsWith(3) || arr2[i].endsWith(4)) {
//         delete arr2[i];
//     }
// }

/*
 * second solution
 */
// for (let i = 0; i < arr2Length; i++) {
//     if (
//         arr2[i].lastIndexOf(2) !== -1 ||
//         arr2[i].lastIndexOf(3) !== -1 ||
//         arr2[i].lastIndexOf(4) !== -1
//     ) {
//         delete arr2[i];
//     }
// }

/*
 * third solution
 */
arr2.forEach((value, index) => {
    if (value.endsWith(2)) {
        arr2.splice(index, 3);
    }
});

/*
! 8
*/
arr2.forEach((value) => {
    arr1.push(value);
});

/*
! 9
*/
const str = arr1.join(" или ");

/*
! 10
*/
const arr3 = [];

for (let i = 0; i < 6; i++) {
    arr3.push((i + 2) * (i + 2));
}

const arr4 = arr3.map((value) => {
    return Math.sqrt(value);
});

/*
! 11
*/
const arr5 = [];

for (let i = 0; i < 30; i++) {
    arr5.push(Math.round(Math.random() * 30));
}

function findIndexLessTwentyMoreTen() {
    return arr5.findIndex((value) => {
        return value > 10 && value < 20;
    });
}

/*
! 12
*/
function makeid(length) {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
}

const arr6 = [];

for (let i = 0; i < 30; i++) {
    arr6[i] = makeid(10);
}

const arr7 = arr6.filter((value) => value.includes("o") && value.includes("p"));
