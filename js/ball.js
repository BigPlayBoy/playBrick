/**
 * Created by CUI on 2016/8/11.
 */
var min_ball_left = 20;
var min_ball_top = 20;
var max_ball_left = 680;
var max_ball_top = 560;
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
var t;
var X_speed = 2;
var Y_speed = 2;
function ball_move(X_speed, Y_speed) {
    clearTimeout(t);
    var ball = document.getElementById("ball");
    var ball_left = ball.offsetLeft;
    var ball_top = ball.offsetTop;
    if (ball_left < min_ball_left || ball_left > max_ball_left)X_speed = -X_speed;//当小球到边界后，反弹
    if (ball_top < min_ball_top || ball_top > max_ball_top)Y_speed = -Y_speed;
    ball.style.left = ball_left + X_speed + "px";
    ball.style.top = ball_top + Y_speed + "px";
    show_ball_info(X_speed, Y_speed, ball.style.left, ball.style.top);
    t = setTimeout("ball_move(" + X_speed + "," + Y_speed + ")", 20);
}

function show_ball_info(X_speed, Y_speed, X_pos, Y_pos) {
    document.getElementById("X_speed").innerHTML = "" + X_speed;
    document.getElementById("Y_speed").innerHTML = "" + Y_speed;
    document.getElementById("X_pos").innerHTML = "" + X_pos;
    document.getElementById("Y_pos").innerHTML = "" + Y_pos;
}