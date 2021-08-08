let inputText = document.querySelector('#value');
let option = document.querySelector('#options');
let result = document.querySelector('.result');
let abc =
  "bcdghãóijkopqr48ôst290uêíìaîemnúâòõvwflxÛÑyz á567ÁÀÂÃÉÈÍÌÎÓÕÔàéèùûñ,?:,.!-_«»+1|<>'QWERTYUIOPASDÒÚÙFGHJKLZXCVBNM\n";

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function cript(value, opt) {
  let res = '';
  let index;
  let size;
  let operation;
  let char;

  const numberWhenDecript = parseInt(`${value[value.length - 1]}${value[0]}`);

  value = opt === 'decript' ? value.substring(1, value.length - 1) : value;

  const randomNumber = getRandomArbitrary(10, 40);

  [...value].map(item => {
    index = abc.indexOf(item);
    size = abc.length - 1;
    operation =
      opt === 'encript' ? index + randomNumber : index - numberWhenDecript;

    char =
      opt === 'encript'
        ? operation > size
          ? abc[operation - size - 1]
          : abc[operation]
        : operation < 0
        ? abc[size + operation + 1]
        : abc[operation];

    res += char;
  });

  const rN = randomNumber.toString();

  let newRes = opt === 'encript' ? `${rN[1]}${res}${rN[0]}` : res;

  return newRes;
}

inputText.onkeyup = () => {
  if (inputText.value) {
    option.removeAttribute('disabled');

    return;
  }

  option.setAttribute('disabled', '');
};

option.onchange = () => {
  //Get the text
  const text = inputText.value;

  if (option.value) {
    result.innerHTML = `${option.value.toUpperCase()}ED: ${cript(
      text,
      option.value
    )}`;

    return;
  }

  result.value = 'Resultado: opção inválida';
};
