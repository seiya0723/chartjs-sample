console.log("これはscript.js");
//ここでHTMLに対してイベントの割り当てを行ってはいけない

//ここに書いてもid="button"はレンダリングされていないからイベントをセットできない
//$("#button").on("click", function(){ console.log("Button!"); });

//ページ全体が読込された時(イベント)に実行する処理
window.addEventListener("load" , function (){

    //ここはページが全て読み込まれた時に実行する
    console.log("ページが読み込まれた");

    var count = 0;

    console.log(count + 1);

    // let と const とは？
    // let は再宣言不可能な変数 constは再宣言不可能な定数


    //varは再宣言が可能になっているため、原因不明の不具合のもとになる
    //var count = 10;

    //letは再宣言ができないためこれはエラーになる。
    //let count = 10;

    //constは再宣言ができない、代入もできない。計算はOK
    //const count = 10;
    //count = 20;

    //jQueryのイベントをここに書く
    //CSSのセレクタと同じ記法
    //$("#button").on("click", function(){ console.log("Button!"); });
    
    // .button であれば class="button"
    // #button であれば id="button"
    // button であれば buttonタグ

    // .on("発火条件(トリガー)", 処理内容); 
    // トリガーには click以外にも input や change などがある。
    $("#button").on("click", function(){

        console.log(count);
        console.log("Button!");

        count++;
        //count = 1 + count;
    });

    // $("#button")
    // document.getElementById("button") ←こちらのほうが高速


    //buttonタグに対してイベントをセットする
    $("button").on("click", function(){ 

        //これだとbuttonタグの一番上の要素のvalue属性が取得されてしまう。
        //console.log( $("button").val() );

        //イベントが発火した要素そのものがthisになる。
        //そのためクリックされた要素のvalue属性が取得できる
        console.log( $(this).val() );

    });


    //12個ある.monthを取得する
    let elems   = $(".month");

    //このelemsはjQueryのオブジェクトであり、配列ではない。この中に12個分のDOMが含まれている
    console.log(elems);

    let month_list  = [];

    for (let i=0;i<elems.length;i++){
        //添字を指定してDOMを取り出すには、jQueryの.eq()を使う必要がある。
        //console.log(elems.eq(i));
        //内部の文字列を取得するjQueryメソッド.text()を実行する
        console.log(elems.eq(i).text());

        //Pythonでは.append()、JavaScriptでは.push()
        month_list.push(elems.eq(i).text());
    }

    console.log(month_list);



    //============JavaScriptにおけるforループと配列===========================

    // 0から10になるまで1ずつ加算するforループ
    for (let i=0;i<10;i++){
        console.log(i);
    }
    /*
    for i in range(10):
        print(i)

    */

    let numbers = [0,1,2,3,4];

    //配列内の要素を取り出す
    for (let number of numbers){
        console.log(number);
    }
    //添字を指定する
    for (let i=0;i<numbers.length;i++){
        console.log(numbers[i]);
    }
    /*
    numbers = [0,1,2,3,4]

    #配列内の要素を取り出す
    for number in numbers:
        print(number)

    #添字を指定する
    for i in range(len(numbers)):
        print(numbers[i])
    */

    //============JavaScriptにおけるforループと配列===========================

});

