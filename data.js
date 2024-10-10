//info:__________ Promise -------------------

// const myPormise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Kaj Shofol Hoyeche")
//     } else {
//         reject("Shofol Hoy nai")
//     }
//     myPormise
//         .then(result => {
//             console.log(result)
//         })
//         .catch(error => {
//             console.log(error)
//         })
// });

// console.log(myPormise);

// let myPromise = new Promise((resolve, reject) => {
//     let success = false;

//     if (success) {
//         resolve("Massege Sent Success!")
//     } else {
//         reject("Massage Sent Filed!")
//     }
// });

// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// let myPromise = new Promise((resolve, reject) => {
//     let success = true; // সফল হলে true, না হলে false
//     if (success) {
//       resolve("Operation was successful!");
//     } else {
//       reject("Operation failed!");
//     }
//   });

//   myPromise
//     .then(result => {
//       console.log(result); // "Operation was successful!"
//     })
//     .catch(error => {
//       console.log(error); // যেটা error হবে সেটা এখানে দেখাবে
//     });


// const newPromise = new Promise((resolve, reject) => {
//     let success1 = true;
//     if (!success1) {
//         resolve("Successfull Message Send!")
//     } else {
//         reject("Message Send Filed")
//     }
// })

// newPromise
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

//info:---------async await___________________
// async function getData() {
//     return "Hello, World!";
// }

// getData()
//     .then(data => console.log(data)); // Output: Hello, World!

// async function fetchData() {
//     const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
//     const data = await response.json();
//     console.log(data);

// }

// fetchData();

// async function myFunc() {
//     return "Hello";
// }

// console.log(myFunc());


// async function myFunction() {
//     const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
//     console.log(response);
//     const result = await response.json();
//     console.log(result);
// }

// myFunction()

//info:--------Youtube Theke API Call Kore Data niye asha __________________

// const offline = document.querySelector('.offline')
// const apikey = "AIzaSyBOMOFTJKxvv_vjPiVJ1EgrrOtYT4lbN1g";
// const videoId = "Pjsu7QCIOsY";
// const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apikey}`;

// async function ytVideo() {
//     if (!ononline) {
//         try {
//             const response = await fetch(url);
//             const result = await response.json()
//             console.log(result);
//         }
//         catch (err) {
//             console.log("Error!", err)
//             offline.style.display = "block"

//         }
//     }
// }

// ytVideo()

// //info:-__---__--- ডেটা আনার উদাহরণ__--__
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json()) // response কে JSON এ কনভার্ট করছে
//     .then(data => console.log(data))   // JSON ডেটা কনসোল এ দেখাচ্ছে
//     .catch(error => console.error('Error:', error));

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'Mosaddik Billah',
//         body: "Hey There...I'm Mosaddik Billah. And I'm 17 years Old",
//         userId: 500
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

// const fetchapi = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(api => api.json())
//     .then(apii2 => {
//         console.log(apii2)
//     })

