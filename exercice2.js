function tarif(age) {
    if (age <= 3 || (age < 5 && age<= 18 || ( age >18 ))); {
      return "Gratuit"
    } else{

    }
}
     
     let age = prompt("Quel est ton âge ?" );
     console.log(tarif(age));