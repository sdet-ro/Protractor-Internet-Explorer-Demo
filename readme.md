
#Working example for Protractor with Internet Explorer

In order to run Protractor project run in terminal:

(NOTE:) This project uses gulp, so everything works more smoothly.

`npm test`

//it will trigger gulp, install webdriver, chromedriver, etc by itself.

Steps to start IE webdriver manager
browse to node_modules/Protractor/bin
then run the following command

`webdriver-manager --ie32 update`

`webdriver-manager --ie32 start`

run Protractor with IE after you started the webdriver server with the following command:

`npm test`


If you do not want to use gulp you can run the Protractor project with classical comand:
Protractor config/protractorConf.js

Also, you will need to configure Internet Explorer, and disable the security flags. 
####See the complete tutorial for Protractor and Internet Explorer here: 
https://sdet.ro/blog/protractor-with-internet-explorer