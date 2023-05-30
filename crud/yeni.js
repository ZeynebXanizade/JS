const cards_box = document.querySelector(".cards_box");
const del = document.querySelector(".delete");
const update = document.querySelector(".update");
const create = document.querySelector(".create");
fetch("http://localhost:3000/imtahan")
.then((res)=> res.json())
.then((data)=>{
    data.forEach((item,i) => {
        if (i<4) {
                  
        const card = document.createElement("div");
        card.classList.add("card")

        const name = document.createElement("p");
        const surname = document.createElement("p");
        const age = document.createElement("p");

        name.innerText="Name: " + item.name;
        surname.innerText="Surname: " + item.surname;
        age.innerText="Age: " + item.age;

        cards_box.append(card);
        card.append(name,surname,age);

    }
    });
})

//post start create
const post =document.createElement("a");
post.innerHTML="Create";
post.href="postt.html";
post.target="_blank";
create.append(post)
//post end

//update


update.addEventListener("click" , function () {
fetch("http://localhost:3000/imtahan/2",{

method:"PUT",
body: JSON.stringify({
name:"nuray",
surname:"elizade",
age:"22"
}),
headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
},

})
.then((res)=> res.json())
.then(data=>
    {
        console.log(data);
    })

})

//delete

del.addEventListener("click" , function () {
    fetch("http://localhost:3000/imtahan/1",{
    
    method:"DELETE"    
    })
    .then((res)=> res.json())
    .then(data=>
        {
            console.log(data);
        })
    
    })


