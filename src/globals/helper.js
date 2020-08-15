import {YOUTUBE} from './config/regex';

export function formatPrice(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export const handleValidate = (string, regex) => {
  if (!string || string.length === 0) {
    return false;
  }
  const testString = string
    .normalize('NFC')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
  return regex.test(testString);
};

export function formatHoursToTime(hours) {
  const time = hours * 3600;
  const strHour = hours >= 10 ? Math.floor(hours) : '0' + Math.floor(hours);
  const strMinute =
    (time % 3600) / 60 >= 10
      ? Math.floor((time % 3600) / 60)
      : '0' + Math.floor((time % 3600) / 60);
  const strSecond =
    time % 60 >= 10 ? Math.floor(time % 60) : '0' + Math.floor(time % 60);
  return `${strHour}:${strMinute}:${strSecond}`;
}

export function getYoutubeVideoID(url) {
  if (handleValidate(url, YOUTUBE)) {
    const VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    return url.match(VID_REGEX)[1];
  }
  return '';
}
