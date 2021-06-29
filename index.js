function superbowlWin(recordArray) {
    if (recordArray.find(recordArray => recordArray.result === `W`)) {
      return recordArray.find(recordArray => recordArray.result === `W`).year
    } else {
      console.log(`bye`)
    }
  }
