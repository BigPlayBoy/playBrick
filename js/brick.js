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
    if (ball_center_Y >= 20) {
        if (ball_center_Y <= 220) {
            if (ball_center_X >= 20) {
                if (ball_center_X <= 680) {
                    var x = Math.floor((ball_center_X - 20) / 70);
                    var y = Math.floor((ball_center_Y - 20) / 40);
                    var c = y * 10 + x;
                    var ball_ID=c+1;

                }
            }
        }
    }
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
function show_brick_info(myinfo, ball_left, ball_top) {
    document.getElementById("is_in_brick").innerHTML = " " + myinfo;
    document.getElementById("ball_left").innerHTML = " " + ball_left;
    document.getElementById("ball_top").innerHTML = " " + ball_top;
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
function show_brick_ids(T, R, B, L) {
    document.getElementById("brick_id1").innerHTML = " " + T;
    document.getElementById("brick_id2").innerHTML = " " + R;
    document.getElementById("brick_id3").innerHTML = " " + B;
    document.getElementById("brick_id4").innerHTML = " " + L;
}
function show_brick_ij(brick_i, brick_j) {
    document.getElementById("brick_i").innerHTML = " " + brick_i;
    document.getElementById("brick_j").innerHTML = " " + brick_j;
}