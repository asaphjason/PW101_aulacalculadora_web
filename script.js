function somar (){

 const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    const numA = parseFloat(numero1);
    const numB = parseFloat(numero2);

    const total = numA + numB;

    document.getElementById("resultado").innerText = `total: ${total}`;
    console.log(`Cálculo efetuado: ${numero1}+ ${numero2} = ${total}`);
}

function subtrair (){

     const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

      const numA = parseFloat(numero1);
    const numB = parseFloat(numero2);

    const total = numA - numB;

     document.getElementById("resultado").innerText = `total: ${total}`;
    console.log(`Cálculo efetuado: ${numero1}- ${numero2} = ${total}`);
}

function multiplicar(){

    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

      const numA = parseFloat(numero1);
    const numB = parseFloat(numero2);

    const total = numA * numB;

     document.getElementById("resultado").innerText = `${total}`;
    console.log(`Cálculo efetuado: ${numero1}* ${numero2} = ${total}`);
}

function dividir (){

    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

      const numA = parseFloat(numero1);
    const numB = parseFloat(numero2);

    const total = numA / numB;

     document.getElementById("resultado").innerText = `${total}`;
    console.log(`Cálculo efetuado: ${numero1}/ ${numero2} = ${total}`);
}

function limpar(){
    const numero1 = document.getElementById("numero1").value="";
    const numero2 = document.getElementById("numero2").value="";

     document.getElementById("resultado").innerText ="0";
    console.log("Campos da calculadora reiniciados.");
}