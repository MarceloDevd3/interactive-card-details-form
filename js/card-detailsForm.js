let form = document.getElementById('formCard')
  

form.addEventListener('submit', function(e){
  e.preventDefault()
  let vsisiblyform = document.querySelector('.formulario')   
  vsisiblyform.style.display = 'none'
  const continua = document.getElementById('continua')
  continua.style.display = 'flex'
}) 



function getName() {

    let errorTxt = document.querySelector('.nameerror') ;
    let numCard = document.getElementById('yourname').value;
    const sequencia = numCard.toString();
    const regex = /\d/; // Expressão regular para numero
    const numStyle = document.getElementById('yourname');
    document.getElementById('Name').innerText = numCard;
    
    /*error e mensagem de error*/
    if(regex.test(sequencia)) {
      errorTxt.style.display = 'inline-block'
      numStyle.style.borderColor = 'red'
    }else {
      errorTxt.style.display = 'none'
      numStyle.style.borderColor = 'gray'
      
    }
}
  

  function getNumberOfTheCard() {
  const numCard = document.getElementById('numcard').value.replace(/(\d{4})(?=\d)/g, ' $1 ');
  document.getElementById('num').innerText = numCard;
  const sequencia = numCard.toString();
  const regex = /[a-zA-Z]/; // Expressão regular para letras maiúsculas e minúsculas
  const numStyle = document.getElementById('numcard');
  const NumberOfTheCardError = document.querySelector('.txt-numonly');

  /*error e mensagem de error*/
  if(regex.test(sequencia)) {
    numStyle.style.borderColor = 'red';
    NumberOfTheCardError.style.display = 'inline-block';
  }else {
    numStyle.style.borderColor = 'gray';
    NumberOfTheCardError.style.display = 'none';
   
  }

}

const txtError = document.querySelector('.monthYear');

function getMonth() {
  let month = document.getElementById('month').value;
  document.getElementById('Months').innerText = month;
  let monthstyle = document.getElementById('month');

  /*error e mensagem de error*/
  if(month === ''){
    monthstyle.style.borderColor = 'red';
    txtError.style.display = 'inline-block'
  }else {
    monthstyle.style.borderColor = 'gray';
    txtError.style.display = 'none';
  }
  
}

function getYear() {
  let year = document.getElementById('year').value
  document.getElementById('validate-year').innerText = year;
  let yearstyle = document.getElementById('year');

/*error e mensagem de error*/
if(year === ''){
yearstyle.style.borderColor = 'red';
txtError.style.display = 'inline-block';
}else {
yearstyle.style.borderColor = 'gray';
txtError.style.display = 'none';
}
}


function getCvc() {
  let cvc = document.getElementById('cvc').value
  document.getElementById('CVC').innerText = cvc;
  let CVC = document.getElementById('cvc');
  let errorTxt = document.querySelector('.cvc-txt') 
    if(cvc === ''){
    CVC.style.borderColor = 'red'
    errorTxt.style.display = 'inline-block'  
    }else {
    CVC.style.borderColor = 'gray'
    errorTxt.style.display = 'none'
    }

}  


