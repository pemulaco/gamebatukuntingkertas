function playerChoice(kamu) {
    const choices = ['batu', 'gunting', 'kertas'];
    const computer = choices[Math.floor(Math.random() * choices.length)];

    const result = compareChoices(kamu, computer);

    document.getElementById('result').innerHTML = `kamu memilih ${kamu}. Komputer memilih ${computer}. ${result}`;
}

function compareChoices(kamu, computer) {
    if (kamu === computer) {
        return 'Hasilnya seri!';
    } else if (
        (kamu === 'batu' && computer === 'gunting') ||
        (kamu === 'gunting' && computer === 'kertas') ||
        (kamu === 'kertas' && computer === 'batu')
    ) {
        return 'kamu menang!';
    } else {
        return 'Komputer menang!';
    }
}