var formatTime = function(endTime, status){
  if(status == 'open'){
    return moment(endTime).format('dddd, h:mm a');
  }else if(status == 'closed'){
    return moment(endTime).format('dddd Do');
  };
};
