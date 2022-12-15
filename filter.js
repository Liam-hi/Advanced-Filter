



var selectedItems = [];

let products = [
    {name: 'candy', category: 'tech'},
    {name: 'computer', category: 'tech'},
    {name: 'soap', category: 'hygiene'},
    {name: 'bbq', category: 'outdoors'},
    {name: 'nima', category: 'human'}
]

var wrapper = document.createElement('div');
document.body.appendChild(wrapper);



function filter(x) {
   
    if (x.checked) {
        selectedItems.push(x.value);
    } else {
        var index = selectedItems.indexOf(x.value);
        if (index > -1) {
            selectedItems.splice(index, 1);
        }
    }

    let filterSet = new Set(selectedItems);
    
    let filteredProducts = products.filter(x => filterSet.has(x.category))

    console.log(filteredProducts)


    wrapper.innerHTML = "";

    for (let j = 0; j < filteredProducts.length; j++) {
        var p = document.createElement('p');
        p.classList.add('hej');
        p.style.opacity = "0";
        p.innerHTML = filteredProducts[j].name;
        wrapper.appendChild(p);

    } 

    gsap.to(".hej", {
        duration: 0.6,
        opacity: 1,
        ease: "power1.inOut",
        stagger: 0.1
        }); 

    

    

        


}






    




