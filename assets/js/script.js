document.querySelector('#submit').addEventListener('click', (heart) => {
    // Prevent form submission
    heart.preventDefault();

    // Get the value from the input field
    var inputValue = document.querySelector('#heartInput').value;

    // Define the valid options
    var validOptions = ["1500", "528", "143", "Love", "180", "9", "99", "Ko", "ko", "koko", "I Love You", "I love you", "love", "baby", "Baby", 
        "၁၅၀၀", "၅၂၈", "၁၄၃", "၁၈၀", "၉", "၉၉", "ကို", "ကိုကို", "မောင်", "မောင်လေး", "ဦး", "ဦးဦး", "ချစ်", "ချစ်ချစ်", "ချစ်လေး", "မင်းကို ချစ်တယ်", "မင်းကိုချစ်တယ်", "ချစ်တယ်"];

    // Check if the input value matches any of the valid options
    if (validOptions.includes(inputValue.trim())) {
        document.querySelector('#result').textContent = "💝  I love You  💞";
    } else {
        document.querySelector('#result').textContent = "Don't you love me?...💔 💔 💔 💔 💔";
    }

    // add reset for form
    document.querySelector("#heartForm").reset();

});