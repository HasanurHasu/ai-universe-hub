const loadTools = async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const tools = await res.json();
    const data = tools.data.tools;
    displayTools(data);
};

const displayTools = (data) =>{
    console.log(data);
    const toolsContainer = document.getElementById('tools-container');

    data.forEach(element => {
       const card = document.createElement('div');
       card.classList = `card w-96 bg-base-400 shadow-xl`;
       card.innerHTML = `
       
       <figure class="px-6 pt-10">
       <img src="${element.image}" alt="${element.name}"
           class="rounded-xl" />
   </figure>
   <div class="p-8 items-start text-left">
       <h2 class="card-title">Features</h2>
       <ol type="1" class="pl-5">
           <li type="1">${element.features[0]}</li>
           <li type="1">${element.features[1]}</li>
           <li type="1">${element.features[2]}</li>
          
       </ol>
       <hr class="border-[#11111133] w-full my-3">

       <div class="flex justify-between">
           <div>
               <h2 class="card-title">${element.name}</h2>
               <p><small><i class="fa-regular fa-calendar-days"></i> ${element.published_in}</small></p>
           </div>
          <div>
           <button
           class="btn btn-primary bg-[#FEF7F7] border-none text-[#EB5757] hover:bg-[#EB5757] hover:text-white rounded-full w-12 h-12"><i
               class="fa-solid fa-arrow-right"></i></button>
          </div>
       </div>
   </div>

       `
toolsContainer.appendChild(card)

    });


   
}

loadTools();