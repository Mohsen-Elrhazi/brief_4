

var tabTasks = []

let btnAdd = document.getElementById("btn-add")
let editInForm = document.getElementById("edit-form")
editInForm.style.display = "none"
let btnAnl = document.getElementById('annuler')

let table = document.getElementById('btable')
tableTasks.style.visibility = "hidden"

let form = document.getElementById('form')

let indiceEdit = -1  //indice pour suivre la tache a editer

//fonction anuler
btnAnl.addEventListener("click", function () {
    form.reset()
    btnAdd.style.display = "block"
    editInForm.style.display = "none"
})

btnAdd.addEventListener("click", function () {
    tableTasks.style.visibility = "visible"

    let titre = document.getElementById('titre').value
    let descr = document.getElementById('description').value
    let etat = document.getElementById('etat').value
    let date = document.getElementById('date').value


    if (!titre || !descr || !etat || !date) {
        alert("veuillez remplir tous les champs")
    }

    else {
        // ajouter la tache au tableau
        tabTasks.push([titre, descr, etat, date])

        //insertion de rows et chaqu'un determine le nombre de cellule afin que remplir par le contenu de form
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

        //creation button Edit
        let btnEditInTable = document.createElement('button')
        btnEditInTable.textContent = "Edit"
        cel4.appendChild(btnEditInTable)

        //creation button Delete
        let buttonDelete = document.createElement('button')
        buttonDelete.textContent = "Delete"
        cel4.appendChild(buttonDelete)

        // design les buttons par les donner les classes de bootstrap
        btnEditInTable.classList.add("btn", "btn-primary", "px-4", "mx-4")
        buttonDelete.classList.add("btn", "btn-danger", "px-3", "mx-4")

        //coloré la ligne selon l'etat de latache 
        switch (etat) {
            case "A faire": newRow.classList.add("table-success")
                break;
            case "En cours": newRow.classList.add("table-warning")
                break;
            case "Terminé": newRow.classList.add("table-info")
                break;
            case "En retard": newRow.classList.add("table-danger")
                break;
        }

        //vider le contenu des input de form apres l'ajout dans la table
        form.reset()

        //fonction delete
        buttonDelete.addEventListener("click", function () {
            if (confirm("avez-vous sure de supprimer cette tache")) {
                newRow.remove();
                if (table.getElementsByTagName('tr').length <= 1) {
                    tableTasks.style.visibility = "hidden";
                }
                //supprimer la tache de la table task
                let index = Array.from(table.rows).indexOf(newRow);
                tabTasks.splice(index, 1);
            }
        })

        //function button edit qui est dans la table 
        btnEditInTable.addEventListener("click", function () {
            //masquer le bouton add et afficher le bouton edit dans la form
            btnAdd.style.display = "none"
            editInForm.style.display = "block"

            //Afficher les infos de la tache de tableau a la form
            document.getElementById('titre').value = cel.textContent
            document.getElementById('description').value = cel1.innerText
            document.getElementById('etat').value = cel2.textContent
            document.getElementById('date').value = cel3.innerText

            // sauvegarder l'index de la tâche pour mise à jour
            indiceEdit = Array.from(table.rows).indexOf(newRow);

        })
    }
})



// Fonction pour enregistrer les modifications dans le tableau
editInForm.addEventListener("click", function () {
    if (indiceEdit >= 0) {
        let titre = document.getElementById("titre").value;
        let descr = document.getElementById("description").value;
        let etat = document.getElementById("etat").value;
        let date = document.getElementById("date").value;

        // mise à jour du tableau
        tabTasks[indiceEdit] = [titre, descr, etat, date];

        // mise à jour de la ligne dans le tableau HTML
        let row = table.rows[indiceEdit];
        row.cells[0].textContent = titre;
        row.cells[1].textContent = descr;
        row.cells[2].textContent = etat;
        row.cells[3].textContent = date;

        // changer la couleur de la ligne selon etat
        row.className = ''; // reinitialiser les classes
        switch (etat) {
            case "A faire":
                row.classList.add("table", "table-success");
                break;
            case "En cours":
                row.classList.add("table", "table-warning");
                break;
            case "Terminé":
                row.classList.add("table", "table-info");
                break;
            case "En retard":
                row.classList.add("table", "table-danger");
                break;
        }

        // Réinitialiser le formulaire et masquer le bouton "Edit"
        form.reset();
        indiceEdit = -1;

        btnAdd.style.display = "block"
        editInForm.style.display = "none"
    }
});
