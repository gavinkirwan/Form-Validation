//get the form 
const myForm = document.getElementById("comment_form");

//get the form information
const authorInput = document.getElementById("author");
const headlineInput = document.getElementById("headline");
const articleInput = document.getElementById("article");
const summaryInput = document.getElementById("summary");
const pubDateInput = document.getElementById("pub_date");
const  pubTimeInput = document.getElementById("pub_time");
const locationInput = document.getElementById("location");
const imgUrlInput = document.getElementById("img_url");
const categoryIdInput = document.getElementById("category_id");


myForm.addEventListener("submit", function(event) {

  event.preventDefault();

  let errorMessage = "";
  if (authorInput.value === "") {
    errorMessage += "Please enter an author.\n";
  }
  if (headlineInput.value === "") {
    errorMessage += "Please enter a headline.\n";
  }
  if (articleInput.value === "") {
    errorMessage += "Plase enter an article.\n";
  }
  if (summaryInput.value === "") {
    errorMessage += "Please enter a summary.\n";
  }
  if (pubDateInput.value === "") {
     errorMessage += "Please enter a publication date.\n";
  }
  if (pubTimeInput.value === "") {
    errorMessage += "Please enter a publication time.\n";
  }
  if (locationInput.value === "") {
    errorMessage += "Please enter a location.\n";
  }
  if (imgUrlInput.value === "") {
     errorMessage += "Please enter an image URL.\n";
  }
  if (categoryIdInput.value === "") {
    errorMessage += "Please enter a category ID.\n";
  }

  if (errorMessage === "") {
    myForm.submit();
  } else {

    alert(errorMessage);
  }
});