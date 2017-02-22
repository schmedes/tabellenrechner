function sortTable(first, next) {
    if(next.points - first.points !== 0) {
       return next.points - first.points;
    }
    return next.difference - first.difference;
}
export function buildSortedTable(table) {
    const sortable = [];
    for(let team in table) {
        if ({}.hasOwnProperty.call(table, team)) {
        sortable.push(table[team]);
    }
        
    }
    return sortable.sort(sortTable);
}