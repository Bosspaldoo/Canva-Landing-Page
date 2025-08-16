        // Thank You Popup Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('requestForm');
            const thankYouPopup = document.getElementById('thankYouPopup');
            const closePopup = document.getElementById('closePopup');
            const closePopupBtn = document.getElementById('closePopupBtn');
            
            // Check if the form was submitted (from URL parameter)
            const urlParams = new URLSearchParams(window.location.search);
            const submitted = urlParams.get('submitted');
            
            if (submitted === 'true') {
                thankYouPopup.classList.add('active');
            }
            
            // Form submission handler
            if (form) {
                form.addEventListener('submit', function(e) {
                    // In a real scenario, this would happen after successful submission
                    // For FormSubmit, we'll use the _next parameter to trigger it
                    // But we'll also add local storage to show it when returning
                    localStorage.setItem('formSubmitted', 'true');
                });
            }
            
            // Close popup handlers
            if (closePopup) {
                closePopup.addEventListener('click', function() {
                    thankYouPopup.classList.remove('active');
                });
            }
            
            if (closePopupBtn) {
                closePopupBtn.addEventListener('click', function() {
                    thankYouPopup.classList.remove('active');
                });
            }
            
            // Check local storage for form submission
            if (localStorage.getItem('formSubmitted')) {
                thankYouPopup.classList.add('active');
                localStorage.removeItem('formSubmitted');
            }
            
            // Close popup when clicking outside
            thankYouPopup.addEventListener('click', function(e) {
                if (e.target === thankYouPopup) {
                    thankYouPopup.classList.remove('active');
                }
            });
        });
