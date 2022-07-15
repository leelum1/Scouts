import scouts from './patrols.json' assert {type: 'json'};

console.log(scouts);


let input = ''

scouts.patrols.map(function(patrol){
    input+= `
    <div class="patrol">
        <h1>${patrol.title}</h1>
        <div class="patrol_leader_cont">
            <h2>Patrol Leader</h2>
            <img src="${patrol.patrolLeader.photo}" height="200px" alt="patrol leader">
            <h3>${patrol.patrolLeader.name}</h3>
        </div>
        <div class="patrol_names_cont">
            <h3>Patrol</h3>
            <ul>
                ${patrol.patrol.map(y => `<li>${y}</li>`).join('')}
            </ul>
        </div>
    </div>
    `;

    return input;
})

document.getElementById("patrols").innerHTML = input;