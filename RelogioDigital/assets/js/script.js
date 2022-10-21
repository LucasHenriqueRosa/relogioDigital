//AQUI EU PEGO OS 'ID' DO MEU CSS
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

//AQUI EU DECLARO UMA FUNÇÃO, NO CASO 'PEGUEI HR-MIN-SEC' PARA PUXAR HORA-MINUTO- SEGUNDOS
const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

//AQUI É A FORMA DE ACRESCENTAR O '0' PARA NUMEROS MENORES QUE '10'

    if(hr < 10) hr = '0' + hr;

    if(min < 10) min = '0' + min;

    if(sec < 10) sec = '0' + sec;

//AQUI EU PUXO OS 'ID' DO HTML E USO A DECLARAÇÃO 'HR-MIN-SEC' PARA SUBSTITUIR O A ÁREA DE TEXTO NO HTML
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
}) 