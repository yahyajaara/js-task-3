document.querySelector(".end-Product").classList.add("hidden");

var inputName = document.querySelector(".start-Product form #name");
var inputDescription = document.querySelector(".start-Product form #description");
var inputPrice = document.querySelector(".start-Product form #price");
var submitButton = document.querySelector(".start-Product button");

var Products = [];

var nullname = inputName.value;
var nulldescription = inputDescription.value;
var nullprice = inputPrice.value;

var testHead = 1;





 submitButton.onclick = function(e)
{

    if( inputName.value == nullname && inputDescription.value == nulldescription && inputPrice.value == nullprice)
    {
        alert("no information");
        return;
    }
    

    if (testHead == 1)
    {
        testHead=2;

       var head = 
       ` 
             <th>name</th>
             <th>description</th>
             <th>price</th>
       
       `; 

       document.querySelector(".end-Product thead").innerHTML = head;
    }

    document.querySelector(".end-Product").classList.remove("hidden");

    console.log(inputName.value);
    e.preventDefault();

    var product = 
    {
        name:inputName.value,
        description:inputDescription.value,
        price:inputPrice.value,
    };

    Products.push(product);

    var data = 
    `
        <tr> 
                <td> ${product.name} </td>
                 <td> ${product.description} </td>
                  <td> ${product.price} </td>
        
        </tr>
    
    `;

    document.querySelector(".end-Product tbody").innerHTML += data ;

    inputName.value = nullname;
    inputDescription.value = nulldescription;
    inputPrice.value = nullprice;

    

}




