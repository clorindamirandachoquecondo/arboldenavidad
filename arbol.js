// Genera luces dinamico en el arbol//
const lightsContainer = document.querySelector(´.lights`);
    const colors = [´red´, ´yellow´, ´blue´, ´green´];
    const totalLights = 20;
 for (let i = 0; i <totalLights; i++) {
    const light = document.createElement(´div´);
    light.classList.add(´light´, colors[i % colors.length]);
    light.style.top = ´${Math.random() * 100}%´ ;
    light.style.left = ´${Math.random() * 100}%´ ;
    light.style.animationDelay = ´${Math.random()}s´ ;
    lightsContainer.appendChild(light);
}
.green {
    background:green;
    box-shadow: 0 0 15px green;
}
/* Keyframes*/
@Keyframes rotateTree {
0%{
transform: rotateY(0deg);
}
100% {
transform: rotateY(360deg);
 }
}
 
@Keyframes rotateStar {
0%{
transform: rotateX](-50%) rotate(0deg);
}
100% {
transform: rotateX(-50%) rotate(360deg);
 }
}

@Keyframes flicker {
0%{
   opacity: 1;
}
100% {
   opacity: 0.5;

/* Individual lights*/
 .light {
position: absolute;
width: 15px;
height: 15px;
border-radius: 50%;
box-shadow: 0 0 10px;
animation: flicker 1.5s infinite alternate;
 }

 .red {
 background: red;
 box-shadow: 0  0 15px red;
 }


