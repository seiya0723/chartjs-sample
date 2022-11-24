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
    
    $("#button").on("click", function(){

        console.log(count);
        console.log("Button!");

        count++;
        //count = 1 + count;

    });


    // $("#button")
    // document.getElementById("button") ←こちらのほうが高速

});

