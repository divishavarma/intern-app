export function validateForm(formData) {
  const firstName = formData.get('first_name').toString().trim();
  const lastName = formData.get('last_name').toString().trim();
  const email = formData.get('email').toString().trim();
  const jobRole = formData.get('job_role').toString().trim();
  const address = formData.get('address').toString().trim();
  const city = formData.get('city').toString().trim();
  const pincode = formData.get('pincode').toString().trim();
  const date = formData.get('date').toString().trim();
  const cv = formData.get('resume');

  if (firstName === '' || lastName === '' || email === '' || jobRole === '' || address === '' || city === '' || pincode === '' || date === '') {
    alert('Please fill out all required fields');
    return false;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  if (!isValidPincode(pincode)) {
    alert('Please enter a valid pincode');
    return false;
  }

  if (cv === null) {
    alert('Please upload your CV');
    return false;
  }

  return true;
}



export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function isValidPincode(pincode) {
  const regex = /^[1-9][0-9]{5}$/;
  return regex.test(pincode);
}
