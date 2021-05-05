var modal = document.getElementById("myModal");

function playBeep() {
    var beep = new Audio('./sounds/zapsplat_office_electronic_typewriter_single_button_press_beep_brother_ax_450_33756.mp3')
    beep.play();
}

function playBell() {
    var bell = new Audio('./sounds/zapsplat_bells_small_bell_service_or_elevator_18043.mp3')
    bell.play();
}

function playDoor() {
    var door = new Audio('./sounds/industrial_machinery_elevator_door_open_001.mp3')
    door.play();
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showModal() {
    modal.style.display = "block";
}

function doorOpenLeft() {
    var elementL = document.getElementById("doorleft");
    elementL.classList.add("animateleft");
    setTimeout(() => { elementL.classList.add("hide"); }, 2250);
   
  }

function doorOpenRight() {
    var elementR = document.getElementById("doorright");
    elementR.classList.add("animateright");
    setTimeout(() => { elementR.classList.add("hide"); }, 2250);
  }

function openDoor(){
    playBell();
    playDoor();
    doorOpenLeft();
    doorOpenRight();
    setTimeout(() => { showModal(); }, 3000);
}

function openDoor2(){
    playDoor();
    doorOpenLeft();
    doorOpenRight();
}

function doorCloseLeft() {
    var elementCL = document.getElementById("doorleft");
    setTimeout(() => { elementCL.classList.remove("hide"); }, 1500);
    elementCL.classList.remove("animateleft");
    setTimeout(() => { modal.style.display = "none"; }, 200);
}

function doorCloseRight() {
    var elementCR = document.getElementById("doorright");
    setTimeout(() => { elementCR.classList.remove("hide"); }, 1500);
    elementCR.classList.remove("animateright");
}

function closeDoor(){
    playBeep();
    setTimeout(() => { 
        doorCloseRight(); 
        doorCloseLeft();
        playDoor(); }, 1000);
}

function liftMove() {
    var move = new Audio('./sounds/industrial_machinery_elevator_ride.mp3')
    var ping = new Audio('./sounds/zapsplat_vehicles_aircraft_call_bell_single_tone_44563.mp3')
    move.play();
    setTimeout(() => { ping.play(); }, 6000);
    setTimeout(() => { openDoor2(); }, 7000);
    
}

function move() {
    closeDoor(); 
    liftMove();
}

function doorCloseG() {
    doorCloseRight(); 
    doorCloseLeft();
    playDoor();
}