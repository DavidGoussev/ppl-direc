# ppl-direc


## basic Angular personnel contact manager, complete karma-jasmine unit testing

### karma settings:

install Karma, Jasmine core packages:


`npm install karma karma-jasmine jasmine-core karma-chrome-launcher --save-dev`


globally install Karma CLI:


`npm install -g karma-cli`


install Angular Mocks, loads specified ng module to be tested, as arg in Jasmine's beforeEach pre-test function:


`npm install angular angular-ui-router angular-mocks --save-dev`


run initialization and set configs:


`karma init`
