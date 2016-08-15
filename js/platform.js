/**
 * Created by CUI on 2016/8/11.
 */
$(document).ready(function () {
//            alert("OK");
    $("input").keydown(function (event) {
        switch (event.which) {
            case 37:
                btn_move_left();
                break;
            case 39:
                btn_move_right();
                break;
            default:
                //alert("Key:" + event.which);
        }
    });
});
window.onload = main;
var move_speed = 10;
var min_btn_position = 0;
var max_btn_position = getWidth();
function main() {
    creat_brick();//生成方块
    show_info(getWidth(), getHeight());
}
function getWidth() {
    return document.body.clientWidth;
}
function getHeight() {
    return document.body.clientHeight;
}
function show_info(width, height, brick_num) {
    document.getElementById("client_width").innerHTML = "" + width;
    document.getElementById("client_height").innerHTML = "" + height;
    document.getElementById("brick_num").innerHTML = "" + brick_num;
}

function btn_move_left() {
    var button = document.getElementById("button");
    var btn_x = button.offsetLeft - move_speed;
    if (btn_x < 0)btn_x = min_btn_position;
    button.style.left = btn_x + "px";
}
function btn_move_right() {
    var button = document.getElementById("button");
    var btn_x = button.offsetLeft + move_speed;
    if (btn_x > 1699)btn_x = max_btn_position - 200;
    button.style.left = btn_x + "px";
}
//初始化方块
function creat_brick(){
    var row_num=10;//一行的方块的个数
    var line_num=5;//一列的方块的个数
    var brick_id=0;//砖块的id
    var brick_left=20;//砖块离左侧边距的位置
    var brick_top=20;//砖块离上边距的位置
    var i=0;
    var j=0;
    //获得方块需要填放的位置
    var board=$(".board");
    for(;i<line_num;i++){
        for(j=0;j<row_num;j++){
            //求id
            brick_id=i*10+j+1;
            brick_left=20+70*j;
            brick_top=20+40*i;
            var new_div="<div class='brick red' id='"+brick_id+"' style='position: absolute;left: "+brick_left+"px;top: "+brick_top+"px;'></div>";
            board.append(new_div);
            //document.write("<div class='brick red' id='"+brick_id+"' style='position: absolute;left: "+brick_left+"px;top: "+brick_top+"px;'></div>");
        }
    }
}