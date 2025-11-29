//alert("OLÁ JOGADORES ANTES DO JOGO PREENCHAM OS VOSSOS CAMPOS!")





let timer
let segundos = 0;
let para_determinar_empate = true;
const relogio = document.querySelector(".relogio");





let q1,q2,q3,q4,q5,q6,q7,q8,q9;

    q1 = document.querySelector(".quadrado1");
    q2 = document.querySelector(".quadrado2");
    q3 = document.querySelector(".quadrado3");
    q4 = document.querySelector(".quadrado4");
    q5 = document.querySelector(".quadrado5");
    q6 = document.querySelector(".quadrado6");
    q7 = document.querySelector(".quadrado7");
    q8 = document.querySelector(".quadrado8");
    q9 = document.querySelector(".quadrado9");

    //botao de reniciar
    const reniciar = document.querySelector("#reniciar")


function melhorar_o_formato(segundos)
{
    let data = new Date(segundos*1000).toLocaleTimeString("PT-BR", {
        hour12:false,
        timeZone:"UTC"
    })
    return data
}

function iniciar_relogio(){  

 setTimeout(timer,1000)
 timer = setInterval(()=>{
    segundos++
relogio.innerHTML =  `Tempo: ${melhorar_o_formato(segundos)}`
},1000)
  

}



const form = document.querySelector("form");
let nome1 
let nome2  
let valor = 0;



function falar_com_o_jogador(nome=nome1 )
{
   
    document.querySelector(".orientador h3").innerHTML = ` ${nome} agora é a sua vez de jogar`
    return nome;
}

function mostrarTabela()
{
    document.querySelector(".tableContainer").style.display = "table"
}

function ocultarTabela()
{
     document.querySelector(".tableContainer").style.display = "none"
}

const pausarSom =()=> document.querySelector("#somDoJogo").pause();

const playSom = ()=> document.querySelector("#somDoJogo").play();

const reiniciarSom = function(){
    document.querySelector("#somDoJogo").currentTime = 0;
    document.querySelector("#somDoJogo").play();
}

const SomDeVitoria = ()=> document.querySelector("#somDeVitoria").play()
const PausarAlegria = ()=> document.querySelector("#somDeVitoria").pause()

const SomdeEspanto = ()=> document.querySelector("#SomDeespanto").play();
const SomdeEspantoPausado = ()=> document.querySelector("#SomDeespanto").pause();


SomdeEspantoPausado();
PausarAlegria();
pausarSom();



form.addEventListener("submit", (e)=>{
      
    e.preventDefault()
        nome1 = document.querySelector(".jogador1").value;
        nome2 = document.querySelector(".jogador2").value;
       mostrarTabela();
       playSom();

       iniciar_relogio();
       falar_com_o_jogador();
       document.querySelector("#frm").style.display = "none";
      
})


//COdigo para fazer aparecer X ou 0
function quadrado1(X_ou_O){
  if(document.querySelector(".quadrado1").textContent === "X" || document.querySelector(".quadrado1").textContent === "O")
  {
     alert("O quadro Já está preenchido!")
  }
  else{
     document.querySelector(".quadrado1").innerHTML =`${X_ou_O}`
  }
   
}

function quadrado2(X_ou_O){
     if(document.querySelector(".quadrado2").textContent === "X" || document.querySelector(".quadrado2").textContent === "O")
  {
     alert("O quadro Já está preenchido!")
  }
  else{
     document.querySelector(".quadrado2").innerHTML =`${X_ou_O}`
  }
}

function quadrado3(X_ou_O){
     if(document.querySelector(".quadrado3").textContent === "X" || document.querySelector(".quadrado3").textContent === "O")
  {
     alert("O quadro Já está preenchido!")
  }
  else{
     document.querySelector(".quadrado3").innerHTML =`${X_ou_O}`
  }
}
function quadrado4(X_ou_O){
   if(document.querySelector(".quadrado4").textContent === "X" || document.querySelector(".quadrado4").textContent === "O")
  {
     alert("O quadro Já está preenchido!")
  }
  else{
     document.querySelector(".quadrado4").innerHTML =`${X_ou_O}`
  }
}
function quadrado5(X_ou_O){
    if(document.querySelector(".quadrado5").textContent === "X" || document.querySelector(".quadrado5").textContent === "O")
  {
     alert("O quadro Já está preenchido!")
  }
  else{
     document.querySelector(".quadrado5").innerHTML =`${X_ou_O}`
  }
}

function quadrado6(X_ou_O){
    if(document.querySelector(".quadrado6").textContent === "X" || document.querySelector(".quadrado6").textContent === "O")
  {
     alert("O quadro Já está preenchido!")
  }
  else{
     document.querySelector(".quadrado6").innerHTML =`${X_ou_O}`
  }
}

