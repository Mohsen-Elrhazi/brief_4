
// var tabtask = []

// function add() {
//     let titre = document.getElementById('titre').value
//     let descr = document.getElementById('description').value
//     let etat = document.getElementById('etat').value
//     let date = document.getElementById('date').value
// window.alert("Titre"+titre.value+"description: "+descr.value+"etat: "+etat.value+"date: "+date.value )


// let Task = [titre, descr, etat, date]
// tabtask.push(Task)
// console.log(Task)

//affecter les valeurs a table
// tabtask.push([titre,descr,etat,date])


//tester si l'input est vide
// if(document.getElementById('titre').value.trim() == " "){
//     alert("entrer le texte")
//     console.log("entrer le texte")
// }

// let table=document.getElementById('tableTasks')

// let newRow=table.insertRow()

// let cel =newRow.insertCell(0)
// let cel1=newRow.insertCell(1)
// let cel2 =newRow.insertCel(2)
// let cel3=newRow.insertCel(3)


// cel1.textContent= document.getElementById('description').value;
// cel2.textContent=etat;
// cel3.textContent=date;

// reset form
// formm.reset();

// }


// 2eme type function

var tabTasks = []

let btnAdd = document.getElementById("btn-add")

btnAdd.addEventListener("click", function () {
    let titre = document.getElementById('titre').value
    let descr = document.getElementById('description').value
    let etat = document.getElementById('etat').value
    let date = document.getElementById('date').value


    if (!titre || !descr || !etat || !date) {
        alert("veuillez remplir tous les champs")
    }

    else {
        //tab local
        let tasks = []
        tasks.push(titre, descr, etat, date)
        console.log(tasks)

        //tab global
        tabTasks.push(tasks)
        console.log(tabTasks)

        let table = document.getElementById('tableTasks')

        let newRow = table.insertRow()

        let cel = newRow.insertCell(0)
        let cel1 = newRow.insertCell(1)
        let cel2 = newRow.insertCell(2)
        let cel3 = newRow.insertCell(3)
        let cel4 = newRow.insertCell(4)


        cel.textContent = titre
        cel1.textContent = descr
        cel2.textContent = etat
        cel3.textContent = date

        if (etat == "A faire") {
            newRow.classList.add("table", "table-success")
        }
        if (etat == "En cours") {
            newRow.classList.add("table", "table-warning")
        }
        if (etat == "Terminé") {
            newRow.classList.add("table", "table-info")
        }
        if (etat == "En retard") {
            newRow.classList.add("table", "table-danger")
        }


        //creation button Edit
        let buttonEdit = document.createElement('button')
        buttonEdit.textContent = "Edit"
        cel4.appendChild(buttonEdit)

        //creation button Delete
        let buttonDelete = document.createElement('button')
        buttonDelete.textContent = "Delete"
        cel4.appendChild(buttonDelete)

        // Ajout les button dan la cellule
        buttonEdit.classList.add("btn", "btn-primary", "px-4", "mx-4")
        buttonDelete.classList.add("btn", "btn-danger", "px-3", "mx-4")

        //fonction delete
        buttonDelete.addEventListener("click", function () {

            newRow.remove();
        })

        //vider le contenu des input 
        let form = document.getElementById('form')
        form.reset()
    }



})

