let AllHoleArr = [];//Массив для всех номеров и их индексов
let AllNumArr=[];//Массив для всех номеров и их индексов
let IndexArr=[];//Массив для индексов
let AllArr = [];// финальный массив
let AllHoleArrNumbersUnique = [];// массив уникальных чисел дыр

function com (arr){

    for(let i=0; i<arr.length; i++){ //взяли число массива
        let AllHoles : number=0;// для кол-ва дырок в числе
        // разбиваем число на строку и переносим в массив
        let StrArr = arr[i].toString();
        let StrBreakNum= StrArr.split('');

        // подсчет дырок в числе
        for(let j=0; j<=StrBreakNum.length; j++){
            if(StrBreakNum[j]=='0') AllHoles ++;
            if(StrBreakNum[j]=='4') AllHoles ++;
            if(StrBreakNum[j]=='6') AllHoles ++;
            if(StrBreakNum[j]=='8') AllHoles=AllHoles+2;
            if(StrBreakNum[j]=='9') AllHoles ++;
        }

        //соединение в массив количество дырок и индекса числа 
        AllHoleArr.push({
            index: `${i}`,
            hole: `${AllHoles}`
        });

        // соединение в массив числа и их индексы
        let NArrNum = arr[i]
        AllNumArr.push({
            index: `${i}`,
            num: `${NArrNum}`
        });

        // создание массива дыр для последующей сортировке уникальности
        AllHoleArrNumbersUnique.push(`${AllHoles}`)
    }

    // функция для сортировки массива по дырам
    function sortByIndexHole(a, b) {
        if (a.hole > b.hole) return 1;
        if (a.hole == b.hole) return 0;
        if (a.hole < b.hole) return -1;
    };

    //  сортировка
    AllHoleArr.sort(sortByIndexHole);

// функция для уникальных элементов
    function unique(arr) {
        return Array.from(new Set(arr));
    };

    // поиск уникальных элементов
    AllHoleArrNumbersUnique = unique(AllHoleArrNumbersUnique);
    AllHoleArrNumbersUnique.sort( (a, b) => a - b );

    // сортировка и последующий занос всего цыферного массива по всем заданным в задаче параметрам
    let j : number = 0;
    for (let i=0; i<AllHoleArrNumbersUnique.length; i++){
        let indexArrNum = []
        let Holes = AllHoleArrNumbersUnique[i]
        for(let count = 0; count<AllHoleArr.length; count++)
        if (Holes == AllHoleArr[count].hole){
            let index = AllHoleArr[j].index;
            indexArrNum.push(AllNumArr[index].num);
            j++;    
        }
        indexArrNum.sort( (a, b) => a - b );
        AllArr.splice(i,0,indexArrNum)
    }
    // вывод масиива
    let NarrFinal :any;
    NarrFinal = AllArr.join(',');
    console.log(NarrFinal);
}


let NArr = [767351, -183448, 601492.536, 861445, -13459.295, 414250, 234382, 712327.237, 48679, -257846, 943949.876, 268535, -521742];

com(NArr)
