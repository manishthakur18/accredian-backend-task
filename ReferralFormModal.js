// In ReferralFormModal.js or wherever your form is handled
const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:3001/api/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Referral submitted successfully');
        handleClose();
        handleSnackbarOpen();
      } else {
        console.error('Error submitting referral');
      }
    } catch (error) {
      console.error('Error submitting referral:', error);
    }
  };
  