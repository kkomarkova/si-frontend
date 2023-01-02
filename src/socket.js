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
    let div = document.getElementById("div1")
    div.innerText = `${data} is online`
    div.className = data
})

socket.on("offline", data => {
    let div = document.getElementById("div1")
    div.innerText =` ${data} is offline`
    div.className =  data
})
// socket.on("disconnect", () => {
//     socket.emit("logout", parsedUser)
//     }) 
socket.on("user-not-found", (data) => {
    let div = document.getElementById("div1")
    div.innerText = `User is not found${data}`
    div.className = data
    }) 
socket.on("invitation-pending", (email)=>{
    let div = document.getElementById("div1")
    div.innerText = ` Waiting for approve from ${email}`
    div.className =email
    })