function quadrado7(X_ou_O){
  if(document.querySelector(".quadrado7").textContent === "X" || document.querySelector(".quadrado7").textContent === "O")
  {
     alert("O quadro Já está preenchido!")
  }
  else{
     document.querySelector(".quadrado7").innerHTML =`${X_ou_O}`
  }
}

function quadrado8(X_ou_O){
    if(document.querySelector(".quadrado8").textContent === "X" || document.querySelector(".quadrado8").textContent === "O")
  {
     alert("O quadro Já está preenchido!")
  }
  else{
     document.querySelector(".quadrado8").innerHTML =`${X_ou_O}`
  }
}

function quadrado9(X_ou_O){
  if(document.querySelector(".quadrado9").textContent === "X" || document.querySelector(".quadrado9").textContent === "O")
  {
     alert("O quadro Já está preenchido!")
  }
  else{
     document.querySelector(".quadrado9").innerHTML =`${X_ou_O}`
  }
}





// Adicionando os x ou 0
document.addEventListener("click", (e)=>{
        
       const el = e.target
       if(el.classList.contains("quadrado1")) { 
           if(valor===0){
              quadrado1("X")
               valor =1;
              falar_com_o_jogador(nome2)
              Determinar_vitoria(nome2)
               
             } 
           else{
              quadrado1("O")
              valor = 0
             falar_com_o_jogador(nome1)
             Determinar_vitoria(nome1)
              
       
             }
       }
        if(el.classList.contains("quadrado2")) {
             if(valor===0){
              quadrado2("X")
              Determinar_vitoria(nome2)
               valor =1
              falar_com_o_jogador(nome2)
               
             } 
            else{
              quadrado2("O")
              valor = 0
             falar_com_o_jogador(nome1)
              Determinar_vitoria(nome1)
                
       
             }
         }
         if(el.classList.contains("quadrado3")) {
              if(valor===0){
              quadrado3("X")
               valor =1
              falar_com_o_jogador(nome2)
              Determinar_vitoria(nome1)
                
             } 
            else{
              quadrado3("O")
              valor = 0
             falar_com_o_jogador(nome1)
              Determinar_vitoria(nome2)
               
             }
          }
          if(el.classList.contains("quadrado4")) { 
              if(valor===0){
              quadrado4("X")
               valor =1
              falar_com_o_jogador(nome2)
              Determinar_vitoria(nome1)
                
             } 
            else{
              quadrado4("O")
              valor = 0
             falar_com_o_jogador(nome1)
              Determinar_vitoria(nome2)
               
             }
          }
           if(el.classList.contains("quadrado5")) { 
             if(valor===0){
               quadrado5("X")
               valor =1
               falar_com_o_jogador(nome2)
              Determinar_vitoria(nome1)
                
             } 
            else{
              quadrado5("O")
              valor = 0
              falar_com_o_jogador(nome1)
              Determinar_vitoria(nome2)
                
             }
           }
            if(el.classList.contains("quadrado6")) {
                if(valor===0){
                  quadrado6("X")
                  valor =1
                  falar_com_o_jogador(nome2)
                 Determinar_vitoria(nome1)
                   
                } 
                else{
                 quadrado6("O")
                 valor = 0
                 falar_com_o_jogador(nome1)
                 Determinar_vitoria(nome2)
                   
             }
             }
             if(el.classList.contains("quadrado7")) { 
                 if(valor===0){
                  quadrado7("X")
                  valor =1
                  falar_com_o_jogador(nome2)
                  Determinar_vitoria(nome1)
                   
                } 
                else{
                 quadrado7("O")
                 valor = 0
                 falar_com_o_jogador(nome1)
                Determinar_vitoria(nome2)
                   
             }  
             }
              if(el.classList.contains("quadrado8")) {
                  if(valor===0){
                  quadrado8("X")
                  valor =1
                  falar_com_o_jogador(nome2)
                  Determinar_vitoria(nome1)
                      
                } 
                else{
                 quadrado8("O")
                 valor = 0
                 falar_com_o_jogador(nome1)
                 Determinar_vitoria(nome2)
                   
             }
               }
               if(el.classList.contains("quadrado9")) {
                 if(valor===0){
                  quadrado9("X")
                  valor =1
                  falar_com_o_jogador(nome2)
                  Determinar_vitoria(nome1)
                 
                } 
                else{
                  quadrado9("O")
                  valor = 0
                  falar_com_o_jogador(nome1)
                  Determinar_vitoria(nome2)
                  

             }
                }
});
    



//determinar vitoria

