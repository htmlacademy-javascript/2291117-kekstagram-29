function checkStringLength (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

checkStringLength('sdgcvsdc+svgdhvcghd', 20);

const checkMeetingTime = (workStart, workEnd, meetingStart, meetingDuration) => {
  const dayStartMinutes = workStart.split(':')[0] * 60 + workStart.split(':')[1] * 1;
  const dayEndMinutes = workEnd.split(':')[0] * 60 + workEnd.split(':')[1] * 1;
  const meetingStartMinutes = meetingStart.split(':')[0] * 60 + meetingStart.split(':')[1] * 1;


  if (meetingStartMinutes < dayStartMinutes || meetingStartMinutes > dayEndMinutes) {
    return false;
  }
  if((meetingDuration + meetingStartMinutes) <= dayEndMinutes) {
    return true;
  } else {
    return false;
  }
};

checkMeetingTime('10:00', '19:00', '15:00', 90);
checkMeetingTime('08:0', '18:0', '8:0', 120);
checkMeetingTime('8:00', '17:00', '14:00', 90);
checkMeetingTime('14:00', '17:30', '08:0', 90);
checkMeetingTime('8:00', '17:30', '08:00', 900);
