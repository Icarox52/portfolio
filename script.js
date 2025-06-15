AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});


window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


let lastScrollTop = 0;
let scrollDirection = 'down';


AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: false
});


window.addEventListener('scroll', () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  
  if (st > lastScrollTop) {
    scrollDirection = 'down';
  } else {
    scrollDirection = 'up';

    document.querySelectorAll('[data-aos]').forEach(el => {
      el.classList.remove('aos-animate');
      setTimeout(() => {
        el.classList.add('aos-animate');
      }, 50);
    });
  }
  lastScrollTop = st <= 0 ? 0 : st;


  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', st > 50);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


function resetProjectsAnimation() {
  const projects = document.querySelectorAll('#projects [data-aos]');
  projects.forEach(project => {
    if (isElementInViewport(project)) {
      project.classList.remove('aos-animate');
      setTimeout(() => {
        project.classList.add('aos-animate');
      }, 100); 
    }
  });
}


function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}


window.addEventListener('scroll', () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  
  if (st > lastScrollTop) {
    scrollDirection = 'down';
  } else {
    scrollDirection = 'up';
    resetProjectsAnimation();
  }
  lastScrollTop = st <= 0 ? 0 : st;


  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', st > 50);
});


particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": true },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
  }
});


new Typed('#typed-text', {
  strings: ["Full-Stack", "Criativo", "JavaScript"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});


document.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  document.querySelector('.hero-section').style.transform = `translateY(${scrollPosition * 0.3}px)`;
});


document.addEventListener('DOMContentLoaded', function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 150,
                "density": {
                    "enable": true,
                    "value_area": 1500
                }
            },
            "color": {
                "value": "#6e45e2"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.7,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.5,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 200,
                "color": "#6e45e2",
                "opacity": 0.4,
                "width": 1.5
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": true,
                "attract": {
                    "enable": true,
                    "rotateX": 1000,
                    "rotateY": 1000
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 250,
                    "line_linked": {
                        "opacity": 0.8
                    }
                },
                "push": {
                    "particles_nb": 6 
                }
            }
        },
        "retina_detect": true
    });


    new Typed('#typed-text', {
        strings: ["Full-Stack", "Criativo", "JavaScript"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });


    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        document.querySelector('.hero-section').style.transform = `translateY(${scrollPosition * 0.2}px)`;
    });


    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });


    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false
    });
});


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 2000
      }
    },
    "color": {
      "value": "#6e45e2"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.7,
      "random": true
    },
    "size": {
      "value": 2.5,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 250,
      "width": 1.2,
      "blink": false
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "out_mode": "bounce",
      "attract": {
        "enable": true,
        "rotateX": 2000,
        "rotateY": 2000
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab",
        "distance": 300
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "grab": {
        "line_linked": {
          "opacity": 0.9
        }
      },
      "push": {
        "particles_nb": 8
      }
    }
  },
  "retina_detect": true
});


new Typed('#typed-text', {
  strings: ["Full-Stack", "Criativo", "JavaScript"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});



document.addEventListener('DOMContentLoaded', function() {
  const servicos = document.querySelectorAll('.card-servico');
  
  servicos.forEach((servico, index) => {
    servico.addEventListener('mouseenter', () => {
      servico.style.transitionDelay = `${index * 50}ms`;
    });
    
    servico.addEventListener('mouseleave', () => {
      servico.style.transitionDelay = '0ms';
    });
  });
});



    document.getElementById('current-year').textContent = new Date().getFullYear();


    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 120
    });
    
    // Initialize Particles.js
    document.addEventListener('DOMContentLoaded', function() {
      if (document.getElementById('particles-js')) {
        particlesJS.load('particles-js', 'particles.json', function() {
          console.log('Particles.js loaded');
        });
      }
      
      
      if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
          strings: ["Full-Stack", "Criativo", "JavaScript"],
          typeSpeed: 50,
          backSpeed: 30,
          loop: true,
          showCursor: true,
          cursorChar: '|',
          smartBackspace: true
        });
      }
    });

    
    document.addEventListener('DOMContentLoaded', function() {
      const whatsappButton = document.getElementById('whatsapp-button');
      const whatsappInput = document.getElementById('whatsapp-input');
      
      whatsappButton.addEventListener('click', function() {
        const message = whatsappInput.value.trim();
        
        if(!message) {
          alert('Por favor, digite uma mensagem antes de enviar.');
          whatsappInput.focus();
          return;
        }
        
        const phoneNumber = '558592762550';
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
      
        const newWindow = window.open(whatsappUrl, '_blank');
        
        if(!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          window.location.href = whatsappUrl;
        }
      });
      
      
      whatsappInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          whatsappButton.click();
        }
      });
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });

    // Configuração da máquina de escrever
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('typed-text')) {
    new Typed('#typed-text', {
      strings: [
        "Full-Stack", 
        "Criativo", 
        "JavaScript"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
      // Configurações para evitar quebra de linha
      contentType: 'text', // Garante que seja tratado como texto puro
      onStringTyped: function() {
        // Força o elemento a manter uma única linha
        const typedElement = document.querySelector('#typed-text');
        typedElement.style.whiteSpace = 'nowrap';
        typedElement.style.overflow = 'hidden';
        typedElement.style.textOverflow = 'ellipsis';
      },
      preStringTyped: function() {
        // Prepara o elemento antes de começar a digitar
        const typedElement = document.querySelector('#typed-text');
        typedElement.style.display = 'inline-block';
        typedElement.style.maxWidth = '100%';
      }
    });
    

    const typedContainer = document.querySelector('.typed-text-container');
    if (typedContainer) {
      typedContainer.style.whiteSpace = 'nowrap';
      typedContainer.style.overflow = 'hidden';
    }
  }
});

new Typed('#typed-text', {
  strings: ["Full-Stack", "Criativo", "JavaScript"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
  showCursor: true,
  cursorChar: '|',
  smartBackspace: true,
  contentType: 'text',
  onBegin: function() {
    const typedElement = document.getElementById('typed-text');
    typedElement.style.verticalAlign = 'top';
  }
});

new Typed('#typed-text', {
  strings: ["Full-Stack", "Criativo", "JavaScript"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
  showCursor: false, // Desativa o cursor padrão
  contentType: 'text',
  preStringTyped: function() {
    // Pré-ajuste antes da animação
    const container = document.querySelector('.typewriter-container');
    container.style.minWidth = container.scrollWidth + 'px';
  },
  onStringTyped: function() {
    // Mantém o container com largura adequada
    const typedElement = document.getElementById('typed-text');
    const container = typedElement.parentElement;
    container.style.minWidth = typedElement.scrollWidth + 'px';
  }
});

