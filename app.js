document.write("<h1>", "Before Offer","<h1/>")

let price = [300, 600, 200, 450, 850];

document.write("<h1>", price,"<h1/>")

for(let i = 0; i < price.length; i++){
    let offer = price[i] / 10;
     price[i] -= offer
    
}
document.write("<h1>","After Offer","<h1/>")
document.write("<h1>", price,"<h1/>")