var i = 1, size = 'XS', colour = 'Brown';

function buttonposClick() {
    document.getElementById('inc').value = ++i;
}

function buttonnegClick() {

    --i;

    if (i <= 0) {
        i = 1;
    }

    document.getElementById('inc').value = i;

}

function cartClick() {
    var res = 'The product of Size: ' + size + ' and Colour: ' + colour + ' has been added to the cart';
    alert(res);
}

function setToXS() {
    size = 'XS';
    document.getElementById('size').value = size;
}

function setToS() {
    size = 'S';
    document.getElementById('size').value = size;
}

function setToM() {
    size = 'M';
    document.getElementById('size').value = size;
}

function setToL() {
    size = 'L';
    document.getElementById('size').value = size;
}

function setToXL() {
    size = 'XL';
    document.getElementById('size').value = size;
}

function setToBrown() {
    size = 'BROWN';
    document.getElementById('clr').value = size;
}

function setToGreen() {
    size = 'GREEN';
    document.getElementById('clr').value = size;
}

function setToPink() {
    size = 'PINK';
    document.getElementById('clr').value = size;
}

function setToBlue() {
    size = 'BLUE';
    document.getElementById('clr').value = size;
}
