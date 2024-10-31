
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
let etatEdit=false

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
        
        //insertion de rows et chaqu'un determine le nombre de cellule afin que remplir par le contenu de form
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
        
        //coloré la ligne selon l'etat de latache 
        switch(etat){
            case "A faire":  newRow.classList.add("table", "table-success")
                 break;
            case "En cours": newRow.classList.add("table", "table-warning")
                break;
            case "Terminé": newRow.classList.add("table", "table-info")
                break;
            case "En retard":  newRow.classList.add("table", "table-danger")
                break;
        }


        //creation button Edit
        let buttonEdit = document.createElement('button')
        buttonEdit.textContent = "Edit"
        cel4.appendChild(buttonEdit)

        //creation button Delete
        let buttonDelete = document.createElement('button')
        buttonDelete.textContent = "Delete"
        cel4.appendChild(buttonDelete)

        // design les button par les donner les classes de bootstrap
        buttonEdit.classList.add("btn", "btn-primary", "px-4", "mx-4")
        buttonDelete.classList.add("btn", "btn-danger", "px-3", "mx-4")

        //fonction delete
        buttonDelete.addEventListener("click", function () {

            newRow.remove();
        })

        //vider le contenu des input de form
        let form = document.getElementById('form')
        form.reset()

         //function button edit
       buttonEdit.addEventListener("click",function(){
        //    alert("btn edit clicked")
        document.getElementById('titre').value =cel.innerText
        document.getElementById('description').value=cel1.innerText
        document.getElementById('etat').value=cel2.innerHTML
        document.getElementById('date').value=cel3.innerText
        btnAdd.textContent="Edit Task"
        btnAdd.classList.add("btn-primary","px-4")

        newRow.remove();
        //  btnAdd.textContent="Add"
 
        // let btn=ducument.createElement('button')
        // btn.textContent="EditTask"
        // let form = document.getElementById('form')
        // form.appendChild(btn)

       })
    }
     btnAdd.textContent="Add"

      



})

