.LoL {
  --borderWidth: 3px;
  background: #000000;
  position: relative;
}
.LoL, .title{
  background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;
  line-height: 60px;
    background-size:600vw 600vw;
  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textAnimate 5s linear infinite alternate;
}
@keyframes textAnimate {
  from {
    filter: hue-rotate(0deg);
    background-position-x: 0%;
    
  }
  to {
    filter: hue-rotate(360deg);
    background-position-x: 600vw;
    
  }
}
.LoL:after {
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(60deg, #36393e, #1e2124, #282b30);
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  background-size: 300% 300%;
}

.LoL, .button {
  border: none;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  width: 100%;
  text-align: center;
  border-radius: 6px;
  color: black; 
  background-color:rgba(80,20,70);
}
.LoL, .button:hover {
  background-color:rgb(20,20,30);
  border:solid rgba(80,20,70) 2px;
}
.LoL, .button:active {
  box-shadow: 0 0.2px rgba(80,20,70);
  transform: translateY(1px);
  background-color: #202030;
}
