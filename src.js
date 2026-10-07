/////////fetch/////////////////////
// function getData(api){
//     return fetch(api)
//      .then(response=>response.json())
// }

// let data = [];
//  getData(url)
//    .then(result => {
//     data = result;
//    })

///////////async/await////////////////////

// async function getData(api) {
//     const response = await fetch(api);
//     const data = await response.json();

//     return data;
// }

// let data = [];
//  async function main() {
//     data = await getData(url);

//     console.log(data);
//  }

//  main();

///////////////////////////////////

// function getData(api){
//     return fetch(api)
//     .then(response => response.json())
// }

// let data = [];
// getData("https://jsonplaceholder.typicode.com/users")
//   .then(result => {
//     data = result;
//     console.log(data)
//   })

////////////////all///////
// let users = [];
// let posts = [];

// const usersApi = "https://jsonplaceholder.typicode.com/users";
// const postsApi = "https://jsonplaceholder.typicode.com/posts";
 
// function getData(api){
//     return fetch(api)
//       .then(response => response.json())
// }

// getData(usersApi)
//     .then(result => {
//         users = result;
//         console.log(result)
//     });

// getData(postsApi)
//     .then(result => {
//         posts = result;
//         console.log(result)
//     })

// function getData(api){
//     return fetch(api)
//     .then (response =>{
//         if(!response.ok){
//             throw new Error ("Something went wrong")
//         }
//         return response.json();
//     });
// }

// Promise.all([
//     getData(usersApi),
//     getData(postsApi)
// ])
// .then(result => {
//     users = result[0];
//     posts = result[1];
//     console.log(result);
// })
// .catch(error => {
//     console.log(error)
// })
//////////fetch\\\\\\\\\\\\

// function getData(url) {
//     return new Promise((resolve, reject) => {

//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Something went wrong");
//                 }

//                 return response.json();
//             })
//             .then(data => {
//                 resolve(data);
//             })
//             .catch(error => {
//                 reject(error);
//             });

//     });
// }

// getData("https://jsonplaceholder.typicode.com/users")
//     .then(data => {
//         console.log("RESOLVE:", data);
//     })
//     .catch(error => {
//         console.log("REJECT:", error.message);
//     });
/////////////////////////////////////
// function getData(url) {
//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Something went wrong");
//             }

//             return response.json();
//         })
//         .then(data => {
//             return data;
//         })
//         .catch(error => {
//             throw error;
//         });
// }

// getData("https://jsonplaceholder.typicode.com/users")
//     .then(data => {
//         console.log("RESOLVE:", data);
//     })
//     .catch(error => {
//         console.log("REJECT:", error.message);
//     });