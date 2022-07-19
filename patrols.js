import scouts from './patrols.json' assert {type: 'json'};




let input = ''

scouts.patrols.map(function(patrol){
    input+= `
    <div class="patrol">
        <h1 style="background-color:${patrol.color}">${patrol.title}</h1>
        <div class="patrol_wrapper">
            <div class="patrol_leader_cont">
                <h2>Patrol Leader</h2>
                <img src="${patrol.patrolLeader.photo}" height="200px" alt="patrol leader">
                <h3>${patrol.patrolLeader.name}</h3>
            </div>
            <div class="patrol_names_cont">
                <img src="${patrol.logo}" alt="${patrol.title}">
                <ul>
                    ${patrol.patrol.map(y => `<li>${`${y.slice(y.indexOf(" "), y.length)} ${y.slice(0, y.indexOf(" "))}`}</li>`).join('')}
                </ul>
            </div>
        </div>
    </div>
    `;

    return input;
})

document.getElementById("patrols").innerHTML = input;