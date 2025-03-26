const API_URL = 'http://localhost:3000/foods'; 

function fetchFoodItems() {
    const category = document.getElementById('category').value;
    console.log(`Fetching food items for category: ${category}`);

    fetch(`${API_URL}?category=${category}`)
        .then(response => response.json())
        .then(data => {
            console.log('Fetched food data:', data);  
            const foodItemsContainer = document.getElementById('food-items');
            foodItemsContainer.innerHTML = '';
            if (data.length === 0) {
                foodItemsContainer.innerHTML = `<p>No items found for this category.</p>`;
            } else {
                data.forEach(food => {
                    const foodItemDiv = document.createElement('div');
                    foodItemDiv.classList.add('food-item');
                    foodItemDiv.innerHTML = `
                        <img src="${food.image}" alt="${food.name}">
                        <h3>${food.name}</h3>
                    `;
                    foodItemsContainer.appendChild(foodItemDiv);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching food items:', error);
        });
}

document.getElementById('category').addEventListener('change', fetchFoodItems);

