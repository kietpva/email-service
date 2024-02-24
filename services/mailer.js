

const emailTransport = (host, port, secure, auth) => {
  const mailer = nodemailer.createTransport({
    host,
    port,
    secure,
    auth
  });
  return mailer;
}

module.exports = {
  emailTransport
}