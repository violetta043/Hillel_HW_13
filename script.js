const button = document.querySelector('.btn_login'); 
const loader = document.querySelector('.loader');



button.addEventListener('click', function() {
    const input1 = document.getElementById('email').value;
    const input2 = document.getElementById('password').value;

    if(!input1 || !input2) {
        console.log('please write someting')
    } else {
        loader.style.display = 'block';
        setTimeout(function() {
            location.href = 'profile.html'
        }, 2000)
    }
   console.log(input1);
   console.log(input2); 
});







