
//استدعاء البيانات
async function getcatgre() {

const response = await axios.get("https://dummyjson.com/products/category-list");
 const data = response.data;

console.log(data);
    return data;


}


// عرض البيانات الاصناف


async function displaycatgre() {

    // استدعي البيانات واعرضها اللي جبناها اللي هي الفانكشن اللي سويناها احطها ف متغير

    const catogry = await getcatgre()


    console.log(catogry);
try{

         const result = catogry.map((ctg, index) => {

            return `
               
     <div class="col">
    <div class="card border border-success shadow ">
      <div class="card-body">
        <h5 class="card-title p-5  text-center  "> ${ctg}</h5>
<a href="products.html?id=${ctg}" class="btn btn-outline-success"> Browse </a>   

      </div>
    </div>
  </div>
            `;

        }).join("");

       document.querySelector(".categories").innerHTML = result;

}



catch(error){





}




finally{}

}


displaycatgre();