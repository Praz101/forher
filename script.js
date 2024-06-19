document.getElementById('loveForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();
    
    let lovePercentage;
    let resultMessage;
    
    // Check if the specific names are entered
    if ((name1 === 'parina' && name2 === 'prajwal') || (name1 === 'parina' && name2 === 'prajwal')) {
        lovePercentage = 100;
        resultMessage = `${capitalizeFirstLetter(name1)} and ${capitalizeFirstLetter(name2)} are a perfect match and they should remain together forever!!`;
    } else {
        lovePercentage = Math.floor(Math.random() * 100) + 1;
        resultMessage = `${capitalizeFirstLetter(name1)} and ${capitalizeFirstLetter(name2)} are ${lovePercentage}% compatible!`;
    }
    
    document.getElementById('result').textContent = resultMessage;
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
