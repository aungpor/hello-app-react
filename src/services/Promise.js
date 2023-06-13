import React, { useState, useEffect } from 'react';

export default function Promise() {
    // setTimeout(() => {
    //     console.log('One');
    //     setTimeout(() => {
    //         console.log('Two');
    //         setTimeout(() => {
    //             console.log('Three');
    //             setTimeout(() => {
    //                 console.log('Four');
    //             }, 1000);
    //         }, 1000);
    //     }, 1000);
    // }, 1000);


    // const calculation = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve(1+1), 500)
    // })

    // calculation.then(result => console.log(result))


    // function sendMessage(to, message, callback) {
    //     console.log("To " + to + ": " + message);
    //     callback();
    // }

    // sendMessage("John", "Hello John", function () {
    //     console.log("Message has been sent");
    // });

    // sendMessage("John", "How are you?", () => {
    //     console.log("Hooking notification service");
    // });


    // function gcd(a, b, success) {
    //     let result;
    //     let min = a < b ? a : b;
    //     for (let i = min; i >= 1; i--) {
    //         if (a % i == 0 && b % i == 0) {
    //             result = i;
    //             break;
    //         }
    //     }
    //     // Call function and send result back
    //     success(result);
    // }

    // gcd(6, 15, function (result) {
    //     console.log("Finding GCD of 6 and 15");
    //     console.log("GCD = " + result);
    // });

    // gcd(16, 24, function (result) {
    //     console.log("Finding GCD of 16 and 24");
    //     console.log("Result: " + result);
    // });


    // function iterateArray(array, callback) {
    //     for (let i = 0; i < array.length; i++) {
    //         callback(array[i], i);
    //     }
    // }

    // let numbers = [10, 20, 30, 40, 50];
    // let names = ["Chris", "Metin", "John", "Nathan"];

    // console.log("Diplay indexes and values");
    // iterateArray(numbers, function (value, index) {
    //     console.log("index: " + index, "value: " + value);
    // });

    // console.log("Length of array elements");
    // iterateArray(names, function(value, index) {
    //     console.log(value + " -> " + value.length);
    // });


    function Test(num, callback) {
        for (let i = num; i > 0; i--) {
            console.log("this is = " + num)
            callback()
        }
    }

    Test(3, () => { console.log("aungpor") })
}