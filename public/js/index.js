console.log('Java Script file for Index')
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })

// fetch('http://localhost:3000/weather/?address=India').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error);
//         }else {
//         console.log(data);
//     }
//     })
// })

let weatherForm = document.querySelector('form');
const messageOne = document.querySelector('#message-1')
const messageTwo = document.getElementById('message-2');




weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault(true)
    let inputData = document.querySelector('input').value;    
    console.log(inputData);
    messageOne.textContent = 'Data Loading'
messageTwo.textContent = ''
        let url = 'http://localhost:3000/weather?address='+inputData;
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error);
                messageTwo.textContent = data.error;
                messageOne.textContent = '';
            }else {
                console.log(data);
                messageOne.textContent = data.place + ' , ' + data.forecast;
                messageTwo.textContent = '';
        }
        })
    })
})




// function functionClick(event) {
//     let location = document.getElementById('idLocation').value
//     console.log(location);
//     // 'http://localhost:3000/weather/?address=India'
//     let url = 'http://localhost:3000/weather?address='+location;
//     fetch(url).then((response)=>{
//         response.json().then((data)=>{
//             if(data.error){
//                 console.log(data.error);
//             }else {
//             console.log(data);
//         }
//         })
//     })

// }

// const functionClick = (event)=>{
//     event.preventDefault();
//     let location = document.getElementById('idLocation').value
//     console.log(location);
//     // 'http://localhost:3000/weather/?address=India'
//     let url = 'http://localhost:3000/weather?address='+location;
//     fetch(url).then((response)=>{
//         response.json().then((data)=>{
//             if(data.error){
//                 console.log(data.error);
//             }else {
//             console.log(data);
//         }
//         })
//     })    
// }

console.log(location);