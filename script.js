document.getElementById('customButton').addEventListener('click', function() {
    document.getElementById('imageInput').click();
});

document.getElementById('imageInput').addEventListener('change', function(event) {
    // Handle the file input change event
    // For example, you can display the file name or upload the image
    const file = event.target.files[0];
    if (file) {
        console.log("File selected:", file.name);
        // Add additional logic as needed
    }
});
