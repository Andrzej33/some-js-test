const getTemplate = value => `
<div class="timer">
        <p class="amount">${value}</p>
        <button class = "btn-stop">stop</button>
        <button class = "btn-start">start</button>
        </div>`;

    class Timer{
        constructor({selector,start=0}){
            this.parent = document.querySelector(selector)
            this.value = start;
            this.render();
            this.startButton = this.parent.querySelector('.btn-start');
            this.stopButton = this.parent.querySelector('.btn-stop');
            this.amount = this.parent.querySelector('.amount ');

            // this.stopButton.setAttribute('disabled',true);
            this.stopButton.disabled = true;

            this.stopButton.addEventListener('click',this.stop.bind(this))
            this.startButton.addEventListener('click',this.start.bind(this))
        }
        render(){
            this.parent.innerHTML ='';
            this.parent.insertAdjacentHTML('beforeend', getTemplate(this.value));
            
         }
         incrementValue (){
            this.value++;
            this.amount.textContent = this.value;
         }
         
         start() {
           if(this.timerId)
           return;
           
           this.startButton.setAttribute('disabled',true);
            this.stopButton.removeAttribute('disabled');
           this.timerId = setInterval(()=>{
                this.incrementValue()
            },1000);

         }
         stop() {
            this.stopButton.setAttribute('disabled',true);
           this.startButton.removeAttribute('disabled');
            clearInterval(this.timerId);
            this.timerId=0;
         }
    }

    const timer1 = new Timer({selector:'.timer-1',start: 10});
    const timer2 = new Timer({selector:'.timer-2',start: 20});
    const timer3 = new Timer({selector:'.timer-3',start:30});