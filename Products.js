const params= new URLSearchParams(location.search);  //استدعاء الاي دي من الرابط اللي سويناه عند الضغط عليه

//افتحي صفحة البرودمت، حسب الرقم المطلوب بالاي دي
let id=params.get('id') ;

// reading
 async function getprodic() {
//اعرضي البيانات في هذه الصفحه  حسب الاي دي 
const response = await axios.get( `https://dummyjson.com/products/category/${id}`
);
 const datas = response.data.products;

console.log(datas);
    return datas;


}
// reading

getprodic();
//desplaying
async function displprodic() {

const productss = await getprodic() ;
console.log( productss);
try{

const typroduct=productss.map((pr , index) => {

return `





     <div class="col">
    <div class="card border border-success shadow ">
      <div class="card-body">
        <h5 class="card-name p-2  text-center  "> ${pr.id} </h5>
        <h5 class="card-price p-2  text-center  "> ${pr.title}</h5>
        <h5 class="card- rate  p-2  text-center  "> ${pr.rating}</h5>
<img src="${pr.thumbnail}" class="img-fluid "  style="height: 200px; width: 100%; object-fit: contain;">

<a href="detel.html?id=${pr.id}" class="btn btn-outline-success"> Browse </a>    

      </div>
    </div>
  </div>
            `;

 }).join("");
    
       document.querySelector(".Products").innerHTML = typroduct;



}




catch(error){}


}

displprodic();