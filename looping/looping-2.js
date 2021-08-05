/*
 Loop through all the properties of the suspect objects in the suspects array 
 mark them if you think they are guilty
 */

let game = {
    suspects: [
        {
            name: 'Rusty',
            color: 'orange'
        }, {
            name: 'Ms. Scarlet',
            color: 'red'
        }
    ]
};

let { guiltyName, guiltyColor } = { guiltyName: 'Rusty', guiltyColor: 'orange' };

game.suspects.forEach(suspect => {
    suspect.isGuilty = suspect.name === guiltyName && suspect.color === guiltyColor;
    for (let key in suspect) {
        console.log(suspect[key])
    }
});