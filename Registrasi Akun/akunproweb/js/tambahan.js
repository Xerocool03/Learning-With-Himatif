const text = document.getElementById('judulskripsi');

if (document.querySelector('input[name="gridRadios"]')) {
    document.querySelectorAll('input[name="gridRadios"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        var item = event.target.value;
        if(item == "option1"){
            text.removeAttribute('disabled');
        }
        if(item == "option2"){
            text.setAttribute('disabled','');
        }
      });
    });
  }