import Router from 'next/router'

export function redirectToURL(URL) {
    Router.push(URL)
}

export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export function addPlayersToTheParticipantList(arr, player) {
    const found = arr.some(el => el.id === player.id);
    if (!found) {
        arr.push(player)
    } else {
        const objIndex = arr.findIndex((obj => obj.id == player.id));
        arr[objIndex].score += player.score
    }
    return arr;
}

export function maskAnID(id) {
    try {
        const res = id.split('-');
        return 'T-T-T@' + res[res.length - 1];
    } catch (e) {
        console.log(e)
        return 'N/A';
    }
}
