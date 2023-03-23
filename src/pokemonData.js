const pokemonData = [
    {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
    {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
    {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
    {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
    {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
    {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
    {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
    {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
  ];


/**
 * takes an array of 8 pokemon and creates two random arrays of four
 * arr => {arr1, arr2}
 */
function getTwoDecks(listOfItems) {
    let randomIdx = (arr) => Math.floor(Math.random() * arr.length);
    const out1 = [];
    const copyOfList = [];
    
    for (let i of listOfItems) {
        copyOfList.push(i);
    }

    while (out1.length < 4) {
        let idx = randomIdx(copyOfList);
        out1.push(copyOfList[idx]);
        copyOfList.splice(idx,1);
    }

    return [out1, copyOfList];
}

export {pokemonData, getTwoDecks};