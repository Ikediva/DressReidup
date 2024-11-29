
// Reid Up! Game Logic

// Function to add a dress
function addDress(dress) {
    const dressLayer = document.getElementById('dress-layer');
    dressLayer.src = dress; // Set the dress image
    dressLayer.style.display = 'block'; // Ensure the layer is visible
}

// Function to remove a dress
function removeDress() {
    const dressLayer = document.getElementById('dress-layer');
    dressLayer.src = '';
    dressLayer.style.display = 'none'; // Hide the layer
}

// Function to add shoes
function addShoes(shoes) {
    const shoesLayer = document.getElementById('shoes-layer');
    shoesLayer.src = shoes; // Set the shoes image
    shoesLayer.style.display = 'block'; // Ensure the layer is visible
}

// Function to remove shoes
function removeShoes() {
    const shoesLayer = document.getElementById('shoes-layer');
    shoesLayer.src = '';
    shoesLayer.style.display = 'none'; // Hide the layer
}
