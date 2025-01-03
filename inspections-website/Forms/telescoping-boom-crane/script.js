document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inspectionForm");

  form.addEventListener("submit", (event) => {
    // Prevent the default page reload
    event.preventDefault();

    // 1) Collect all input data from the form
    const formData = new FormData(form);
    const dataObj = {};

    // Convert all fields into an object
    formData.forEach((value, key) => {
      dataObj[key] = value;
    });

    // Also capture top info fields if they're outside the <form> (optional)
    dataObj.owner = document.getElementById("owner").value;
    dataObj.inspectionDate = document.getElementById("inspectionDate").value;
    // ... do the same for location, serviceStatus, etc. if you have them outside the <form>...

    // 2) Save to localStorage
    // Make sure you use the same key you'll retrieve in finalReport.html
    localStorage.setItem("telescopingBoomData", JSON.stringify(dataObj));

    // 3) Redirect to final report
    // Make sure finalReport.html is in the correct path or same folder
    window.location.href = "finalReport.html";
  });
});