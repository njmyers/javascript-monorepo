# Proxy Mailserver for Mailgun Using Serverless

This is a simple proxy server for mailgun build using `express` and the `serverless-http` layer. Send a post request to `https://domain/send/:recipient` and this app will forward your request to mailgun. For low usage domains or for simple contact forms you can use this application to avoid having to set up multiple verified mailgun domains.

## Security

Only secure origins are accepted. Also the only CORS enabled domains are specified in the recipients.js file.

## Destination

The email address that it will be forwarded to is `recipient@domain.com`. Make sure to enable your routes in mailgun so that it can eventually be delivered to the proper email address. You could also specify some other way of matching recipients by using headers.

## Deployment

This app is deployed to AWS Lambda using serverless and provides a cost effective way of routing many mail requests through a single verified mailgun domain.
