/**
 * Created by CUI on 2016/8/15.
 */
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
function show_brick_info(myinfo, ball_left, ball_top) {
    document.getElementById("is_in_brick").innerHTML = " " + myinfo;
    document.getElementById("ball_left").innerHTML = " " + ball_left;
    document.getElementById("ball_top").innerHTML = " " + ball_top;
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
function show_ball_info(X_speed, Y_speed, X_pos, Y_pos) {
    document.getElementById("X_speed").innerHTML = "" + X_speed;
    document.getElementById("Y_speed").innerHTML = "" + Y_speed;
    document.getElementById("X_pos").innerHTML = "" + X_pos;
    document.getElementById("Y_pos").innerHTML = "" + Y_pos;
}