const c = document.getElementById("stars");
c.style.width = window.innerWidth + "px";
c.style.height = window.innerHeight + "px";
const scale = 2
window.onresize = () => {
    c.style.width = window.innerWidth + "px";
    c.style.height = window.innerHeight + "px";
    c.width = window.innerWidth * scale;
    c.height = window.innerHeight * scale;
}
const x = c.getContext('2d');
c.width = window.innerWidth * scale;
c.height = window.innerHeight * scale;
const FPS = 60;
const S = Math.sin;
const C = Math.cos;
let time = 0;
let frame = 0;
let nextFrameMs = 0;
function u(t) {
    let T = 0;
    let z = 0;
    let a = 0;
    let i = c.width;
    x.fillStyle = "#000";
    x.fillRect(0, 0, c.width, c.height);
    x.fillStyle = "#fff";
    for (; i--;) {
        T = t * 150;
        z = (c.width * 99) / (i - (T % 1));
        a = i + T - (T % 1);
        x.fillRect(
            C(a * a) * z + c.width / 2,
            C(a * c.width) * z + c.height / 2,
            c.width / i,
            c.width / i
        );
    }
}
function loop(frame_time) {
    requestAnimationFrame(loop);
    epsilon = 1.5
    if (frame_time < nextFrameMs - epsilon) {
        return
    }
    nextFrameMs = Math.max(nextFrameMs + 1000 / FPS, frame_time);
    time = frame / FPS;
    if ((time * FPS) | (0 == frame - 1)) {
        time += 0.000001;
    }
    frame++;
    try {
        u(time);
    } catch (e) {
        throw e;
    }
}
loop(0.0)

