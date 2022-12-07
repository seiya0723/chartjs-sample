window.addEventListener("load" , function (){

    let numbers = [1,2,3,4,5,6,7,8,9,];
    
    //TODO:JavaScriptのforループ

    //配列のインデックス番号(添字)を指定する方法。Pythonの for i in range(len(numbers)) と同様
    for (let i=0;i<numbers.length;i++){
        console.log(numbers[i]);
    }

    //for of文を使うことでPythonの for in と同様にループできる。
    for (let number of numbers){
        console.log(number);
    }


    //TODO:jQueryのDOMに対してのforループ

    //複数の要素を取得する。
    let temp_elems  = $(".temp");

    //jQueryでループする(jQueryオブジェクトで添字を指定する。.eq()を使って添字を指定)
    for (let i=0;i<temp_elems.length;i++){
        console.log(temp_elems.eq(i));
    }

    //for of 文を使うの場合、 $()で囲まなければ、JavaScriptのDOMとして扱われる
    for (let temp_elem of temp_elems){
        console.log(temp_elem);
        console.log($(temp_elem));
    }


});

