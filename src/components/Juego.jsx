import React from 'react';
import "../style/style.less";

export default function Juego() {

    // let Contador;
    // let change;
    // let changeImg;
    // const Start = () =>{
    //     if(change == undefined){
    //         change = 1;
    //     }

    //     if(change == 1){
    //         Contador = 1;
    //         alert('funciona')
    //      setTimeout(Img1())
    //     }
    // };

    // const SumarContador = () =>{
    //     if(Contador == 1){
    //         changeImg = 1;
    //         if(Contador == 1){
    //             Contador = Contador + 1;
    //         }
    //          if(changeImg == 1){
    //             document.getElementById('Piedra1').style.display = 'none';
    //             document.getElementById('Papel2').style.display = 'none';
    //          };
    //          document.getElementById('Tijeras1').style.display = 'flex';
    //          document.getElementById('Piedra2').style.display = 'flex';
    //         setTimeout(Img2());
    //     }else if(Contador == 2){
    //         changeImg = 2;
    //         if(Contador == 2){
    //             Contador = Contador + 1;
    //         };
            
    //         if(changeImg == 2){
    //          document.getElementById('Tijeras1').style.display = 'none';
    //          document.getElementById('Piedra2').style.display = 'none';
    //         };
    //         document.getElementById('Papel1').style.display = 'flex';
    //         document.getElementById('Tijeras2').style.display = 'flex';
    //         setTimeout(Img3())
    //     }else if(Contador == 3){
    //         changeImg = 3;
    //         if(Contador == 3){
    //             Contador = Contador + 1;
    //         }
    //         if(changeImg == 3){
    //             document.getElementById('Papel1').style.display = 'none';
    //             document.getElementById('Tijeras2').style.display = 'none';
    //         };
    //         document.getElementById('Piedra1').style.display = 'flex';
    //         document.getElementById('Papel2').style.display = 'flex';
    //         setTimeout(Img1());
    //     }else{
    //         console.log('funcina')
    //     }
    // };

    // const Img1 = () => {
    //     if(Contador == 10){
    //         setTimeout(Fend(),1000);
    //     }else{
    //         setTimeout(SumarContador(),2000)
    //     };
       
    // };
    // const Img2 = () => {
    //     if(Contador == 10){
    //         setTimeout(Fend(),1000);
    //     }else{
    //         setTimeout(SumarContador(),2000)
    //     };
        
    // };
    // const Img3 = () =>{  
    //     if(Contador == 10){
    //         setTimeout(Fend(),1000);
    //     }else{
    //         setTimeout(SumarContador(),2000)
    //     };
    // };

    let Result;
    const Start = () =>{
        document.getElementById('StartGame').style.display = 'none';
        let Contador;
        let Tm = document.getElementById('Tijeras2');
        let Th = document.getElementById('Tijeras1');
        let Pm = document.getElementById('Piedra2');
        let Ph = document.getElementById('Piedra1');
        let Plm = document.getElementById('Papel2');
        let Plh = document.getElementById('Papel1');


        var T = setInterval(()=>{
            if(Contador == undefined){
                Contador = 1;
                Ph.style.display = 'none';
                Plm.style.display = 'none';
                Tm.style.display = 'flex';
                Ph.style.display = 'flex';
            }else if(Contador == 1){
                Contador = Contador + 1;
                Tm.style.display = 'none';
                Ph.style.display = 'none';
                Plh.style.display = 'flex';
                Plm.style.display = 'flex';
            }else if(Contador == 2){
                Contador = Contador + 1;
                Plh.style.display = 'none';
                Plm.style.display = 'none';
                Th.style.display = 'flex';
                Pm.style.display = 'flex';
            }else if(Contador == 3){
                Contador = Contador + 1;
                Th.style.display = 'none';
                Pm.style.display = 'none';
                Ph.style.display = 'flex';
                Plm.style.display = 'flex';
            }else if(Contador == 4){
                Contador = Contador + 1;
                Ph.style.display = 'none';
                Plm.style.display = 'none';
                Plh.style.display = 'flex';
                Pm.style.display = 'flex';
            }else if(Contador == 5){
                Contador = Contador + 1;
                Plh.style.display = 'none';
                Pm.style.display = 'none';
                Plm.style.display = 'flex';
                Th.style.display = 'flex';
            }else if(Contador == 6){
                Contador = Contador + 1;
                Plm.style.display = 'none';
                Th.style.display = 'none';
                Ph.style.display = 'flex';
                Tm.style.display = 'flex';

            }else if(Contador == 7){
                Contador = Contador + 1;
                Ph.style.display = 'none';
                Tm.style.display = 'none';
                Plh.style.display = 'flex';
                Pm.style.display = 'flex';

            }else if(Contador == 8){
                Contador = Contador + 1;
                Plh.style.display = 'none';
                Pm.style.display = 'none';
                Ph.style.display = 'flex';
                Plm.style.display = 'flex';

            }else if(Contador == 9){
                Contador = Contador + 1;
                Ph.style.display = 'none';
                Plm.style.display = 'none';
                Pm.style.display = 'flex';
                Th.style.display = 'flex';

            }else if(Contador == 10){
                Contador = Contador + 1;
                setTimeout(Fend(), interval);
                
            }

        },1000)
    };

    const Fend = () =>{
        let player = Math.floor(Math.random() * 3);
        let machine = Math.floor(Math.random() * 3);

        if(player == 0 && machine == 0){
            document.getElementById('Piedra2').style.display = 'none';
            document.getElementById('Tijeras1').style.display = 'none';
            document.getElementById('Tijeras1').style.display = 'flex';
            document.getElementById('Tijeras2').style.display = 'flex';
            document.getElementById('StartGame').style.display = 'flex';

            document.getElementById('Indialog').innerHTML = `<h1>Draw</h1>`;
            document.getElementById('Dialog').style.display = 'flex';
        }else if(player == 1 && machine == 1 ){
            document.getElementById('Piedra2').style.display = 'none';
            document.getElementById('Tijeras1').style.display = 'none';
            document.getElementById('Piedra1').style.display = 'flex';
            document.getElementById('Piedra2').style.display = 'flex';
            document.getElementById('StartGame').style.display = 'flex';

            document.getElementById('Indialog').innerHTML = `<h1>Draw</h1>`;
            document.getElementById('Dialog').style.display = 'flex';
        }else if(player == 2 && machine == 2 ){
            document.getElementById('Piedra2').style.display = 'none';
            document.getElementById('Tijeras1').style.display = 'none';
            document.getElementById('Papel1').style.display = 'flex';
            document.getElementById('Papel2').style.display = 'flex';
            document.getElementById('StartGame').style.display = 'flex';

            document.getElementById('Indialog').innerHTML = `<h1>Draw</h1>`;
            document.getElementById('Dialog').style.display = 'flex';
        }else if(player == 0 && machine == 1){//cuando es tijeras(humano) vs piedra(maquina).
            document.getElementById('Piedra2').style.display = 'none';
            document.getElementById('Tijeras1').style.display = 'none';
            document.getElementById('Tijeras1').style.display = 'flex';
            document.getElementById('Piedra2').style.display = 'flex';
            document.getElementById('StartGame').style.display = 'flex';

            document.getElementById('Indialog').innerHTML = `<h1>You lost</h1>`;
            document.getElementById('Dialog').style.display = 'flex';
        }else if(player == 0 && machine == 2){// cuando es tijeras(humano) vs papel(maquina).
            document.getElementById('Piedra2').style.display = 'none';
            document.getElementById('Tijeras1').style.display = 'none';
            document.getElementById('Tijeras1').style.display = 'flex';
            document.getElementById('Papel2').style.display = 'flex';
            document.getElementById('StartGame').style.display = 'flex';


            document.getElementById('Indialog').innerHTML = `<h1>You won</h1>`;
            document.getElementById('Dialog').style.display = 'flex';
        }else if(player == 1 && machine == 0){// cuando es tijeras(maquina) vs piedra(humano).
            document.getElementById('Piedra2').style.display = 'none';
            document.getElementById('Tijeras1').style.display = 'none';
            document.getElementById('Tijeras2').style.display = 'flex';
            document.getElementById('Piedra1').style.display = 'flex';
            document.getElementById('StartGame').style.display = 'flex';

            document.getElementById('Dialog').innerHTML = `<h1>You won</h1>`;
            document.getElementById('Dialog').style.display = 'flex';
        }else if(player == 2 && machine == 0){// cuando es papel(humano) vs tijeras(maquina).
            document.getElementById('Piedra2').style.display = 'none';
            document.getElementById('Tijeras1').style.display = 'none';
            document.getElementById('Papel1').style.display = 'flex';
            document.getElementById('Tijeras2').style.display = 'flex';
            document.getElementById('StartGame').style.display = 'flex';

            document.getElementById('Indialog').innerHTML = `<h1>You lost</h1>`;
            document.getElementById('Dialog').style.display = 'flex';
        }else if(player == 2 && machine == 1){// cuando es papel(humano) vs Pierdra(maquina).
            document.getElementById('Piedra2').style.display = 'none';
            document.getElementById('Tijeras1').style.display = 'none';
            document.getElementById('Papel1').style.display = 'flex';
            document.getElementById('Piedra2').style.display = 'flex';
            document.getElementById('StartGame').style.display = 'flex';

            document.getElementById('Indialog').innerHTML = `<h1>You won</h1>`;
            document.getElementById('Dialog').style.display = 'flex';
        }else if(player == 1 && machine == 2){//cuando es papel(maquina) vs Piedra(humano).
            document.getElementById('Piedra2').style.display = 'none';
            document.getElementById('Tijeras1').style.display = 'none';
            document.getElementById('Papel2').style.display = 'flex';
            document.getElementById('Piedra1').style.display = 'flex';
            document.getElementById('StartGame').style.display = 'flex';

            document.getElementById('Indialog').innerHTML = `<h1>You lost</h1>`;
            document.getElementById('Dialog').style.display = 'flex';
        };
    };

const Start2 = () =>{
    document.getElementById('Dialog').style.display = 'none';
    setTimeout(Start(), 2000);
};


  return (
    <section className='BodyGame'>
        <div className='BG__player'>
            <img id = 'Tijeras1' style={{display:"none"}} src="https://static.vecteezy.com/system/resources/thumbnails/036/397/001/small/multipurpose-scissors-with-orange-handle-isolated-with-clipping-path-in-file-format-png.png" alt="tijeras" />
            <img id = 'Piedra1'  src="https://static.vecteezy.com/system/resources/previews/012/896/734/non_2x/stone-transparent-background-free-png.png" alt= "piedra" />
            <img id='Papel1' style={{display:"none"}} src="https://png.pngtree.com/png-vector/20240601/ourmid/pngtree-crumpled-white-paper-texture-pattern-png-image_12596900.png" alt="" />
            <h2>You</h2>
        </div>
        <dialog id='Dialog' style={{display: 'none'}}>
            <div id='Indialog'></div>
           <button onClick={Start2} id='StartGame2' >replay</button>
        </dialog>
        <button onClick={Start} id='StartGame' className='StartGame'>Start Game</button>
        <div className='BG__Machine'>
            <img id='Tijeras2' style={{display:"none"}} src="src/img/multipurpose-scissors-with-orange-handle-isolated-with-clipping-path-in-file-format-png.webp" alt="" />
            <img id = 'Piedra2' style={{display:"none"}} src="https://static.vecteezy.com/system/resources/previews/012/896/734/non_2x/stone-transparent-background-free-png.png" alt="" />
            <img id='Papel2' src="https://png.pngtree.com/png-vector/20240601/ourmid/pngtree-crumpled-white-paper-texture-pattern-png-image_12596900.png" alt="" />
            <h2>Machine</h2>
        </div>
    </section>
  );
};
