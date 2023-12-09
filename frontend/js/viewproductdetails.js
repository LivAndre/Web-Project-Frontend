function viewProductDetails(){

    let productId = 1
    let url = `http://localhost:8000/productstocks/view/${productId}`
    let content = {
        "method": "GET",
        "headers": {

        }
    }
    
    api_client(url, content, (response)=>{
        if (response.successful == true){
            console.log(response.message)
            let productName = response.data[0].name
            let productDescription = response.data[0].description
            let productPrice = response.data[0].price
            document.getElementById("product-name").innerHTML = productName
            document.getElementById("product-price").innerHTML = productPrice
            document.getElementById("product-desc").innerHTML = productDescription
        }
        else{
            console.log(response.message)
        }
    })
    
   
}

viewProductDetails()