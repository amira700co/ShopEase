const params= new URLSearchParams(location.search);
let id=params.get('id') ;


async function getdeta() {

const response = await axios.get( `https://dummyjson.com/products/${id}`);
 const datas = response.data;

console.log(datas);
    return datas;


}


getdeta();



async function displdetel() {

const productss = await getdeta() ;
console.log( productss);
try{

const typdete = `
            <div class="col">
                <div class="card border border-success shadow">
                    <div class="card-body">

                        <h5 class="card-name p-2 text-center">
                            ${productss.title}
                        </h5>

                        <img src="${productss.thumbnail}" 
                             class="img-fluid"
                             style="height: 200px; width: 100%; object-fit: contain;">

                        <h5 class="card-price p-2 text-center">
                            ${productss.price}
                        </h5>

                        <h5 class="card-rate p-2 text-center">
                            ${productss.rating}
                        </h5>

                        <p class="p-2 text-center">
                            ${productss.description}
                        </p>

                        <p class="p-2 text-center">
                            Stock: ${productss.stock}
                        </p>

                    </div>
                </div>
            </div>
        `;

        document.querySelector(".detailss").innerHTML = typdete;
    



}




catch(error){}


}

displdetel();