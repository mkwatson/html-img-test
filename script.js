document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        console.log("File uploaded:", file.name);
        // You can add more logic here to display the image or send it to a server
    }
});

