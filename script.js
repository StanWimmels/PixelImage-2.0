let canvas = document.createElement("canvas");
ctx = canvas.getContext('2d');
let image1 = new Image();
let pixelsize = 400;

image1.src = document.getElementById("image1").src;

function clicker() {
    if (pixelsize == 0) {
        pixelsize = 400;
    }
    width = image1.width;
    height = image1.height;

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image1, 0, 0);

    var rgb = ctx.getImageData(0, 0, width, height).data;


    for (let i = 0; i < height; i += pixelsize) { //hoevaak de loop moet 'mengen'
        for (let x = 0; x < width; x += pixelsize) {
            let pixels = (x + (i * width)) * 4;     //positie van de pixelarray
            ctx.fillStyle = "rgba(" + rgb[pixels] + "," + rgb[pixels + 1] + "," + rgb[pixels + 2] + "," + rgb[pixels + 3] + ")"; //rgba versie van kleur opslaan
            ctx.fillRect(x, i, pixelsize, pixelsize);
        }
    }

    let image2 = new Image(); //tweede image object voor de pixelated versie
    image2.setAttribute("id", "image2");
    image2.src = canvas.toDataURL("image/jpeg");
    image2.width = 600;
    if (document.body.contains(document.getElementById("image2"))) { //als het object al bestaat moet deze weggehaald worden
        document.getElementById("image2").remove();
    }
    document.body.appendChild(image2);
    if (pixelsize > 50) {
        pixelsize -= 50;
    }
    else if (pixelsize > 0 || pixelsize < 50) {
        pixelsize -= 2;
    }
    console.log(pixelsize);
};
