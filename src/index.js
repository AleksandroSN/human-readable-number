module.exports = function toReadable(number) {
    const dictionary = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    const workNumber = number.toString().split("");
    let result = "";

    switch (workNumber.length) {
        case 1:
            workNumber.forEach((elem) => {
                switch (elem) {
                    case "0":
                        return (result += dictionary[elem]);
                    case "1":
                        return (result += dictionary[elem]);
                    case "2":
                        return (result += dictionary[elem]);
                    case "3":
                        return (result += dictionary[elem]);
                    case "4":
                        return (result += dictionary[elem]);
                    case "5":
                        return (result += dictionary[elem]);
                    case "6":
                        return (result += dictionary[elem]);
                    case "7":
                        return (result += dictionary[elem]);
                    case "8":
                        return (result += dictionary[elem]);
                    case "9":
                        return (result += dictionary[elem]);
                }
            });
            break;

        case 2:
            if (number < 20) {
                result += dictionary[number];
            } else {
                workNumber[1] === "0"
                    ? (result += dictionary[workNumber[0].concat(0)])
                    : (result += `${dictionary[workNumber[0].concat(0)]} ${
                          dictionary[workNumber[1]]
                      }`);
            }
            break;

        case 3:
            result = `${dictionary[workNumber[0]]} hundred`;
            if (workNumber[1] === "0" && workNumber[2] === "0") {
                return result;
            } else if (workNumber[1] === "0") {
                result += ` ${dictionary[workNumber[2]]}`;
            } else if (workNumber[2] === "0") {
                result += ` ${dictionary[workNumber[1].concat(0)]}`;
            } else if (number % 100 < 20) {
                result += ` ${dictionary[workNumber[1].concat(workNumber[2])]}`;
            } else {
                result += ` ${dictionary[workNumber[1].concat(0)]} ${
                    dictionary[workNumber[2]]
                }`;
            }
            break;
        default:
            "WRONG WRONG WRONG ! The number must not exceed three characters";
    }

    return result;
};
