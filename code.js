let inputBox = document.getElementById('inputBox');
let resultDiv = document.getElementById('result');
let qrImage = document.getElementById('qr-image');
let loadStatement = document.getElementById('load');

function createQrCode(value) {
    value = inputBox.value;
    if (inputBox.value !== "") {
        resultDiv.style.display = "flex";
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${value}`;
        loadStatement.innerHTML = inputBox.value;
    }
    else {
        alert("Input field is empty!!")
    }
}
inputBox.value = "Conservation of our Mother Earth!!"
createQrCode(inputBox.value);

inputBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        createQrCode();
        event.preventDefault();
    }
})