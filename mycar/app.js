 let search=document.querySelector('.search_box')
 document.querySelector('#search_iocn').onclick=()=>{
    search.classList.toggle('active');
 }

let header=document.querySelector('header');
window.addEventListener('scroll',()=>{
  header.classList.toggle('shadow',window.scrollY>0);
})






 var list=document.getElementById("list")
 function myCard(name,title,types,decs,image){
     console.log(myCard);
     this.name=name
     this.title=title
     this.types=types
     this.decs=decs
     this.image=image
 }
 var car1=new myCard("Mersedes","Brand Of the World"    ,"The Best Future Car","A Demaned Car","https://images.unsplash.com/photo-1608994751987-e647252b1fd9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lcmNlZGVzfGVufDB8fDB8fHww" ) ;
 var car2=new myCard("BMW","Brand Of the World"         ,"The Best Future Car","A Demaned Car","https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13fGVufDB8fDB8fHww" ) ;
 var car3=new myCard("Ferrari","Brand Of the World"     ,"The Best Future Car","A Demaned Car","https://images.unsplash.com/photo-1597687210367-a4915552d886?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmVycmFyaXxlbnwwfHwwfHx8MA%3D%3D" ) ;
 var car4=new myCard("Audi","Brand Of the World"        ,"The Best Future Car","A Demaned Car","https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF1ZGl8ZW58MHx8MHx8fDA%3D" ) ;
 var car5=new myCard("Lamborghini","Brand Of the World" ,"The Best Future Car","A Demaned Car","https://images.unsplash.com/photo-1566024164372-0281f1133aa6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbWJvcmdoaW5pfGVufDB8fDB8fHww" ) ;
 var car6=new myCard("Toyota","Brand Of the World"      ,"The Best Future Car","A Demaned Car","https://images.unsplash.com/photo-1608994751987-e647252b1fd9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lcmNlZGVzfGVufDB8fDB8fHww" ) ;
 
 
 var allCar=[car1,car2,car3,car4,car5,car6]
 console.log(allCar);
 
 function totalData() {
     
 
 allCar.forEach(function(data,index){
 
     var ele = `<div class="  lg:w-2/2  sm:w-2/5 p-9" >
     <div class=" flex relative h-[650px] w-[750px] rounded-lg " >
       <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
         data.image
       }">
       <div id = ${index} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
         <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
           data.name
         }</h2>
         <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
           data.title
         }</h1>
         <p class="leading-relaxed">${data.types}</p>
         <p class="leading-relaxed">${data.decs} </p>
         <button onclick="updateDesc(this)">update</button>
         <button onclick="del(this)">Delete</button
       </div>
     </div>
   </div>`;
   console.log(data.name);
   console.log(data.title);
     list.innerHTML += ele;
 });
 };
 totalData()
 
 function del(ele){
     var index=ele.parentElement.id;
     allCar.splice(index,1)
     // console.log(allCar);
     list.innerHTML=""
     totalData()
 
 }
 function updateDesc(ele){
 
     var index=ele.parentElement.id;
     allCar[index].decs=prompt("decs")
     console.log(decs);
     list.innerHTML=" "
     totalData()
 }