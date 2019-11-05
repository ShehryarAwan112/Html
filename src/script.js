
    const text=document.getElementById('text')
    const password=document.getElementById('password')
    const errorElement= document.getElementById('error')
    format.addEventlistener('submit', e()=>
     {
       
let message =[]
if (name.value===''||name.value===null)
{
   message.push('name is requaired')
}
if(message.length)>0{
   e.preventDefault()
   errorElement.innerText=message.join(',')
}
    })