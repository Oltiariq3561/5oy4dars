// let a = 5
// function sum(n) {
//     let res = 0;

//     for (let i = 0; i <= n; i++) {
//         res+=i**3;
//     }

//     let counter = 0;
//     for (let i = 0; i <= res; i++) {
//        if (res % i == 0) {
//         counter++
//        }
//     }
//     if (counter%2==1) {
//        return 'qiziqarli' 
//     }else{
//     return 'qiziqarli emas'
//     }
// }
// let res = sum(a);
// console.log(res);

// UYGA VAZIFA 

// let str = "SAlommAAAtttt";
// function test(arg) {
// let kichikk = 0;
//     let kottalari = 0;

//     for (const iterator of arg) {
//     if ((iterator == iterator.toLowerCase()) && !(iterator == iterator.toUpperCase())) {
//             kichikk++;
//     }

//     if (!(iterator == iterator.toLowerCase()) && (iterator == iterator.toUpperCase())) {
//             kottalari++;
//     }
//     }
//     return { kichikk, kottalari }; 
// }
// let res = test(str);
// console.log(res);

// 2.Berilgan matndan palindrom so‘zlarni ajratib oladigan funksiya yozing.
// let a = "madam asa ikki non baliq tovuq"
// function test(str){
//     let arr = str.split(' ');
//     let res = [];
//     for (const i of arr) {
//         let ress = i.split('').reverse().join('')
//         if(i == ress){
//             res.push(i)
//         }
//     }
//     let tugadi = res.join(' ');
//     return tugadi 
// } 
// let res = test(a);
// console.log(res);
// 4-masala
// function test(arg) {
//     return arg.split('').map(value => {
//         let asciJadval = value.charCodeAt(0); 
//         return asciJadval.toString(2).padStart(8, '0'); 
//     }).join(' '); 
// }
// let str = 'salommmm'
// let res = test(str);

// console.log(res); 

// 5-masala
// function test(arg) {
//     if (arg === 0) return 0;
//     if (arg === 1) return 1;
//     return test(arg - 1) + test(arg - 2);
// }
// const a = 10;
// const res = test(a);
// console.log(res);

// 6-masala
// let a = 1234;
// function test(arg) {
//     let num = String(arg).split('')
//     let res = 0
//     for (const i of num) {
//        res += Number(i)
//     }
//     return String(res)
// }
// let res = test(a);
// console.log(res);

// 8-masala
// let arr = 'salom bolalar';
// function test(arg) {
//     let res = arg.split('').reverse().join('').split(' ').reverse().join(' ');
//     return res;
// }
// let res = test(arr);
// console.log(res);

// 9-masala
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,];
// function test(arg) {
//     let res = [];
//     let keraksiz = []
//     for (const i of arg) {
//         if (i%2==0 || i%3==0) {
//             keraksiz.push(i)
//         }else{
//         res.push(i)
//         }
//     }
//     return res
// }
// let res = test(arr);
// console.log(res);