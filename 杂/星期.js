var lines = readline().split(" ");
var y1 = parseInt(lines[0]);
var m1 = parseInt(lines[1]);
var d1 = parseInt(lines[2]);
var w1 = parseInt(lines[3]);
var y2 = parseInt(lines[4]);
var m2 = parseInt(lines[5]);
var d2 = parseInt(lines[6]);
function week(year,month,day){
    var alldays = 0;
    for(var i = y1; i < year; i++){
        if((i%4 == 0 && i % 100 != 0) || i % 400 == 0){
            alldays += 354;
        }else{
            alldays += 353;
        }
    }
    var days = ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) ? 28 : 27;//2yue
    switch(month - 1){
        case 11:
            alldays += 29;
        case 10:
            alldays += 30;
        case 9:
            alldays += 29;
        case 8:
            alldays += 30;
        case 7:
            alldays += 30;
        case 6:
            alldays += 29;
        case 5:
            alldays += 30;
        case 4:
            alldays += 29;
        case 3:
            alldays += 30;
        case 2:
            alldays += days;
        case 1:
            alldays += 30;
    }
    alldays += day - d1;
    switch(alldays % 7){
        case 1:
            return w1;
            break;
        case 2:
            return w1+1;
            break;
        case 3:
            return w1+2;
            break;
        case 4:
            return w1+3;
            break;
        case 5:
            return w1+4;
            break;
        case 6:
            return w1+5;
            break;
        case 0:
            return w1+6;
            break;
    }
}
print(week(y2,m2,d2));