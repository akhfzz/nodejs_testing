let menghitungRerata = (values) => {
    const exam = values.every(ex => typeof ex === 'number');
    if(!exam) throw Error("Nilai harus angka");
    let sumValue = values.reduce((prev, cur) => prev+cur, 0);
    return sumValue / values.length;
}

let kelulusan = (avg, stud) => {
    const minValue = 75;
    const rerata = menghitungRerata(avg);
    if(rerata > minValue){
        console.log(`${stud} lulus dengan rata rata ${rerata}`);
        return true;
    }else{
        console.log(`${stud} belum lulus dengan rata rata ${rerata}`);
        return false
    }
} 

module.exports = {menghitungRerata, kelulusan}