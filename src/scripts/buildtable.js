export function buildTable(log) {
    return log.reduce((prev, next) => {
      const table =  next.matches.reduce((pv, nt)=> {
          if (nt.score1 != null) {
              if (nt.score1 > nt.score2) {
                  pv[nt.team1.key].wins += 1;
                  pv[nt.team1.key].points += 3;
                  pv[nt.team2.key].losses += 1;
              }
              if (nt.score1 < nt.score2) {
                  pv[nt.team2.key].wins += 1;
                  pv[nt.team2.key].points += 3;
                  pv[nt.team1.key].losses += 1;
              }
              if (nt.score1 === nt.score2) {
                  pv[nt.team1.key].draws += 1;
                  pv[nt.team2.key].draws += 1;
                  pv[nt.team1.key].points += 1;
                  pv[nt.team2.key].points += 1;
              }
              pv[nt.team1.key].scored += nt.score1;
              pv[nt.team1.key].conceded += nt.score2;
              pv[nt.team2.key].scored += nt.score2;
              pv[nt.team2.key].conceded += nt.score1;
              pv[nt.team2.key].difference = pv[nt.team2.key].scored - pv[nt.team2.key].conceded;
              pv[nt.team1.key].difference = pv[nt.team1.key].scored - pv[nt.team1.key].conceded;
          }
          return pv;
        }, prev)
        return table;
    }, {
        "bayern": {
            name: "FC Bayern München",
            key:"bayern",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "bremen": {
            name: "Werder Bremen",
            key: "bremen",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "frankfurt": {
            name: "Eintracht Frankfurt",
            key: "frankfurt",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "schalke": {
            name: "Schalke 04",
            key: "schalke",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "augsburg": {
            name: "FC Augsburg",
            key: "augsburg",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "wolfsburg": {
            name: "VfL Wolfsburg",
            key: "wolfsburg",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "hsv": {
            name: "Hamburger SV",
            key: "hsv",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "ingolstadt": {
            name: "FC Ingolstadt 04",
            key: "ingolstadt",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "koeln": {
            name: "1. FC Köln",
            key: "koeln",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "darmstadt": {
            name: "SV Darmstadt 98",
            key: "darmstadt",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "dortmund": {
            name: "Borussia Dortmund",
            key: "dortmund",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "mainz": {
            name: "1. FSV Mainz 05",
            key: "mainz",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "mgladbach": {
            name: "Borussia M'gladbach",
            key: "mgladbach",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "leverkusen": {
            name: "Bayer 04 Leverkusen",
            key: "leverkusen",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "herthabsc": {
            name: "Hertha BSC",
            key: "herthabsc",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "freiburg": {
            name: "SC Freiburg",
            key: "freiburg",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "hoffenheim": {
            name: "1899 Hoffenheim",
            key: "hoffenheim",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        },
        "leipzig": {
            name: "RB Leipzig",
            key: "leipzig",
            wins: 0,
            losses: 0,
            draws: 0,
            scored: 0,
            conceded: 0,
            difference: 0,
            points: 0
        }
    })
}