function Determinar_vitoria(nome)
{  //1 2 3; 1 4 7;2 5 8;3 6 9;4 5 6;7 8 9;
   //1 5 9;3 5 7.
       
    //eixo horizontal de sima
    if(q1.textContent === "X" && q2.textContent ==="X" && q3.textContent === "X") determinar_vencedor(nome, q1,q2,q3); 
    if(q1.textContent === "O" && q2.textContent ==="O" && q3.textContent === "O") determinar_vencedor(nome, q1,q2,q3); 

      //primeira coluna 
    if(q1.textContent === "X" && q4.textContent ==="X" && q7.textContent === "X") determinar_vencedor(nome, q1,q4,q7);  
    if(q1.textContent === "O" && q4.textContent ==="O" && q7.textContent === "O") determinar_vencedor(nome, q1,q4,q7); 

      //segunda coluna 
    if(q2.textContent === "X" && q5.textContent ==="X" && q8.textContent === "X") determinar_vencedor(nome, q2,q5,q8);   
    if(q2.textContent === "O" && q5.textContent ==="O" && q8.textContent === "O") determinar_vencedor(nome, q2,q5,q8);  

      //Terceira coluna
    if(q3.textContent === "X" && q6.textContent ==="X" && q9.textContent === "X") determinar_vencedor(nome, q3,q6,q9);  
    if(q3.textContent === "O" && q6.textContent ==="O" && q9.textContent === "O")  determinar_vencedor(nome, q3,q6,q9);  

       //segunda linha
    if(q4.textContent === "X" && q5.textContent ==="X" && q6.textContent === "X")determinar_vencedor(nome, q4,q5,q6);  
    if(q4.textContent === "O" && q5.textContent ==="O" && q6.textContent === "O")determinar_vencedor(nome, q4,q5,q6);  

      //terceira linha
    if(q7.textContent === "X" && q8.textContent ==="X" && q9.textContent === "X")determinar_vencedor(nome, q7,q8,q9); 
    if(q7.textContent === "O" && q8.textContent ==="O" && q9.textContent === "O")determinar_vencedor(nome, q7,q8,q9); 

       // primeira diagonal
    if(q1.textContent === "X" && q5.textContent ==="X" && q9.textContent === "X")determinar_vencedor(nome,q1,q5,q9);
    if(q1.textContent === "O" && q5.textContent ==="O" && q9.textContent === "O")determinar_vencedor(nome,q1,q5,q9);

         //segunda diagonal
    if(q3.textContent === "X" && q5.textContent ==="X" && q7.textContent === "X")determinar_vencedor(nome,q3,q5,q7);
    if(q3.textContent === "O" && q5.textContent ==="O" && q7.textContent === "O") determinar_vencedor(nome,q3,q5,q7);
    
    
     if(q1.textConten !== "" && q2.textContent !== "" && q3.textContent !== "" && q4.textContent !== "" && q5.textContent !== "" && q6.textContent !== "" && q7.textContent !== "" && q8.textContent !== "" && q9.textContent !== "" && para_determinar_empate === true)
      {
         alert("VOCÊS EMPATARAM!")
         SomdeEspanto();
          document.querySelector(".orientador h3").innerHTML = `VOCÊS SÃO MESMOS GRANDES JOGADORES CONSEGUIRAM EMPATAR!`
            document.querySelector(".orientador h3").style.color = "green"
          clearInterval(timer)
          pausarSom();
          
      }

   
}




function determinar_vencedor( nome , caixa, caixa2, caixa3)
{
    document.querySelector(".orientador h3").innerHTML = `Parabéns ${nome} você é o grande  vencedor!`
    caixa.classList.add("green");
    caixa2.classList.add("green");
    caixa3.classList.add("green");
    document.querySelector("#overlay").style.display = "block";
    clearInterval(timer)
     document.querySelector(".orientador h3").style.color = "blue"
     pausarSom()
     SomDeVitoria();
     para_determinar_empate = false;
     
}

function retirarFundosVerdes()
{
   q1.classList.remove("green");
   q2.classList.remove("green");
   q3.classList.remove("green");
   q4.classList.remove("green");
   q5.classList.remove("green");
   q6.classList.remove("green");
   q7.classList.remove("green");
   q8.classList.remove("green");
   q9.classList.remove("green");
}

function limparQuadros(){
   q1.textContent = ""
   q2.textContent = ""
   q3.textContent = ""
   q4.textContent = ""
   q5.textContent = ""
   q6.textContent = ""
   q7.textContent = ""
   q8.textContent = ""
   q9.textContent = ""
}

