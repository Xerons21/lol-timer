'use strict'

function timer_init() {
    for (let i = 0; i < 5; i++) {
        document.getElementById('champion-btn-' + summoner_array[i].index).onclick = () => {
            start_ult_timer(i)
        }
        document.getElementById('spellD-btn-' + summoner_array[i].index).onclick = () => {
            start_spellD_timer(i)
        }
        document.getElementById('spellF-btn-' + summoner_array[i].index).onclick = () => {
            start_spellF_timer(i)
        }
    }

    setInterval(() => {
        tick_update()
    }, 1000)
}

function start_ult_timer(index) {
    summoner_array[index].ult = champion_obj[summoner_array[index].champion_id].ult_cool[summoner_array[index].level]
    summoner_array[index].ult_time = parseInt(summoner_array[index].ult * (1 - summoner_array[index].final_ult_cool * 0.01) * (1 - summoner_array[index].rune_ult_cool * 0.01))
    document.getElementById('champion-img-' + summoner_array[index].index).classList.add('ult-disabled')
    document.getElementById('ult-timer-' + summoner_array[index].index).innerText = summoner_array[index].ult_time
}

function start_spellD_timer(index) {
    summoner_array[index].spellD_time = parseInt(summoner_array[index].spellD * (1 - summoner_array[index].final_spell_cool * 0.01))
    document.getElementById('spellD-img-' + summoner_array[index].index).classList.add('spell-disabled')
    document.getElementById('spellD-timer-' + summoner_array[index].index).innerText = summoner_array[index].spellD_time
}

function start_spellF_timer(index) {
    summoner_array[index].spellF_time = parseInt(summoner_array[index].spellF * (1 - summoner_array[index].final_spell_cool * 0.01))
    document.getElementById('spellF-img-' + summoner_array[index].index).classList.add('spell-disabled')
    document.getElementById('spellF-timer-' + summoner_array[index].index).innerText = summoner_array[index].spellF_time
}

function tick_update() {
    for (let index = 0; index < 5; index++) {
        if (summoner_array[index].ult_time > 0) {
            summoner_array[index].ult_time -= 1
            document.getElementById('ult-timer-' + summoner_array[index].index).innerText = summoner_array[index].ult_time
        } else {
            document.getElementById('champion-img-' + summoner_array[index].index).classList.remove('ult-disabled')
            document.getElementById('ult-timer-' + summoner_array[index].index).innerText = ""
        }
        if (summoner_array[index].spellD_time > 0) {
            summoner_array[index].spellD_time -= 1
            document.getElementById('spellD-timer-' + summoner_array[index].index).innerText = summoner_array[index].spellD_time
        } else {
            document.getElementById('spellD-img-' + summoner_array[index].index).classList.remove('spell-disabled')
        }
        if (summoner_array[index].spellF_time > 0) {
            summoner_array[index].spellF_time -= 1
            document.getElementById('spellF-timer-' + summoner_array[index].index).innerText = summoner_array[index].spellF_time
        } else {
            document.getElementById('spellF-img-' + summoner_array[index].index).classList.remove('spell-disabled')
        }
    }
}

timer_init()