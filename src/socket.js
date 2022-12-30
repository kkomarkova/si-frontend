import {io} from "socket.io-client";
let user = '{"userId": "test12"}'
let parsedUser = JSON.parse(user)
const socket = io("https://threeam.onrender.com/",{
    transport: WebSocket,
})
socket.on("connect",  ()=>{
    console.log("1.socket connected")
})
export const loginSocket=(name)=> socket.emit('login',{userId:name})
export const disconnectSocket=(name)=> socket.emit('disconnect',{userId:name})
socket.on("online", data => {
    console.log(`${data} is online` )
    let container = document.createElement("div")
    container.innerText = data
    container.className = data
    let div = document.getElementById("div1")
    div.appendChild(container)
})

socket.on("offline", data => {
    let container = document.createElement("div")
    container.innerText =` ${data} is offline`
    container.className =  data
    let div = document.getElementById("div1")
    div.appendChild(container)
})
// socket.on("disconnect", () => {
//     socket.emit("logout", parsedUser)
//     }) 
socket.on("user-not-found", (data) => {
    let container = document.createElement("div")
    container.innerText = `User is not found${data}`
    container.className = data
    let div = document.getElementById("div1")
    div.appendChild(container)
    }) 
socket.on("invitation-pending", (email)=>{
    let div = document.getElementById("div1")
    let container = document.createElement("div")
    container.innerText = ` Waiting for approve from ${email}`
    container.className =` Waiting for approve from ${email}`
    div.appendChild(container)
    })