//quando clicarmos em reniciar
reniciar.addEventListener("click", (e)=>{
  if(!nome1 && !nome2)
  {
   alert("Não tem como reiniciar um Jogo que nem iniciaste")
   alert("Clique em novo Jogo e se quiseres repitir com o mesmo jogador clique em reniciar")
  }
  else{
  reiniciarSom();
   limparQuadros();
   iniciar_relogio();
   retirarFundosVerdes();
   document.querySelector("#overlay").style.display = "none";
   document.querySelector(".orientador h3").style.color = "black"
   document.querySelector(".orientador h3").innerHTML = `${falar_com_o_jogador()}  é contigo`;
   para_determinar_empate = true;
   valor=0;
   segundos=0;
  }
})


/*A BAIXO TEMOS O MESMO CÓDIGO MELHORADO PELO GPT*/

/*
const form = document.querySelector("#frm");
const relogio = document.querySelector(".relogio");
const orientador = document.querySelector(".orientador h3");
const overlay = document.querySelector("#overlay");
const reniciar = document.querySelector("#reniciar");
const somPrincipal = document.querySelector("#somDoJogo");
const somVitoria = document.querySelector("#somDeVitoria");
const somEmpate = document.querySelector("#SomDeespanto");
const quadrados = Array.from(document.querySelectorAll("td"));

let nome1 = "", nome2 = "";
let jogadorAtual = "X";
let timer, segundos = 0;
let jogoAtivo = false;

const combinacoesVitoria = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

// =====================
// FUNÇÕES AUXILIARES
// =====================
function tocarSom(id) { document.querySelector(id).play(); }
function pausarSom(id) { document.querySelector(id).pause(); }

function atualizarRelogio() {
  segundos++;
  const tempo = new Date(segundos * 1000).toLocaleTimeString("pt-BR", { hour12: false, timeZone: "UTC" });
  relogio.textContent = `Tempo: ${tempo}`;
}

function iniciarRelogio() {
  clearInterval(timer);
  segundos = 0;
  timer = setInterval(atualizarRelogio, 1000);
}

function mudarJogador() {
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
  const nome = jogadorAtual === "X" ? nome1 : nome2;
  orientador.textContent = `${nome}, é a sua vez!`;
}

function verificarVitoria() {
  return combinacoesVitoria.some(([a,b,c]) => {
    const v = quadrados[a].textContent;
    return v && v === quadrados[b].textContent && v === quadrados[c].textContent;
  });
}

function verificarEmpate() {
  return quadrados.every(q => q.textContent !== "");
}

function destacarVitoria([a,b,c]) {
  [a,b,c].forEach(i => quadrados[i].classList.add("green"));
}

function resetarJogo() {
  quadrados.forEach(q => {
    q.textContent = "";
    q.classList.remove("green");
  });
  overlay.style.display = "none";
  orientador.style.color = "black";
  jogoAtivo = true;
  jogadorAtual = "X";
  iniciarRelogio();
  somPrincipal.currentTime = 0;
  somPrincipal.play();
}

// =====================
// INÍCIO DO JOGO
// =====================
form.addEventListener("submit", e => {
  e.preventDefault();
  nome1 = document.querySelector(".jogador1").value.trim();
  nome2 = document.querySelector(".jogador2").value.trim();

  if (!nome1 || !nome2) return alert("Por favor, preencha os nomes!");

  document.querySelector(".tableContainer").style.display = "block";
  form.style.display = "none";
  jogoAtivo = true;
  iniciarRelogio();
  somPrincipal.play();
  orientador.textContent = `${nome1}, comece o jogo!`;
});

// =====================
// CLIQUE NAS CASAS
// =====================
quadrados.forEach((q, i) => {
  q.addEventListener("click", () => {
    if (!jogoAtivo || q.textContent) return;
    q.textContent = jogadorAtual;

    if (verificarVitoria()) {
      orientador.textContent = `🎉 Parabéns ${jogadorAtual === "X" ? nome1 : nome2}, você venceu!`;
      orientador.style.color = "blue";
      clearInterval(timer);
      pausarSom("#somDoJogo");
      tocarSom("#somDeVitoria");
      overlay.style.display = "block";
      jogoAtivo = false;
      return;
    }

    if (verificarEmpate()) {
      orientador.textContent = "😮 Empate! Grandes jogadores!";
      orientador.style.color = "green";
      tocarSom("#SomDeespanto");
      clearInterval(timer);
      pausarSom("#somDoJogo");
      jogoAtivo = false;
      return;
    }

    mudarJogador();
  });
});

// =====================
// REINICIAR
// =====================
reniciar.addEventListener("click", () => {
  if (!nome1 || !nome2) return alert("Inicie um jogo primeiro!");
  resetarJogo();
});


*/












