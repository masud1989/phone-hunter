// console.log("OK")
const searchPhone = () => {
    //     console.log("Ok")
        // document.getElementById('phone-container').innerHTML = '';
        const inputPhone = document.getElementById('input-phone').value;
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputPhone}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data =>displayPhone(data.data))
            
           
    }
    
  const displayPhone = phoneList =>{
//   const phones = phoneList.slice(10, 100);
    // console.log(phoneList);
      for(phone of phoneList){
          console.log(phone);
          console.log(phoneList);

        const phoneContainer = document.getElementById('phone-container');
        const div = document.createElement('div');
        div.innerHTML = `
                        <div class="card-group">
                            <div class="card">
                                <img class="card-img-top" src="${phone.image}" alt="Card image cap">
                                <div class="card-body">
                                    <h3>Brand: ${phone.brand} </h3>
                                    <h4>Model: ${phone.phone_name} </h4>
                                    <h5>Country: </h5>
                                    <button onclick="details()" class="btn btn-success">Details</button>
                                </div>
                            </div>
                        </div>
          `
     phoneContainer.appendChild(div);  




      }
    }

   