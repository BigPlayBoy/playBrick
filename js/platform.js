/**
 * Created by CUI on 2016/8/11.
 */

//定义一些变量
var move_speed = 10;
var min_btn_position = 0;
var max_btn_position = 540;
var min_ball_left = 20;
var min_ball_top = 20;
var max_ball_left = 680;
var max_ball_top = 554;
var t;//清楚小球的timeout
var X_speed = 2;//小球水平方向的速度
var Y_speed = 2;//小球垂直方向的速度
$(document).ready(function () {
    //alert("OK");
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

function main() {
    create_brick();//生成方块
    show_info(getWidth(), getHeight());
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
    if (btn_x > 540)btn_x = max_btn_position;
    button.style.left = btn_x + "px";
}
//初始化方块
function create_brick() {
    var row_num = 10;//一行的方块的个数
    var line_num = 5;//一列的方块的个数
    var brick_id = 0;//砖块的id
    var brick_left = 20;//砖块离左侧边距的位置
    var brick_top = 20;//砖块离上边距的位置
    var i = 0;
    var j = 0;
    //获得方块需要填放的位置
    var board = $(".board");
    for (; i < line_num; i++) {
        for (j = 0; j < row_num; j++) {
            //求id
            brick_id = i * 10 + j + 1;
            brick_left = 20 + 70 * j;
            brick_top = 20 + 40 * i;
            var new_div = "<div class='brick red' id='" + brick_id + "' style='position: absolute;left: " + brick_left + "px;top: " + brick_top + "px;'></div>";
            board.append(new_div);
            //document.write("<div class='brick red' id='"+brick_id+"' style='position: absolute;left: "+brick_left+"px;top: "+brick_top+"px;'></div>");
        }
    }
}
//下面写关于方块的代码
/**
 * Created by CUI on 2016/8/12.
 */
//这里面写方块对小球的判断
//$(document).ready=in_brick();
function in_brick() {
    //判断小球的位置是不是在方块所在区域
    //方块所在区域是 0 0 770 200
    //alert("brick.js is ok!");
    var ball = document.getElementById("ball");
    var ball_left = ball.offsetLeft;
    var ball_top = ball.offsetTop;
    //var ball_right = ball_left + 20;
    //var ball_bottom = ball_top + 20;
    var ball_center_X = ball_left + 10;//圆心的位置
    var ball_center_Y = ball_top + 10;

    var brick_id_T = 0;
    var brick_id_R = 0;
    var brick_id_B = 0;
    var brick_id_L = 0;

    show_brick_info("NUL111L", ball_left, ball_top);

    if (ball_top <= 220) {
        ball_left = ball.offsetLeft;
        ball_top = ball.offsetTop;
        //alert("at if");
        //小球到达方块所在区域
        //小球的四个与方块的接触点 都有可能遇到方块，所以 需要计算出小球四个放在所占方块的id(T)(R)(B)(L)
        //根据小球位置求出所在方块的id(LT)值
        brick_id_T = get_brick_id(ball_left + 10, ball_top);//小球最上边所在方块的ID
        brick_id_R = get_brick_id(ball_left + 20, ball_top + 10);//小球
        brick_id_B = get_brick_id(ball_left + 10, ball_top + 20);
        brick_id_L = get_brick_id(ball_left, ball_top + 10);
        show_brick_ids(brick_id_T, brick_id_R, brick_id_B, brick_id_L);//显示所占据的四个方块的id
        $("#" + brick_id_T + ",#" + brick_id_R + ",#" + brick_id_B + ",#" + brick_id_L + "").removeClass("red");
        show_brick_info("yes", ball_left, ball_top);
    } else {
        show_brick_info("no", ball_left, ball_top);
    }
    setTimeout("in_brick()", 10);
}

function get_brick_id(x, y) {
    var brick_i = parseInt((x - 20) / 70);
    var brick_j = parseInt((y - 20) / 40);
    show_brick_ij(brick_i, brick_j);
    //if(brick_i>10)brick_i=10;
    //if(brick_j>5)brick_j=5;
    //if (brick_i < 1)brick_i = 1;
    //if (brick_j < 1)brick_j = 1;
    return (brick_j ) * 10 + brick_i;
}

//上面是关于方块的代码
//下面写关于小球的代码
/**
 * Created by CUI on 2016/8/11.
 */

//对于小球来说，需要考虑四周的边界，上方的砖块，以及下方的木板（先这么叫吧）
/**
 * 只有左，上，右侧的边框可以碰到（触发反弹）
 * 目标砖块，需要计算砖块与小球的位置（碰到后反弹）
 * 下方的木板，下边界上小球唯一可以触碰的区域，要考虑木板的位置
 *
 * 如何计算各对象的相对位置
 */
/**
 *
 * @param X_speed
 * @param Y_speed
 */

function ball_move() {
    clearTimeout(t);
    var ball = document.getElementById("ball");
    var ball_left = ball.offsetLeft;
    var ball_top = ball.offsetTop;
    if (ball_left < min_ball_left ){
        ball_left=min_ball_left*2-ball_left;
        X_speed = -X_speed;
    }//当小球到边界后，反弹
    if(ball_left>max_ball_left){
        ball_left=max_ball_left*2-ball_left;
        X_speed=-X_speed;
    }
    if (ball_top < min_ball_top){
        ball_top=min_ball_top*2-ball_top;
        Y_speed = -Y_speed;
    }
    //这里判断是否碰到木板
    if (ball_top > max_ball_top) {
        var btn = document.getElementById("button");
        var btn_x = btn.offsetLeft;
        if (ball_left >= btn_x && ball_left <= btn_x + 200) {
            ball_top=max_ball_left*2-ball_top;
            Y_speed = -Y_speed;
        }else {
            alert("game_over!");
        }
    }
    ball.style.left = ball_left + X_speed + "px";
    ball.style.top = ball_top + Y_speed + "px";
    show_ball_info(X_speed, Y_speed, ball.style.left, ball.style.top);
    t = setTimeout("ball_move()", 20);
}


//以上是关于小球的代码