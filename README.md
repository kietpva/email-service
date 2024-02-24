# Email Service

## Installation

Use the package manager [npm] to install email service.

```bash
npm install email-service --save
```

## Usage

```
const mailer = emailTransport(
                host,
                port,
                secure,
                auth
              );
const mailHtmlTemplate = magicEmailTemplate();
mailer.sendMail(mailHtmlTemplate, (error) => {
  if (error) {
    console.log(`error sending email: ${error}`);
  }
});
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)