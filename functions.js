const CalcAverage = (a,b,c) =>(a+b+c)/3;

// Test 1
const ScoreDolpin = CalcAverage(44,23,71);
const ScoreScolos = CalcAverage(65,54,49);
console.log(ScoreDolpin,ScoreScolos)

const CheckWinner = function (AvergeDolpin,AvergeScolos){
    if (AvergeDolpin >= 2*AvergeScolos){
        console.log(`Dolpin win the Match ${AvergeDolpin} vs ${AvergeScolos}`)
    } else if (AvergeScolos >= 2*AvergeDolpin){
        console.log(`Scolos win the match ${AvergeScolos} vs ${AvergeDolpin}`)
    }else {
        console.log(`No Team win the match sorry...(-|-)`)
    }
}
const Whowin = CheckWinner(100,500);
