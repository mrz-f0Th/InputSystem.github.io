const btn = document.querySelector('.button');

btn.addEventListener("click", () => {
    let outputs = document.querySelectorAll('.output');
    let inputs = document.querySelectorAll('.input');

    // Menambahkan input ke output & menghapus input 
    inputs.forEach((input, i)=> {
        arr = ['Nama', 'Kelas'];
        outputs[i].innerHTML = `${arr[i]} Yang di Inputkan : ${input.value}`;
        input.value = "";
    });
});
