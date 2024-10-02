// N1
// function findMiddleNumber(arr) {
//     const length = arr.length;
//     if (length % 2 !== 0) {
//         return arr[Math.floor(length / 2)];
//     } else {
//         const mid1 = arr[length / 2 - 1];
//         const mid2 = arr[length / 2];
//         return (mid1 + mid2) / 2;
//     }
// }

// console.log(findMiddleNumber([1, 2, 6, 4, 5]));
// console.log(findMiddleNumber([1, 1, 5, 4]));



// N2
// {
//     let products = [
//     {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
//     ];
// }

// let products = [
//     {id: 6, name: "Smartphone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];
// products = products.filter(product => product.id !== 4)
// console.log(products);



// N3

// {
//     function isAlphabetic(str) {
//         return /^[a-zA-Z]+$/.test(str);
//     }

//     console.log(isAlphabetic("HelloWorld"));
//     console.log(isAlphabetic("Hello123"));
//     console.log(isAlphabetic("HelloGuys"));
// }

// N4

// function countWords(arr) {
//     return arr.reduce((acc, word) => {
//         acc[word] = (acc[word] || 0) + 1;
//         return acc;
//     }, {});
// }

// const animals = ['dog', 'dilshod', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'dilshod', 'rabbit'];
// const wordCount = countWords(animals);
// console.log(wordCount);


// N5

// function getWordsLengthArray(str) {
//     return str.split(" ").map(word => word.length);
// }

// const input = "Hello world";
// const wordLengths = getWordsLengthArray(input);
// console.log(wordLengths);


// N6

// function hasSpace(str) {
//     return str.split("").some(text => text === " ");
// }

// const strTwo = "salom dunyo";
// const resalt = hasSpace(strTwo);
// console.log(resalt);



// N7

// function keyArray(obj) {
//     return Object.entries(obj).map(([key, value]) => key + value);
// }

// const input = {a: 2, b: 5, c: 7};
// const result = keyArray(input);
// console.log(result);



// N8
{
    const pupils = [
        { name: "Elbek", protcent: 95 },
        { name: "Zafar", protcent: 78 },
        { name: "Aziz", protcent: 83 },
        { name: "Jasur", protcent: 88 },
        { name: "Bobur", protcent: 66 },
        { name: "Kamron", protcent: 75 }
    ];

    const result = pupils.reduce(
        (acc, pupil) => {
            if (pupil.protcent >= 80) {
                acc.passed += 1;
            } else {
                acc.failed += 1;
            }
            return acc;
        },
        { passed: 0, failed: 0 }
    );

    console.log(`Imtihondan o'tganlar soni: ${result.passed}`);
    console.log(`Imtihondan o'tmaganlar soni: ${result.failed}`);

}


// N9

// var findMedianSortedArrays = function (nums1, nums2) {
//     const mergedArray = nums1.concat(nums2);

//     mergedArray.sort((a, b) => a - b);

//     const length = mergedArray.length;
//     if (length % 2 === 0) {
//         return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
//     } else {
//         return mergedArray[Math.floor(length / 2)];
//     }
// };

// nums1 = [1, 2];
// nums2 = [3, 4];
// console.log(findMedianSortedArrays(nums1, nums2));


// N10

// var searchMatrix = function (matrix, target) {
//     let resalt = false;
//     matrix.forEach((arr) => {
//         if (arr.includes(target)) {
//             resalt = true
//         }
//     })
//     return resalt
// }
// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));
// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));