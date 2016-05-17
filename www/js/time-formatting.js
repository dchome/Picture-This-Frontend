var formatTime = function(endTime, status){
  if(status == 'open'){
    var date = moment(endTime).format('dddd')
    var time = moment(endTime).format('h:mm a');
    return [date, time];
  }else if(status == 'closed'){
    return moment(endTime).format('dddd Do');
  };
};
