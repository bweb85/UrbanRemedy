document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");

    form.addEventListener('submit', (e) => {
        // Check if each input in the form is valid
        const isValid = Array.from(form.elements).every((element) => {
            return element.checkValidity();
        });

        if (!isValid) {
            e.preventDefault();
            e.stopPropagation();
        }

        form.classList.add('was-validated');
    });

    // Reset the form validation state when the form is reset
    form.addEventListener('reset', () => {
        form.classList.remove('was-validated');
    });
});
