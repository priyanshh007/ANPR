document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var formData = new FormData(this);
    
    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        window.location.href = 'details.html'; // Redirect to details page upon successful upload
      } else {
        throw new Error('Failed to upload image.');
      }
    })
    .catch(error => console.error('Error:', error));
  });
  