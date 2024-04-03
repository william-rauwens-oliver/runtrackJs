document.addEventListener("DOMContentLoaded", function() {
    const btnCommanderPapillon = document.querySelector('#btnCommanderPapillon');
    btnCommanderPapillon.addEventListener('click', function() {
      $('#modalCommanderPapillon').modal('show');
    });

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function() {
      $('#modalCommanderPapillon').modal('hide');
    });
  });

  document.getElementById('rebootBtn').addEventListener('click', function() {
      document.getElementById('spinner').classList.remove('d-none');
      var citations = [
          "Toutes ces données seront perdues dans le temps comme des larmes dans la pluie.",
          "Ce sont des moments qui meurent dans le temps comme des larmes dans la pluie.",
          "J'ai vu des choses que vous autres humains ne pourriez pas croire."
      ];
      var citationAleatoire = citations[Math.floor(Math.random() * citations.length)];
      document.querySelector('.jumbotron p:last-of-type').textContent = citationAleatoire;
  });

  var contentArray = [
      "Le contenu pour la page 1.",
      "Le contenu pour la page 2.",
      "Le contenu pour la page 3."
  ];

      function changeContent(pageNumber) {
        let contentIndex = pageNumber - 1;
        document.querySelector('.jumbotron p:nth-of-type(2)').textContent = contentArray[contentIndex];
      }


      document.addEventListener("DOMContentLoaded", function() {
        const progressBar = document.querySelector(".progress-bar");
        const leftButton = document.querySelector(".bi-arrow-bar-left");
        const rightButton = document.querySelector(".bi-arrow-bar-right");
    
        function progressForward() {
          let currentValue = parseFloat(progressBar.style.width);
          if (currentValue < 100) {
            progressBar.style.width = (currentValue + 5) + "%";
            progressBar.setAttribute("aria-valuenow", currentValue + 5);
          }
        }
      
        function progressBackward() {
          let currentValue = parseFloat(progressBar.style.width);
          if (currentValue > 0) {
            progressBar.style.width = (currentValue - 5) + "%";
            progressBar.setAttribute("aria-valuenow", currentValue - 5);
          }
        }
      
        leftButton.addEventListener("click", progressBackward);
        rightButton.addEventListener("click", progressForward);
      });
      

      document.addEventListener('keydown', function(event) {
        const key = event.key.toLowerCase();
        if (key === 'd' || key === 'g' || key === 'c') {
          const sequence = ['d', 'g', 'c'];
          const pressedKeys = [];
          document.addEventListener('keydown', function(event) {
            pressedKeys.push(event.key.toLowerCase());
            if (pressedKeys.join('') === sequence.join('')) {
              const modal = document.getElementById('myModal');
              modal.style.display = 'block';
              const formData = new FormData(document.getElementById('container1'));
              let modalContent = '';
              for (const [key, value] of formData.entries()) {
                modalContent += key + ': ' + value + '<br>';
              }
              document.getElementById('modalContent').innerHTML = modalContent;
            }
          });
        }
      });
      
      const closeButton = document.getElementsByClassName('close')[0];
      closeButton.onclick = function() {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
      }
      
      window.onclick = function(event) {
        const modal = document.getElementById('myModal');
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      }

      document.addEventListener("DOMContentLoaded", function() {
        const submitButton = document.querySelector('.btn-primary');
        const emailInput = document.querySelector('input[type="text"]');
        const passwordInput = document.querySelectorAll('input[type="password"]')[0];
        const spinner = document.querySelector('.jumbotron .spinner-border');
    
        submitButton.addEventListener('click', function() {
            if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
                const randomColorIndex = Math.floor(Math.random() * 8);
                spinner.classList.remove('text-primary', 'text-secondary', 'text-success', 'text-danger', 'text-warning', 'text-info', 'text-light', 'text-dark');
    
                switch (randomColorIndex) {
                    case 0:
                        spinner.classList.add('text-primary');
                        break;
                    case 1:
                        spinner.classList.add('text-secondary');
                        break;
                    case 2:
                        spinner.classList.add('text-success');
                        break;
                    case 3:
                        spinner.classList.add('text-danger');
                        break;
                    case 4:
                        spinner.classList.add('text-warning');
                        break;
                    case 5:
                        spinner.classList.add('text-info');
                        break;
                    case 6:
                        spinner.classList.add('text-light');
                        break;
                    case 7:
                        spinner.classList.add('text-dark');
                        break;
                    default:
                        spinner.classList.add('text-primary');
                }
            }
        });
    });