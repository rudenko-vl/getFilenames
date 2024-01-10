
const btn = document.getElementById('btn');
const delBtn = document.getElementById('delete');
const cont = document.getElementById('cont');

btn.addEventListener('click', getFileNames)

let arr = []


function getFileNames() {
    const fileInput = document.getElementById('fileInput');
    const selectedFiles = fileInput.files;

    if (selectedFiles.length > 0) {
        btn.disabled = true;
        btn.classList.add('disabled')
        for (let i = 0; i < selectedFiles.length; i++) {
            arr.push(selectedFiles[i].name.replace(/\..*$/, ''))
        }
    } else {
        alert('Файлы не выбраны.');
    }

    arr.map((str) => {
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = str;
        cont.appendChild(paragraphElement);
    })
}


delBtn.addEventListener('click', () => {
    location.reload()
})