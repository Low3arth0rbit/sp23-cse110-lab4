function getTime() {
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
}

const timeinterval = setInterval(getTime, 1000);