import React from "react";
const name = 'Jaeyong';
const region = 'Pittsburgh';

function myTagFunction(strings, nameExp, regionExp){
    let str0 = strings[0];
    let str1 = strings[1];
    let str2 = strings[2];

    return `${str0}${nameExp}${str1}${regionExp}${str2}`
}

const output = myTagFunction`제이름은 ${name}이고, 사는곳은 ${region}입니다.`;

console.log(output);