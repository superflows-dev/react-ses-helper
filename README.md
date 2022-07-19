# react-ses-helper

> A helper library for the Simple Email Service, integrates with AWS SDK

[![NPM](https://img.shields.io/npm/v/react-ses-helper.svg)](https://www.npmjs.com/package/react-ses-helper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-ses-helper
```
Then install the dependencies.


## Dependencies

```bash
npm install --save aws-sdk
```
Then review the AWS configuration

## Configuration

### AWS SES Sender Receiver

The sender (source) email address should be configured and verified. If SES is in sandbox mode, the receiver email address(es) should also be configured and verified. A test email should be sent from the SES console and ensured that the intended receiver receives it.

### AWS SES Template

This is required if you are planning to send templated emails. An html template should be created. As of July 22, SES console does not support adding email templates. They can only be done through the apis. Best way is to do it via aws command line interface.

### AWS Credentials

AWS region, secret and access key form the credentials. These are required to use this package. It is crucial that these credentials are given the SES email sending permissions, otherwise the emails will not be sent.

You can now review the functionality below.

## Functionality

```jsx

/*

region: aws region
secret: aws secret
key: aws access key
subject: subject of email
source: source email (needs to be configured in aws ses)
destinationToArr: array of destination emails
destinationCCArr: array of emails to be cced
htmlBody: html body
textBody: text body
replyToArr: array to reply to email addresses
template: name of template that is configured in aws ses
templateData: json string representation of key value pairs that are the template data

*/

sendEmail(region, secret, key, subject, source, destinationToArr, destinationCCArr, htmlBody, textBody, replyToArr) {}

sendTemplatedEmail(region, secret, key, source, destinationToArr, destinationCCArr, templateName, templateData, replyToArr) {}

```

## Usage

```jsx
import React, { useEffect } from 'react'
import * as SesHelper from 'react-ses-helper'

const App = () => {

  useEffect(() => {
    async function sendEmail() {
      
      SesHelper.sendEmail("aws_region", "aws_secret", "aws_key", "Test Subject", "supe*******@**ail.com", ["hrus*******@**ail.com"], [], "HTML Body", "Text Body", [])
  
    }
    sendEmail();
  }, [])

  useEffect(() => {
    async function sendTemplatedEmail() {
      
      SesHelper.sendTemplatedEmail("aws_region", "aws_secret", "aws_key", "su******@***il.com", ["hr*******ndale@**ail.com"], [], "TemplateOtp1", "{\"project\": \"superflows\", \"name\": \"Hrushikesh\", \"otp\": \"1313\"}", [])
  
    }
    sendTemplatedEmail();
  }, [])

  return <div>Hello SES Helper</div>

}

export default App

```

## License

MIT © [superflows-dev](https://github.com/superflows-dev)
