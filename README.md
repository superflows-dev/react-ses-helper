# react-ses-helper

> A helper library for the Simple Email Service, integrates with AWS SDK

[![NPM](https://img.shields.io/npm/v/react-ses-helper.svg)](https://www.npmjs.com/package/react-ses-helper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-ses-helper
```

## Dependencies

```bash
npm install --save aws-sdk
```

## Note

###AWS key pair needs to have SES privileges


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
