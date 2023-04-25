const form = document.querySelector('#form');
const send = document.querySelector('#send');
const block = document.querySelector('.messages')
const url = document.querySelector('#url');

function replace_to_emoji(text){
    let to_send = text.replaceAll(':smile:', "&#128514;");
    to_send = to_send.replaceAll(':smilem:', "&#128514;");
    to_send = to_send.replaceAll(':grinning:', "&#128512;");
    to_send = to_send.replaceAll(':laugh:', "&#129315;");
    to_send = to_send.replaceAll(':like:', "&#128077;");
    to_send = to_send.replaceAll(':cool:', "&#128526;");
    return to_send;
}
send.onclick = (e) => {
    if (form.value === '') {
        alert('Введите сообщение!')
    }
    else {
        let text = form.value;
        let to_send = replace_to_emoji(text)
        let image_url = url.value;
        let date = new Date(Date.now());
        let date_in_string = date.toUTCString();
        htmlCode = `<p style='text-align: right;'>${date_in_string} - <span class='message'>${to_send}</span></p>`;
        if(url.value === ''){  
            block.insertAdjacentHTML('beforeend', htmlCode);
        }
        else{
            block.insertAdjacentHTML('beforeend', htmlCode);
            image = `<img src="${image_url}" alt="Картинка" class='image'>`
            block.insertAdjacentHTML('beforeend', image);
        }
    }
}

document.querySelector('#smilem').onclick = (e) => {
    form.value = `${form.value} :smilem:`
}
document.querySelector('#grinning').onclick = (e) => {
    form.value = `${form.value} :grinning:`
}
document.querySelector('#laugh').onclick = (e) => {
    form.value = `${form.value} :laugh:`
}
document.querySelector('#like').onclick = (e) => {
    form.value = `${form.value} :like:`
}
document.querySelector('#cool').onclick = (e) => {
    form.value = `${form.value} :cool:`
}