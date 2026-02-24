        let currentDisplay = '';
        const deleteBtn = document.getElementById('#del');
        deleteBtn.addEventListener('click',() =>{
            currentDisplay.value = currentDisplay.slice(0, -1);
        });
        document.querySelector('#display').value = currentDisplay;