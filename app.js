/* function areaOculta(){
    document.getElementById("mostrar__texto-encriptado").value;
    const monstrarTextoEncriptado = document.getElementById("textoInput")
} */

    function encriptar() {
        const input = document.getElementById("textoInput").value;
        const mostrarTextoEncriptado = document.getElementById("mostrar__texto-encriptado");
        const textoEncriptadoElement = document.getElementById("textoEncriptado");
    
        const textoEncriptado = encriptarTexto(input);
    
        mostrarTextoEncriptado.style.display = 'block';
        mostrarTextoEncriptado.innerText = textoEncriptado;
        mostrarTextoEncriptado.innerHTML += '<button onclick="copiarTexto()">Copiar</button>';
    }
    
    function desencriptar() {
        const input = document.getElementById("textoInput").value;
        const mostrarTextoEncriptado = document.getElementById("mostrar__texto-encriptado");
        const textoEncriptadoElement = document.getElementById("textoEncriptado");
    
        const textoDesencriptado = desencriptarTexto(input);
    
        mostrarTextoEncriptado.style.display = 'block';
        mostrarTextoEncriptado.innerText = textoDesencriptado;
        mostrarTextoEncriptado.innerHTML += '<button onclick="copiarTexto()">Copiar</button>';
    }
    
    function copiarTexto() {
        let text = document.querySelector('#textoInput').value;

        return text
    }
    
    async function copy() {
        let txt = copiarTexto();
        await navigator.clipboard.writeText(txt)
    }
    
    let btn = document.querySelector('#copiar');

    btn.addEventListener('click', copy);
    
    
    function encriptarTexto(texto) {
        const llaves = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        return texto.replace(/[eioua]/g, match => llaves[match]);
    }
    
    function desencriptarTexto(texto) {
        const llaves = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        return texto.replace(/enter|imes|ai|ober|ufat/g, match => llaves[match]);
    }
    
    function copiarTexto() {
        const textoEncriptadoElement = document.getElementById("textoEncriptado");
        navigator.clipboard.writeText(textoEncriptadoElement.innerText).then(() => {
            alert('Texto copiado al portapapeles');
        });
    }
    