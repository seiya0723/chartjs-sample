window.addEventListener("load" , function (){

    let id_list     = [ "graph1","graph2","graph3","graph4" ];

    const charts    = {};

    for (let id of id_list){
        const ctx       = document.getElementById(id).getContext('2d');

        //Chartのオブジェクトを idをキーにして格納する
        charts[id]      = new Chart(ctx, {
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
        charts[$(this).val()].destroy();

        //親要素も消す
        $("#" + $(this).val()).parent("div").css({"display":"none"});


    });


});

