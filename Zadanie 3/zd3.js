var AllHoleArr = []; //Массив для всех номеров и их индексов
var AllNumArr = []; //Массив для всех номеров и их индексов
var IndexArr = []; //Массив для индексов
var AllArr = []; // финальный массив
var AllHoleArrNumbersUnique = []; // массив уникальных чисел дыр
function com(arr) {
    for (var i = 0; i < arr.length; i++) { //взяли число массива
        var AllHoles = 0; // для кол-ва дырок в числе
        // разбиваем число на строку и переносим в массив
        var StrArr = arr[i].toString();
        var StrBreakNum = StrArr.split('');
        // подсчет дырок в числе
        for (var j_1 = 0; j_1 <= StrBreakNum.length; j_1++) {
            if (StrBreakNum[j_1] == '0')
                AllHoles++;
            if (StrBreakNum[j_1] == '4')
                AllHoles++;
            if (StrBreakNum[j_1] == '6')
                AllHoles++;
            if (StrBreakNum[j_1] == '8')
                AllHoles = AllHoles + 2;
            if (StrBreakNum[j_1] == '9')
                AllHoles++;
        }
        //соединение в массив количество дырок и индекса числа 
        AllHoleArr.push({
            index: "".concat(i),
            hole: "".concat(AllHoles)
        });
        // соединение в массив числа и их индексы
        var NArrNum = arr[i];
        AllNumArr.push({
            index: "".concat(i),
            num: "".concat(NArrNum)
        });
        // создание массива дыр для последующей сортировке уникальности
        AllHoleArrNumbersUnique.push("".concat(AllHoles));
    }
    // функция для сортировки массива по дырам
    function sortByIndexHole(a, b) {
        if (a.hole > b.hole)
            return 1;
        if (a.hole == b.hole)
            return 0;
        if (a.hole < b.hole)
            return -1;
    }
    ;
    //  сортировка
    AllHoleArr.sort(sortByIndexHole);
    // функция для уникальных элементов
    function unique(arr) {
        return Array.from(new Set(arr));
    }
    ;
    // поиск уникальных элементов
    AllHoleArrNumbersUnique = unique(AllHoleArrNumbersUnique);
    AllHoleArrNumbersUnique.sort(function (a, b) { return a - b; });
    // сортировка и последующий занос всего цыферного массива по всем заданным в задаче параметрам
    var j = 0;
    for (var i = 0; i < AllHoleArrNumbersUnique.length; i++) {
        var indexArrNum = [];
        var Holes = AllHoleArrNumbersUnique[i];
        for (var count = 0; count < AllHoleArr.length; count++)
            if (Holes == AllHoleArr[count].hole) {
                var index = AllHoleArr[j].index;
                indexArrNum.push(AllNumArr[index].num);
                j++;
            }
        indexArrNum.sort(function (a, b) { return a - b; });
        AllArr.splice(i, 0, indexArrNum);
    }
    // вывод масиива
    var NarrFinal;
    NarrFinal = AllArr.join(',');
    console.log(NarrFinal);
}
var NArr = [767351, -183448, 601492.536, 861445, -13459.295, 414250, 234382, 712327.237, 48679, -257846, 943949.876, 268535, -521742];
com(NArr);
