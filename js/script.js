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
        .then(data => {
            if(data.data==null){
                document.getElementById('spiner').style.display='block'
            }
            else{displayPhone(data.data);
                document.getElementById('spiner').style.display='none'
            }
        });             
    }

    
  const displayPhone = phoneList =>{
//   const phones = phoneList.slice(10, 100);
document.getElementById('input-phone').value = '';
    // console.log(phoneList);
  phoneList.forEach(phone => {
    // console.log(data);
    // console.log(phone);
    // console.log(phoneList);
  
    const phoneContainer = document.getElementById('phone-container');
    const div = document.createElement('div');
    
    div.classList.add('col-md-4')
   
        div.innerHTML = `   
                     
            <div class="card mt-3 border border-secondary border border-4 ">
                <img class="card-img-top w-50 mx-auto mt-10 content-center py-3" src="${phone.image}" alt="Card image cap">
                <div class="card-body">
                    <h4>Brand: ${phone.brand} </h4>
                    <h5>Model: ${phone.phone_name} </h5>
                    <button onclick="phoneDetails('${phone.slug}')" class="btn btn-success"  data-toggle="modal" data-target="#modal"> Show Details</button>
                </div>       
            </div>                                                     
        `  
        phoneContainer.appendChild(div);  
        
        
  });   

}

// Taking ID 
const phoneDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    console.log(url)
    fetch(url)
      .then((response) => response.json())
    //   .then(data=>console.log(id))
    //   .then((data) => console.log(data.data.brand));
      .then((data) => setDetails(data.data));
  };

  const setDetails = (info) => {
      console.log(info);
      document.getElementById('detail-container').innerHTML = '';
      const detailContainer = document.getElementById('detail-container');
      const div = document.createElement('div');
      div.innerHTML = `
      <h3 class="text-success text-center bg-light mt-5">Deatailed Specification </h3>
        <div class="card mt-3 border border-secondary border border-4 ">
                <img class="card-img-top w-50 mx-auto mt-10 content-center py-3" src="${info.image}" alt="Card image cap">
                <div class="card-body">
                    <h3>Brand: ${info.brand}  </h3>
                    <h4>Model: ${info.name}  </h4>
                    <p class>
                        <h5 class="bg-success text-white text-center p-1">Main Features:</h5> 
                         <h6>Storage: ${info.mainFeatures.storage} </h6>
                         <h6>Dislay : ${info.mainFeatures.displaySize} </h6>
                         <h6>Dislay : ${info.mainFeatures.displaySize} </h6>
                         <h6>ChipSet : ${info.mainFeatures.chipSet} </h6>
                        <h6>ChipSet : ${info.mainFeatures.chipSet} </h6>
                    </p>

                    <p>
                         <h5 class="bg-success text-white text-center p-1">Other Features:</h5> 
                         <h6>WLAN : ${info.others.WLAN} </h6>
                         <h6>WLAN : ${info.others.Bluetooth} </h6>
                         <h6>GPS : ${info.others.GPS} </h6>
                         <h6>NFC : ${info.others.NFC} </h6>
                         <h6>Release Date : ${info.releaseDate} </h6>
                    </p>
                </div>       
            </div>    
        `
        detailContainer.appendChild(div);
  }

   