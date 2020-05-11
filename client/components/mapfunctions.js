import mapData from '../../server/public/assets/maps/map.json'
var names = ['Ulfrick', 'Gauward', 'Roland', 'Nieles', 'Harlaw', 'Albrecht', 'Giliam', 'Aethelwulf', 'Brand', 'Bjorn', 'Helmaer', 'Aenfin', 'Lambert', 'Ardulf', 'Lany', 'Elwic', 'Ebehrt', 'Edric', 'Piersym', 'Georguy', 'Peregrine', 'Grewill']
var team1Name = 'The Green Meanies'
var team2Name = 'The Big Whack'
var team1Units = ['scout', 'heavy', 'scout', 'swordsman', 'spearman']
var team2Units = ['scout', 'scout', 'swordsman', 'spearman', 'heavy']
const actors = [{ name: team1Name, units: [] }, { name: team2Name, units: [] }]
export const classes = {
  scout: {
    // range: checkMelee(),
    damage: 1,
    class: 'scout',
    name: 'Scout',
    sprite: 'scout',
    actions: 6,
    health: 2
  },
  archer: {
    damage: 1,
    class: 'archer',
    name: 'Archer',
    sprite: 'archer',
    actions: 6,
    health: 1,
    ammo: 5
  },
  spearman: {
    damage: 1,
    class: 'spearman',
    name: 'Lancer',
    sprite: 'spear',
    actions: 4,
    health: 3
  },
  heavy: {
    damage: 3,
    class: 'heavy',
    name: 'Sentinel',
    sprite: 'heavy',
    actions: 3,
    health: 5
  },
  swordsman: {
    damage: 2,
    class: 'swordsman',
    name: 'Swordsman',
    sprite: '2hand',
    actions: 4,
    health: 3
  }
}
var teamSize = 5

export function createMapArray () {
  var mapArr = mapData.layers[0].data.map(tile => {
    if (tile === 10) {
      return {
        occupied: true,
        occupant: 'obstacle'
      }
    } else {
      return {
        occupied: false,
        occupant: null,
        occupantTeam: null
      }
    }
  })
  return mapArr
}

export function addActorsToMapArr (actors, mapArr) {
  let map = mapArr
  actors.forEach(team => {
    team.units.forEach(unit => {
      map[unit.idx].occupied = true
      map[unit.idx].occupant = unit.name
      map[unit.idx].occupantTeam = unit.teamName
    })
  })
  return map
}

export function createActors (a) {
  var actorArr = actors
  let idx = 140
  let team1 = actorArr[0].name
  let team2 = actorArr[1].name
  let unit = []
  let current
  let ranName
  for (let i = 0; i < teamSize; i++) {
    current = team1Units[i]
    unit = JSON.parse(JSON.stringify(classes[current]))
    ranName = names[Math.floor(Math.random() * names.length)]
    names = names.filter(name => name !== ranName)
    unit.teamName = team1
    unit.sprite = 'r' + unit.sprite
    unit.name = `${ranName} the ${unit.name}`
    unit.idx = (idx +1) + (i * 20)
    unit.dead = false
    unit.kills = []
    actorArr[0].units.push(unit)

    current = team2Units[i]
    unit = JSON.parse(JSON.stringify(classes[current]))
    ranName = names[Math.floor(Math.random() * names.length)]
    names = names.filter(name => name !== ranName)
    unit.teamName = team2
    unit.name = `${ranName} the ${unit.name}`
    unit.sprite = 'l' + unit.sprite
    unit.idx = (idx + 1) + (i * 20) + 17
    unit.dead = false
    unit.kills = []
    actorArr[1].units.push(unit)
  }
  return actorArr
}
