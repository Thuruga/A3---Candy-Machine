class Elevator {
    constructor() {
        this.currentFloor = 0;
        this.targetFloor = 0;
        this.isMoving = false;
        this.buttons = document.querySelectorAll('.floor-btn');
        this.floorDisplay = document.getElementById('floor-display');
        this.statusElement = document.getElementById('status');
        this.doorsContainer = document.querySelector('.doors');
        this.viewImage = document.getElementById('view-image');
        this.doorSound = document.getElementById('door-sound');
        this.dingSound = document.getElementById('ding-sound');
        this.musicSound = document.getElementById('music-sound');
        this.init();
    }

    init() {
        // Portas abertas e imagem inicial do térreo
        this.doorsContainer.classList.add('open');
        this.viewImage.src = './imagens/0andar.gif';
        this.musicSound.pause();
        this.updateButtonStates();

        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const floor = parseInt(btn.dataset.floor, 10);
                if (!this.isMoving && floor !== this.currentFloor) {
                    this.callElevator(floor);
                }
            });
        });
    }

    async callElevator(targetFloor) {
        this.isMoving = true;
        this.targetFloor = targetFloor;
        this.updateButtonStates();

        // Fechar portas
        this.statusElement.textContent = 'Fechando portas...';
        this.doorsContainer.classList.remove('open');
        this.viewImage.style.display = 'none';
        await this.delay(2000);

        // Tocar música enquanto portas fechadas
        this.musicSound.currentTime = 0;
        this.musicSound.play();

        // Movimento
        this.statusElement.textContent = 'Em Movimento';
        await this.moveElevator();

        // Abrir portas
        this.statusElement.textContent = 'Abrindo portas...';
        this.doorsContainer.classList.add('open');
        await this.delay(2000);

        // Parar música e tocar efeitos
        this.musicSound.pause();
        this.dingSound.play();
        this.doorSound.play();

        // Atualizar imagem do andar (GIF ou PNG)
        const ext = this.currentFloor === 0 ? 'gif' : 'png';
        const imgName = this.currentFloor === 0 
            ? '0andar.gif' 
            : `${this.currentFloor}andar.png`;
        this.viewImage.src = `./imagens/${imgName}`;
        this.viewImage.style.display = 'block';

        this.completeMovement();
    }

    async moveElevator() {
        const start = this.currentFloor;
        const distance = Math.abs(this.targetFloor - start);
        const direction = this.targetFloor > start ? 1 : -1;
        for (let i = 1; i <= distance; i++) {
            await this.delay(2000);
            this.currentFloor = start + direction * i;
            this.floorDisplay.textContent = this.currentFloor === 0 ? 'T' : this.currentFloor;
        }
    }

    completeMovement() {
        this.isMoving = false;
        this.statusElement.textContent = 'Portas Abertas';
        this.updateButtonStates();
    }

    updateButtonStates() {
        this.buttons.forEach(btn => {
            const floor = parseInt(btn.dataset.floor, 10);
            btn.disabled = floor === this.currentFloor;
            btn.classList.toggle('active', floor === this.currentFloor);
        });
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new Elevator();
});