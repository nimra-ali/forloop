// qno 1
// for(var a = 1; a <= 5; a++){
//     document.write("Hello Ali")
//     document.write("<br/>")
// };
// document.write("<hr/>")
// // qno 2
// for(num = 1; num<= 5; num++ ){
//     document.write(num + "<br>")
// }
// document.write("<hr/>")
// // qno 3
// var num = Number(prompt("enter your number"));
// let sum = 0;
// for(i =0; i <= num; i++){
//     sum = sum + i;
// }
// document.write(" sum of natural num " + sum);

// document.write("<hr/>")
// // qno 4
// var even = [6 , 11 , 2 , 9 , 10 , 13];
// function printNum(){
//     var i = 0;
//     for(i=0; i<even.length; i++ ){
//    if (i%2 == 0){
//     document.write(even[i])
//    }
// }};
// printNum();
// document.write("<hr/>")
// // qno 5
// let arr = [1,2,3,4,5,6,7,8,9]
// function deleteArr(){
//     arr.splice(0, arr.length);
// }
// deleteArr();
// console.log(arr);
// document.write("<hr/>")

// // qno 6
// var array = [1,2,3,4,5]
// for(let i=0; i< array.length; i++){
//     setTimeout(() => {
//       console.log(array[i])  
//     }, 1000);
// };

// // qno 7
// function powofnum (num,pow){
//     val = 1;
//     for(var i=0; i<pow; i++){
//         val = val * num;
//     }
//     return val;
// }
// document.write(powofnum(2,2));

// document.write("<hr/>")


// // qno 8

// for (var i = 1; i <= 8; i++) {
//     for (var ind = 1; ind <= i; ind++) {
//       document.write(ind);
//     }
//     document.write("<br />");
//   }
// document.write("<hr/>")

// qno 9

// function digitcount(num){
//     let count = 0;
//     while(num != 0){
//         num = Math.floor(num / 10)
//         count ++} 
// return count;
// }
// console.log(digitcount(1234));

// qno 10
// let arr = [5, 10, 20, 3, 98,95];
//       let largest = arr[0];
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i] > largest){
//       largest = arr[i]
//     }
//   }
//   console.log(largest)