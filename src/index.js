import * as AWS from 'aws-sdk'
import React from 'react'
import { ConfigurationOptions } from 'aws-sdk'

function updateAWSConfigAndGetClient(region, secret, key) {

  const configuration: ConfigurationOptions = {
    region: region,
    secretAccessKey: secret,
    accessKeyId: key
  }
  console.log(configuration);
  AWS.config.update(configuration)
  return new AWS.DynamoDB.DocumentClient();

}

export const sendEmail = async (region, secret, key, subject, source, destinationToArr, destinationCCArr, htmlBody, textBody, replyToArr) => {

  const docClient = updateAWSConfigAndGetClient(region, secret, key);

  try {

    var myPromise = () => (
        new Promise((resolve, reject) => {
          
          var params = {

            Destination: { 
              CcAddresses: destinationCCArr,
              ToAddresses: destinationToArr
            },
            Message: { 
              Body: { 
                Html: {
                 Charset: "UTF-8",
                 Data: htmlBody
                },
                Text: {
                 Charset: "UTF-8",
                 Data: textBody
                }
               },
               Subject: {
                Charset: 'UTF-8',
                Data: subject
               }
              },
            Source: source,
            ReplyToAddresses: replyToArr
            
          };
          
          var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

          sendPromise.then(
            function(data) {
              resolve (data.MessageId);
              console.log(data.MessageId);
            }).catch(
              function(err) {
              reject(err);
            }
          );


        })
    );
    var result = await (myPromise()); 
    return result;
      
  } catch (e) {
      console.log(e)
      return -1;  
  }

}


export const sendTemplatedEmail = async (region, secret, key, source, destinationToArr, destinationCCArr, templateName, templateData, replyToArr) => {

  const docClient = updateAWSConfigAndGetClient(region, secret, key);

  try {

    var myPromise = () => (
        new Promise((resolve, reject) => {
          
          var params = {

            Destination: { 
              CcAddresses: destinationCCArr,
              ToAddresses: destinationToArr
            },
            Template: templateName,
            TemplateData: templateData,
            Source: source,
            ReplyToAddresses: replyToArr
            
          };
          
          var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendTemplatedEmail(params).promise();

          sendPromise.then(
            function(data) {
              resolve (data.MessageId);
              console.log(data.MessageId);
            }).catch(
              function(err) {
              reject(err);
            }
          );


        })
    );
    var result = await (myPromise()); 
    return result;
      
  } catch (e) {
      console.log(e)
      return -1;  
  }

}