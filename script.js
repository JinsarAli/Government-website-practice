document.getElementById("cnicForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting the traditional way

  const enteredCnic = document.getElementById("cnic-input").value.trim();
  const validCnic = "43203-9014976-5";

  // CNIC details object
  const cnicDetails = {
    name: "Jinsar Ali",
    fatherName: "Roshan Ali",
    cnic: "43203-9014976-5",
    address: "Gulistan e jouhar, block 18, Rabia city, Karachi.",
    registrationNo: "LEA-12345",
    model: "2010",
    made: "Honda",
    make: "City",
    color: "Black",
    issueDate: "15/06/2024",
    expiryDate: "13/06/2027",
    issuingAuthority: "Mr. Muhammad Asad Mahmood",
    officerTitle: "Section Officer (E-2)",
    govOf: "Government of Pakistan",
  };

  // Hide the search card
  document.getElementById("search-card").style.display = "none";

  // Show details based on CNIC entered
  const detailsContent = document.getElementById("details-content");
  const detailsContainer = document.getElementById("cnic-details");

  if (enteredCnic === validCnic) {
    detailsContent.innerHTML = `

        <div style="text-align: center;">
            <h3>MINISTRY OF INTERIOR PAKISTAN</h3>
            <br>
            <p style = "font-size: 20px; font-weight: bold;  text-decoration: underline;">Permi Paper Verification</p>

        <div style="text-align: center;">
         <img src="https://blogger.googleusercontent.com/img/a/AVvXsEiyUBXfrWvKaiElCYkP7wa50L-5g2lfLTnsbI6uOLaqoMosoLyj5nVQdNSQ8CsFXxTVJA3LHdrwOcrpMxk-6Ugta1AFxRCAJc3TO18l447aBw_bjIeD3Z2luAhrikuPTBK_fFmsSrz8QmM84qEhhcxPhffrYj0RouxfBLKXJ39OGmOqR6SSsRgjmnFp=s320" 
         alt="Pakistan Emblem" 
         style="width: 150px; height: auto; margin-bottom: 10px;" />

         
        <div style="text-align: center; line-height: 1.2;"">
          <p style="font-size: 18px; font-weight: bold; color: red; margin-bottom: 60px;">VALID FOR ALL PAKISTAN</p>
          <p><strong style="text-decoration: underline; line-height: 2;">Issuing Authority:</strong> <br> ${cnicDetails.issuingAuthority}</p>
          <p>${cnicDetails.officerTitle}</p>
          <p>${cnicDetails.govOf}</p>
        </div>
  
        <div style="margin-top: 60px; text-align: center; line-height: 0.5;">
          <h5 style="text-decoration: underline;">Personal Details</h5>
          <div style="font-family: Lora, serif; font-size: 14px; line-height: 0.5;">
          <p><strong>Name:</strong> ${cnicDetails.name}</p>
          <p><strong>Father Name:</strong> ${cnicDetails.fatherName}</p>
          <p><strong>CNIC:</strong> ${cnicDetails.cnic}</p>
          <p><strong>Address:</strong> ${cnicDetails.address}</p>
          </div>
        </div>
  
        <div style="margin-top: 60px; text-align: center ; line-height: 2;"">
          <h5 style="text-decoration: underline;">Vehicle Details</h5>
          <div style="font-family: Lora, serif; font-size: 14px; line-height: 0.5;">
          <p><strong>Registration No:</strong> ${cnicDetails.registrationNo}</p>
          <p><strong>Model:</strong> ${cnicDetails.model}</p>
          <p><strong>Made:</strong> ${cnicDetails.made}</p>
          <p><strong>Make:</strong> ${cnicDetails.make}</p>
          <p><strong>Colour:</strong> ${cnicDetails.color}</p>
          </div>
        </div>
  
        <div style="font-family: Lora, serif; font-size: 14px; margin-top: 60px;  text-align: center; line-height: 1.2">
          <p><strong>Issue Date:</strong> ${cnicDetails.issueDate}</p>
          <p><strong>Expiry Date:</strong> ${cnicDetails.expiryDate}</p>
        </div>
      `;
  } else {
    detailsContent.innerHTML = '<p class="centered-text">Record not found</p>';
  }

  // Show the details section
  detailsContainer.style.display = "block";
});
