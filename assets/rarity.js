var text = document.getElementById("rarity");
var str = text.innerHTML,
    reg = /red|blue|green|orange/ig; //g is to replace all occurances

//fixing a bit
var toStr = String(reg);
var color = (toStr.replace('\/g', '|')).substring(1);

//split it baby
var colors = color.split("|");

if (colors.indexOf("red") > -1) {
    str = str.replace(/red/g, '<span style="color:red;">red</span>');
}

if (colors.indexOf("blue") > -1) {
    str = str.replace(/blue/g, '<span style="color:blue;">blue</span>');
}

if (colors.indexOf("green") > -1) {
    str = str.replace(/green/g, '<span style="color:green;">green</span>');
}

if (colors.indexOf("orange") > -1) {
    str = str.replace(/orange/g, '<span style="color:orange;">orange</span>');
}


document.getElementById("updated").innerHTML = str;
