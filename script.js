const classNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
for (let i = 0; i < 8; i++) {
    let firstChild = document.createElement('div');
    firstChild.classList.add(classNames[i], 'firstChild');
    document.querySelector('.container').appendChild(firstChild);
    for (let j = 0; j < 8; j++) {
        let secondChild = document.createElement('div');
        secondChild.classList.add('secondChild');
        document.querySelector(`.${classNames[i]}`).appendChild(secondChild);
    }
}