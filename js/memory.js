function Memory(){
this.maxScore =0;
};



Memory.prototype.check = function (check1,check2) {
  if(check1===check2){
    this.maxScore++;
    return true;
  }else{
    return false;
  }
}

exports.memoryModule = Memory;
