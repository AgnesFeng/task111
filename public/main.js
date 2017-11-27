//let number = 10;
function main(number){

    let string1 = ' bottles of beer on the wall, ';
    let string2 = ' bottles of beer.\nTake one down and pass it around, ';
    let string3 = ' bottles of beer on the wall.\n';
    let stringOne = ' bottle of beer on the wall.\n';
    let num = number;
    let numNext = num-1;
    let songPrint = '';

    while(numNext >= 1){
        if(numNext ===1){
            songPrint = songPrint + num + string1 + num + string2 + numNext + stringOne;
        }else{
            songPrint = songPrint + num + string1 + num + string2 + numNext + string3;
        }
        num -=1;
        numNext = num-1;
    }
    if(numNext === 0){
        let str= '1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
        songPrint = songPrint+str;
    }
    console.log(songPrint);
    return songPrint;
}
//main(number);

module.exports = main;