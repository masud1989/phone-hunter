// console.log("OK")
const searchPhone = () => {
    //     console.log("Ok")
        document.getElementById('phone-container').innerHTML = '';
        // Clear previous loaded data 
        const inputPhone = document.getElementById('input-phone').value;

        
        // input phone name  
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputPhone}`;
        // console.log(url);
        fetch(url)
        .then(res => res.json())
                //  .then(data => console.log(data))
        .then(data =>displayPhone(data.data))               
    }

    
  const displayPhone = phoneList =>{
//   const phones = phoneList.slice(10, 100);

    // console.log(phoneList);
  phoneList.forEach(phone => {
    // console.log(data);
    console.log(phone);
    console.log(phoneList);
  
    const phoneContainer = document.getElementById('phone-container');
    const div = document.createElement('div');
    div.classList.add('col-md-4')
   
        div.innerHTML = `            
            <div class="card mt-3 border border-secondary border border-4 ">
                <img class="card-img-top w-50 mx-auto mt-10 content-center py-3" src="${phone.image}" alt="Card image cap">
                <div class="card-body">
                    <h3>Brand: ${phone.brand} </h3>
                    <h4>Model: ${phone.phone_name} </h4>
                    <button class="btn btn-success"  data-toggle="modal" data-target="#modal"> Show Details</button>
                </div>       
            </div>                                                     
        `  
        phoneContainer.appendChild(div);  
        
  });
  inputPhone= '';      

    //   }
    }

   