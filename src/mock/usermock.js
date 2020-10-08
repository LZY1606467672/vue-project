const userData = function(req){
  let data = [];
  for (let i=0; i<20; i++){
    let lidata = 9 * i ;
    data.push(lidata);
  }
  return data
}


export default userData;
