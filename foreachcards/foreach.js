let tripdata=[
    {
    img:"dasara.png",
    title:"Mysore Circle",
    description:`Mysore palace is a beautiful  best place. This statue is located in the middle of Mysore and it is a huge circle, it connects at least 6 roads in all directions. Most of the movies show this to make sure the place is Mysore and heard recently they have cut down the size of the circle in an expansion drive. Also heard the statue made of marble has developed cracks.`,
    color:"yellow"
},
{
    img:"mys12.png",
    title:"PALACE",
    description:"Mysore palece ia a good place",
    color:"purple"
},
{
    img:"foun.png",
    title:"KRS",
    description:"KRS DAM musical foun best place",
    color:"grey"
},


];

let tripContent=document.getElementById("tripblock");
let output = [];
tripdata.forEach((trip,index)=>{
    output +=`<div class="tripContainer" style="background : ${trip.color}">
    <figure>
    <img src=${trip.img} alt=${trip.title}/>
    </figure>
    <h1>${trip.title}</h1>
    <p>${trip.description}</p>
    </div>
    `;
});

tripContent.innerHTML=output;
