export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email Alanı Boş Olamaz.';
  if (!re.test(email)) return 'Geçerli mail giriniz.';

  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Şifre Alanı Boş Olamaz.';

  return '';
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return 'İsim Alanı Boş Olamaz.';

  return '';
};
