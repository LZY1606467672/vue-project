'use strict'
import Mock from 'mockjs'
const Random = Mock.Random;

const testData = function(req){
    let data = [];
    for (let i=0; i<20; i++){
        let tdata = {
            date: Random.date('yyyy-MM-dd'),
            name: Random.cname(),
            address: Random.county(true),
        }
        data.push(tdata);
    }
    return data;
}

export default testData;