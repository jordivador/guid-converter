document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('guidInput');
    const convertButton = document.getElementById('convertButton');
    const outputField = document.getElementById('output');

    inputField.focus();

    function convertGUID() {
        const x = inputField.value;
        let result = '';

        if (x.length >= 9 && x[8] === '-') {
            result = (
                x.slice(6, 8) + x.slice(4, 6) + x.slice(2, 4) + x.slice(0, 2) +
                x.slice(11, 13) + x.slice(9, 11) + x.slice(16, 18) + x.slice(14, 16) +
                x.slice(19, 21) + x.slice(21, 23) + x.slice(24)
            ).toLowerCase(); // Convert to lowercase
        } else if (x.length >= 8) {
            result = (
                x.slice(6, 8) + x.slice(4, 6) + x.slice(2, 4) + x.slice(0, 2) + '-' +
                x.slice(10, 12) + x.slice(8, 10) + '-' +
                x.slice(14, 16) + x.slice(12, 14) + '-' +
                x.slice(16, 18) + x.slice(18, 20) + '-' +
                x.slice(20)
            ).toUpperCase(); // Convert to uppercase
        } else {
            result = "Wrong parameters, usage examples:\n\n" +
                     '"0ab3bbb46a7ae6119d1d5d053712f664"\n' +
                     '"B4BBB30A-7A6A-11E6-9D1D-5D053712F664"';
        }

        outputField.textContent = result;

        // Copy the result to the clipboard
        navigator.clipboard.writeText(result).then(() => {
            console.log('Output copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy to clipboard', err);
        });
    }

    // Listen for clicks on the convert button
    convertButton.addEventListener('click', convertGUID);

    // Listen for Enter key presses in the input field
    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            convertGUID();
        }
    });
});
