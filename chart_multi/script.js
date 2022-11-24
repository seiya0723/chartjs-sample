window.addEventListener("load" , function (){

    draw_line();
    draw_bar();
    draw_bar_line();

});


function draw_line(){

    let x_elem  = $(".month");
    let y_elem  = $(".temp");

    let x_list  = [];
    let y_list  = [];

    for (let x of x_elem){
        x_list.push(x.innerText + "月");
    }
    for (let y of y_elem){
        y_list.push(Number(y.innerText));
    }

    const ctx = document.getElementById("graph1").getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: x_list,
            datasets: [{
                label:"月ごとの気温",
                data: y_list,
                backgroundColor: 'crimson', //色名だけでなく、CSSのカラーコードも指定できる
                borderColor: 'crimson',
                borderWidth: 3, // 折れ線グラフは細いと値のマウスカーソルを合わせるのが難しいので、3~5ぐらいにしておく

                pointStyle: "rectRot", //https://misc.0o0o.org/chartjs-doc-ja/charts/line.html
                pointRadius: 8,
                pointHoverRadius: 12,
            }]
        },
        options: {
            scales: {
                y: {
                    min: 0,
                    max: 40,
                }
            }
        }

    });


}
function draw_bar(){

    let x_elem  = $(".month");
    let y_elem  = $(".humi");

    let x_list  = [];
    let y_list  = [];

    for (let x of x_elem){
        x_list.push(x.innerText + "月");
    }
    for (let y of y_elem){
        y_list.push(Number(y.innerText));
    }

    const ctx = document.getElementById("graph2").getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: x_list,
            datasets: [{
                label:"月ごとの湿度",
                data: y_list,
                backgroundColor: 'deepskyblue', //色名だけでなく、CSSのカラーコードも指定できる
                borderColor: 'deepskyblue',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    min: 0,
                    max: 100,
                }
            }
        }

    });


}
function draw_bar_line(){

    let x_elem      = $(".month");
    let y_elem_1    = $(".humi");
    let y_elem_2    = $(".temp");

    let x_list      = [];
    let y_list_1    = [];
    let y_list_2    = [];

    for (let x of x_elem){
        x_list.push(x.innerText + "月");
    }
    for (let y of y_elem_1){
        y_list_1.push(Number(y.innerText));
    }
    for (let y of y_elem_2){
        y_list_2.push(Number(y.innerText));
    }

    //複合グラフの作り方
    //https://www.chartjs.org/docs/latest/charts/mixed.html
    //https://www.chartjs.org/docs/latest/axes/cartesian/
    //https://www.chartjs.org/docs/latest/axes/labelling.html

    //下記は2.8.0でしか通用しない
    //http://www.kogures.com/hitoshi/javascript/chartjs/composite.html

    //このchart.js日本語ドキュメントの書き方も古いバージョンなので参考にしないように
    //https://misc.0o0o.org/chartjs-doc-ja/axes/cartesian/

    const ctx = document.getElementById("graph3").getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: x_list,
            datasets: [
                {
                    label:"月ごとの気温",
                    data: y_list_2,

                    backgroundColor: 'crimson',
                    borderColor: 'crimson',
                    borderWidth: 3,
                    pointStyle: "rectRot",
                    pointRadius: 8,
                    pointHoverRadius: 12,

                    yAxisID: 'y_left'
                },
                {
                    label:"月ごとの湿度",
                    data: y_list_1,
                    backgroundColor: 'deepskyblue',
                    borderColor: 'deepskyblue',
                    borderWidth: 1,

                    type:"bar",
                    yAxisID: 'y_right',
                },
            ]
        },
        options: {
            scales: {
                "y_left": {
                    position: "left",

                    min: -10,
                    max: 40,

                    ticks: {
                        stepSize: 5,
                    },
                    title: {
                        display:true,
                        text: "気温(℃)",

                    },
                },
                "y_right": {
                    position: "right",
                    min: 0,
                    max: 100,
                    ticks: {
                        stepSize: 10,
                    },
                    title: {
                        display:true,
                        text: "湿度(％)",
                    },

                }
            }
        }
    });
}
