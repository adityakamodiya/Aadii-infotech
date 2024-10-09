// Select the form element
let form = document.querySelector('form');

form.onsubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    console.log("hello");
    
    // Prepare the data to be sent
    let formData = {};
    
    // Get all input fields and their values
    const inputs = form.querySelectorAll('input, textarea'); // Select all input and textarea elements

    // Loop through each input element and store their values in formData
    inputs.forEach(input => {
        if (input.name) { // Make sure the input has a name attribute
            formData[input.name] = input.value; // Assign the value to the formData object
        }
    }); 

    // console.log(formData); // Log the prepared data to the console

    // Sending data to the server using fetch
    fetch('http://localhost:8000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Specify content type
        },
        body: JSON.stringify(formData) // Convert formData object to JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
    })
    .then(data => {
        console.log('Success:', data);
        alert('Your message has been sent successfully!'); // Alert on success
        inputs.forEach(input => {
            if (input.name) { // Make sure the input has a name attribute
                input.value = " " // Assign the value to the formData object
            }
        });
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.'); // Alert on error
    });
};
