const VN_PHONE = /((84|0|\+84)+(9|3|7|8|5)+([0-9]{8})\b)/;
const PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const EMAIL = /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
const YOUTUBE = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
const IMAGE_URL = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
export {VN_PHONE, PASSWORD, EMAIL, YOUTUBE, IMAGE_URL};
