// Select all of our inputs in the page
const inputs = document.querySelectorAll('.controls input');

// Function that is going to update our values
function handleUpdate() {
    const suffix = this.dataset.sizing || ''; // const suffix gets the suffix for our CSS variables. These value is link to data-sizing in our HTML
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //Sets the property to our element (--spacing, --blur), sets the value (10,20,) + and the suffix (px)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate)); // Listen for the change event to update
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // Listen for the mousemove event to update
