async function Display() {
        const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json');
        const data = await response.json();
        
        const products = data.products;

        const sorted = Object.keys(products).sort((a, b) => {
            return products[b].popularity - products[a].popularity;
        });

        const tableBody = document.getElementById('productBody');
        tableBody.innerHTML = '';

        sorted.forEach(productId => {
            const product = products[productId];
            const row = `<tr>
                            <td>${product.title}</td>
                            <td>${product.price}</td>
                            <td>${product.popularity}</td>
                        </tr>`;
            tableBody.innerHTML += row;
        });
}
Display();
