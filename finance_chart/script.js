//処理の流れ
/*
1. 予めグローバル変数に空のChartオブジェクトを作って入れておく
2. リロードのボタンがあれば処理を発動。前もってdestroyを発動し、対象のグラフに対象のデータを抜き取り、描画する。

*/
const ID_LIST   = [ "graph1","graph2","graph3","graph4" ];
const CHARTS    = {};

window.addEventListener("load" , function (){

    for (let id of ID_LIST){
        const ctx       = document.getElementById(id).getContext('2d');

        //Chartのオブジェクトを idをキーにして格納する
        CHARTS[id]      = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }


    //ボタンが押されたとき、グラフを消す。もしくはnew Chartを入れることで、新しいチャートを指定できる。
    $(".graph_button").on("click", function(){

        // クリックされたボタンが value="graph1" であれば、charts["graph1"].destroy()
        CHARTS[$(this).val()].destroy();
        //親要素も消す
        //$("#" + $(this).val()).parent("div").css({"display":"none"});

    });

    $(".graph_chk").on("change",function(){ 

        if ( $(this).is(":checked") ){
            $("#" + $(this).val()).parent("div").css({"display":"none"});
        }
        else{
            $("#" + $(this).val()).parent("div").css({"display":""});
        }

    });

    $(".graph_regene").on("click", function(){ graph_regene(this); });


});

function graph_regene(button){

    let cost1   =  $(button).siblings("label").children(".cost1").is(":checked") ;
    let cost2   =  $(button).siblings("label").children(".cost2").is(":checked") ;
    let cost3   =  $(button).siblings("label").children(".cost3").is(":checked") ;
    let cost4   =  $(button).siblings("label").children(".cost4").is(":checked") ;
    let earn1   =  $(button).siblings("label").children(".earn1").is(":checked") ;

    let month_elems = $(".month_value");
    let cost1_elems = $(".cost1_value");
    let cost2_elems = $(".cost2_value");
    let cost3_elems = $(".cost3_value");
    let cost4_elems = $(".cost4_value");
    let earn1_elems = $(".earn1_value");

    let labels      = [];
    let cost1_data  = [];
    let cost2_data  = [];
    let cost3_data  = [];
    let cost4_data  = [];
    let earn1_data  = [];

    for ( let i=0;i<month_elems.length;i++ ){ labels.push( month_elems.eq(i).text() + "月" ); }   

    for ( let i=0;i<cost1_elems.length;i++ ){ cost1_data.push( Number(cost1_elems.eq(i).text()) ); }   
    for ( let i=0;i<cost2_elems.length;i++ ){ cost2_data.push( Number(cost2_elems.eq(i).text()) ); }   
    for ( let i=0;i<cost3_elems.length;i++ ){ cost3_data.push( Number(cost3_elems.eq(i).text()) ); }   
    for ( let i=0;i<cost4_elems.length;i++ ){ cost4_data.push( Number(cost4_elems.eq(i).text()) ); }   
    for ( let i=0;i<earn1_elems.length;i++ ){ earn1_data.push( Number(earn1_elems.eq(i).text()) ); }

    console.log(button)
    console.log($(button).val());

    //グラフのタイプを取得
    let type    = $(button).siblings("select").val();

    const ctx   = document.getElementById($(button).val()).getContext('2d');

    CHARTS[$(button).val()].destroy();
    //Chartのオブジェクトを idをキーにして格納する
    CHARTS[$(button).val()] = new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [
                { label:"原材料費", data:cost1_data, },
                { label:"人件費"  , data:cost2_data, },
                { label:"広告費"  , data:cost3_data, },
                { label:"光熱費等", data:cost4_data, },
                { label:"売上"    , data:earn1_data, },
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}







