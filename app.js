

// <<<<<<<<<<<<<<<<<<< Fetching Example <<<<<<<<<<<<<<<<<<<<<<
// async function fetchapi(){
// const api = await fetch("https://jsonplaceholder.typicode.com/posts/")
//    console.log(api);
//    const json = await api.json();
//    console.log(json[1]);
// }
// fetchapi();
// >>>>>>>>>>>>>> Fetching Example >>>>>>>>>>>>>>>>>>>>>>>>>>


//<<<<<<<<<<<<<<<<<<<<<<<< Type Of Fetching API <<<<<<<<<<<<<<<<<
//  There are two types of fetch api 
// 1 = Get api: data ko server sy get krna by default get hi leta hy jsy above example
// 2 = Post api: Apny application sy data ksi dusray server ya database pr bhejna called post.
// >>>>>>>>>>>>>>>>>>>>>> Types of Fetching Api >>>>>>>>>>>>>>>>>



// <<<<<<<<<<<<<<<<<<  1 - Fetch Get Api <<<<<<<<<<<<<<<<<<<<<<<<<
// async function getapi(){
//     const api = await fetch("https://jsonplaceholder.typicode.com/posts/")
    
//        console.log(api);
    
//        const json = await api.json();
//        console.log(json[1]);
//     }
//     getapi();
// >>>>>>>>>>>>>>>>>>> Get api >>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// <<<<<<<<<<<<<<<<<<<   2 - Post Api <<<<<<<<<<<<<<<<<<<<<<<<<
// async function postData(){
    // const api = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // method: 'POST',         //Post method 
    // body: JSON.stringify({  //body may data jata hy JSON.stingify string may jye daa\ta read krna assana hoo.
    //     title: "post data",
    //     name: "haseeb"              
    // }),
    // headers: {              // headers 
    //     'Content-type': 'application/json; charset=UTF-8',
    // }
    // })
    
    //    console.log(api);
    
    //    const json = await api.json();
    //    console.log(json);
    // }
    // postData();
// >>>>>>>>>>>>>>>>>>>>>>> Post Api >>>>>>>>>>>>>>>>>>>>>>>>>>>>