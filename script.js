
    function calcola(){
        calcolaDivisori()
    }   
    
    function calcolaDivisori() {
        const numero = parseInt(document.getElementById("numeroInput").value);
        const divisori = [];

        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                divisori.push(i);
            }
        }

        const divisoriList = document.getElementById("divisoriList");
        divisoriList.innerHTML = ""; 

        for (let i = 0; i < divisori.length; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = divisori[i];
            divisoriList.appendChild(listItem);
        }
    }


    calcolaButton.onclick = calcola;
;