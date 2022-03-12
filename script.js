/*
const user = {
    firstName: "Toukka",
    lastName: "Toukkanen",
    title: "Huono"
}
const option = {
    method: "POST",
    body: JSON.stringify(user),
    headers:{
        'Content-type': 'application/json'
    }
}

fetch('https://reqres.in/api/users', option)
.then (response =>{
    console.log(response);
    return response.json()
    
})
.then(data =>{
    console.log(data);
    document.getElementById("stringifier").innerHTML =
    JSON.stringify(data);
    console.log(data.firstName);
})

*/
console.log("Script START")

postFormData = async (formData) => {
    const data = Object.fromEntries(formData.entries())
    console.log(data)
    const options ={
        method: "POST",
        headers:{
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
    const response = await fetch('https://reqres.in/api/users/', options)

    if(!response.ok){
        const errorMessage = await response.text()
        throw new Error(errorMessage)
    }
    return response.json()
}

handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try{
        const formData = new FormData(userForm)
        const response = await postFormData(formData)
        console.log(FormData)
        console.log(response)
    }catch(error){
        console.error(error)
    }
}   

const userForm = document.getElementById("userForm")
userForm.addEventListener("submit", handleFormSubmit)

console.log("Script END")