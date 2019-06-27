function convertir() {

    let val = prompt('input the number you want to convert')
    let unit = prompt('choose the element you want to convert \n (cm to inch) or (gramme to pound)')


    let res = null;

    let calc = 0;


    switch (unit) {
        case "cm":
            calc = Math.round(val * 2.54 * 100) / 100;
            res = val + " inch(s) = " + calc + " centimetre(s)";
            alert(res)
            break;
        case "inch":
            calc = Math.round(val / 2.54 * 100) / 100;
            res = val + " centimetre(s) = " + calc + " inch(s)";
            alert(res)
            break;
        case "pound":
            calc = Math.round(val / 453.6 * 100) / 100;
            res = val + " gramme(s) = " + calc + " pound(s)";
            alert(res)
            break;
        case "gramme":
            calc = Math.round(val * 453.6 * 100) / 100;
            res = val + " pound(s) = " + calc + " gramme(s)";
            alert(res)
            break;
    }
}

convertir()