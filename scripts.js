const container = document.querySelector('.coffee-bubbles');

        function createBubble() {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');

            // Random tamanho entre 8px e 24px
            const size = Math.random() * 16 + 8;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;

            // Posição horizontal aleatória
            bubble.style.left = `${Math.random() * 100}%`;

            // Duração da animação entre 5s e 15s
            const duration = Math.random() * 10 + 5;
            bubble.style.animationDuration = `${duration}s`;

            // Atraso aleatório
            const delay = Math.random() * 5;
            bubble.style.animationDelay = `${delay}s`;

            container.appendChild(bubble);

            // Remove a bolha quando termina a animação
            setTimeout(() => {
            bubble.remove();
            }, (duration + delay) * 1000);
        }

        // Gera bolhas continuamente
        setInterval(createBubble, 200); // a cada 0.2s
        bubble.style.borderRadius = `${Math.random() * 30 + 40}% ${Math.random() * 30 + 40}%`;