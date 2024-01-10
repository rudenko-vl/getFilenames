
const btn = document.getElementById('btn');
const delBtn = document.getElementById('delete');
const cont = document.getElementById('cont');

btn.addEventListener('click', getFileNames)

let arr = []

function getFileNames() {
    const fileInput = document.getElementById('fileInput');
    const selectedFiles = fileInput.files;

    if (selectedFiles.length > 0) {
        for (let i = 0; i < selectedFiles.length; i++) {
            // arr.push(selectedFiles[i].name.slice(0, -5))
            arr.push(selectedFiles[i].name.replace(/\..*$/, ''))
        }
    } else {
        console.log('Файлы не выбраны.');
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