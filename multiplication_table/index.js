var result = ''
for(var i = 1; i<=9; i++){
  for(var y = 1; y<=9; y++){
    if (y>i) {
        break
    }
    if (y<=i){
      result += `${i}*${y}=${i*y} `
    }
  }
  console.log(result)
  result=''
}
