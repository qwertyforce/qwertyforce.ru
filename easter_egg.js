console.log("Credits")
console.log("https://codepen.io/FelixRilling/details/vNJoMy")
console.log("https://codepen.io/lukemeyrick/pen/ayRgWO")
console.log("https://www.dwitter.net/d/5165")
console.log("LORN - Ø")
console.log("https://www.deviantart.com/yoditax/art/Rainbow-Dash-is-God-266920155")
const image = new Image()
image.onload = function () {
    const style = [
        'font-size: 1px;',
        'line-height: ' + this.height + 'px;',
        'padding: ' + this.height * .5 + 'px ' + this.width * .5 + 'px;',
        'background-size: ' + this.width + 'px ' + this.height + 'px;',
        'background: no-repeat url(https://qwertyforce.dev/rd.png);'
    ].join(' ');
    console.log('%c ', style)
    console.log("Look up")
};
image.src = 'https://qwertyforce.dev/rd.png'
