window.addEventListener("load" , function (){

    let id_list = [ "graph1","graph2","graph3","graph4" ];

    for (let id of id_list){
        const ctx       = document.getElementById(id).getContext('2d');
        const myChart   = new Chart(ctx, {
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

        if (id === "graph3"){

            //予め作ったグラフをデストロイする。
            myChart.destroy();

            //その上で既に作られたグラフに後からデータを入れてみる。(mychartはconstなので、代入はできない。新しい定数に格納する。)
            const destroyed_myChart     = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [293, 122, 243, 556, 882, 223],
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


    }
});
