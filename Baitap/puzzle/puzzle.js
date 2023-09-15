function random1() {
    let img1 = ["./img/1-1.png", "./img/2-1.png", "./img/3-1.png", "./img/4-1.png"]
    document.getElementById('piece1').src = img1[Math.floor(Math.random() * 3)]
}

function random2() {
    let img2 = ["./img/1-2.png", "./img/2-2.png", "./img/3-2.png", "./img/4-2.png"]
    document.getElementById('piece2').src = img2[Math.floor(Math.random() * 3)]
}

function random3() {
    let img3 = ["./img/1-3.png", "./img/2-3.png", "./img/3-3.png", "./img/4-3.png"]
    document.getElementById('piece3').src = img3[Math.floor(Math.random() * 3)]
}

function random4() {
    let img4 = ["./img/1-4.png", "./img/2-4.png", "./img/3-4.png", "./img/4-4.png"]
    document.getElementById('piece4').src = img4[Math.floor(Math.random() * 3)]
}

function checkSet() {
    let piece1 = document.getElementById('piece1').src;
    let piece2 = document.getElementById('piece2').src;
    let piece3 = document.getElementById('piece3').src;
    let piece4 = document.getElementById('piece4').src;
    piece1 = piece1.substring(piece1.length - 7);
    piece2 = piece2.substring(piece2.length - 7);
    piece3 = piece3.substring(piece3.length - 7);
    piece4 = piece4.substring(piece4.length - 7);
    let curSet = [piece1, piece2, piece3, piece4];
    let rightSet1 = ["1-1.png", "1-2.png", "1-3.png", "1-4.png"];
    let rightSet2 = ["2-1.png", "2-2.png", "2-3.png", "2-4.png"];
    let rightSet3 = ["3-1.png", "3-2.png", "3-3.png", "3-4.png"];
    if (curSet === rightSet1 || curSet === rightSet2 || curSet === rightSet3) {
        alert('You are correct');
    }
}

