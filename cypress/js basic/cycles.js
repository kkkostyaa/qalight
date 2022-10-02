
let num = 50;

while (num < 60) {
    console.log(num);
    num++;
}


let num2 = 50;

do { 
    console.log(num2);
    num2++;
}
while (num2 < 60)


let num3 = 80;
for (let i = 1; i < 10; i++) {
    console.log(num3);
    num3++;
}



for (let i = 1; i < 10; i++) {
    console.log(i);
    if (i == 6) { break }
}


for (let i = 1; i < 10; i++) {
    if (i == 6) { continue }
    console.log(i);
}


for (let i = 1; i < 3; i++) {
    console.log('i = ' + i);
    for (let j = 1; j < 5; j++) {
        console.log('j = ' + j);
        }
}




