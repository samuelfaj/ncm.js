const fs = require('fs');
const XLSX = require('xlsx');

const wb = XLSX.readFile('tabela_atualizada.xlsx');

const wsname = wb.SheetNames[0];
const ws = wb.Sheets[wsname];

const data = XLSX.utils.sheet_to_json(ws); 

module.exports = (ncm) => {
    for(const item of data){
        if(item.NCM == ncm){
            if(!item['Fim de vigência da NCM no Siscomex']){
                return true;
            }
        }
    }

    return false;
}