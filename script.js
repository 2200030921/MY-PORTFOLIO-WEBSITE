// Function to toggle visibility of the resume
function toggleResume() {
    var resumeContainer = document.getElementById('resumeContainer');
    var downloadLink = document.getElementById('downloadLink');

    if (resumeContainer.style.display === "none" || resumeContainer.style.display === "") {
        resumeContainer.style.display = "block"; // Show the resume container
        downloadLink.style.display = "block"; // Show the download link
    } else {
        resumeContainer.style.display = "none"; // Hide the resume container
        downloadLink.style.display = "none"; // Hide the download link
    }
}

// Function to change background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Function to open social media links in new tabs
function openSocialMedia(link) {
    window.open(link, "_blank");
}
