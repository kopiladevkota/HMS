// frontend/script.js

// Function to show different tabs
function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach((tab) => {
    tab.style.display = 'none';
  });

  document.getElementById(tabName).style.display = 'block';
}

// Function to add a new patient
function addPatient() {
  const patientName = document.getElementById('patientName').value.trim();
  const patientAge = document.getElementById('patientAge').value.trim();
  const patientAddress = document.getElementById('patientAddress').value.trim();

  if (patientName !== '' && patientAge !== '' && patientAddress !== '') {
    const patientList = document.getElementById('patientList');

    // Create new list item
    const li = document.createElement('li');
    li.textContent = `${patientName} - Age: ${patientAge}, Address: ${patientAddress}`;

    // Create 'Remove' button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.onclick = function () {
      patientList.removeChild(li);
    };

    // Append buttons to list item
    li.appendChild(removeBtn);

    // Append list item to the patient list
    patientList.appendChild(li);

    // Clear input fields
    document.getElementById('patientName').value = '';
    document.getElementById('patientAge').value = '';
    document.getElementById('patientAddress').value = '';
  }
}

// Function to add a new doctor
function addDoctor() {
  const doctorName = document.getElementById('doctorName').value.trim();
  const doctorSpecialty = document.getElementById('doctorSpecialty').value.trim();

  if (doctorName !== '' && doctorSpecialty !== '') {
    const doctorList = document.getElementById('doctorList');

    // Create new list item
    const li = document.createElement('li');
    li.textContent = `${doctorName} - Specialty: ${doctorSpecialty}`;

    // Create 'Remove' button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.onclick = function () {
      doctorList.removeChild(li);
    };

    // Append buttons to list item
    li.appendChild(removeBtn);

    // Append list item to the doctor list
    doctorList.appendChild(li);

    // Clear input fields
    document.getElementById('doctorName').value = '';
    document.getElementById('doctorSpecialty').value = '';
  }
}

// Add patient on button click
document.getElementById('addPatientBtn').addEventListener('click', addPatient);

// Add doctor on button click
document.getElementById('addDoctorBtn').addEventListener('click', addDoctor);
