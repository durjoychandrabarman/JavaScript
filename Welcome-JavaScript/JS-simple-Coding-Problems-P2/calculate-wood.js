function woodCalculate(Chair , table , bed){
    const perChair = 4;
    const perTable = 6;
    const perBed = 10;

    const chairTotalWood = Chair * perChair;
    const tableTotalWood = table *perTable;
    const BedTotalWood = bed * perBed;

    const totalWood = chairTotalWood + tableTotalWood + BedTotalWood;
    return totalWood;
} 

const total =woodCalculate(0, 0, 2);
console.log(total) 