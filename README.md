###  Frontend ReactJS com Socket io 

##### Simples Projeto com integração aplicações Web e Mobile desenvolvidas com ReactJS e React Native.

Para executar o projeto siga os passos abaixo

```sh
git clone git@github.com:pedrocarlos-ti/goweek-backend.git
cd goweek-backend
yarn 
informar user/password do mLab no arquivo app.js
yarn start (Nodemon ready)
```

Passos para fazer deploy no Bluemix
Gera o build do app
loga na conta bluemix
Seleciona o Buildpack - staticfile_buildpack 

buildpack                                position   enabled   locked   filename
liberty-for-java                         1          true      false    buildpack_liberty-for-java_v3.26-20181023-1545.zip
sdk-for-nodejs                           2          true      false    buildpack_sdk-for-nodejs_v3.22-20180904-1913.zip
dotnet-core                              3          true      false    buildpack_dotnet-core_v2.0-20180918-1356.zip
swift_buildpack                          4          true      false    buildpack_swift_v2.0.15-20180920-0051.zip
noop-buildpack                           5          true      false    noop-buildpack-20140311-1519.zip
java_buildpack                           6          true      false    java-buildpack-v4.9.zip
ruby_buildpack                           7          true      false    ruby-buildpack-v1.7.15.zip
nodejs_buildpack                         8          true      false    nodejs-buildpack-v1.6.20.zip
go_buildpack                             9          true      false    go-buildpack-v1.8.20.zip
python_buildpack                         10         true      false    python-buildpack-v1.6.11.zip
xpages_buildpack                         11         true      false    xpages_buildpack_v1.2.2-20170112-1328.zip
php_buildpack                            12         true      false    php-buildpack-v4.3.51.zip
staticfile_buildpack                     13         true      false    staticfile-buildpack-v1.4.24.zip
binary_buildpack                         14         true      false    binary-buildpack-v1.0.17.zip
liberty-for-java_v3_17_1-20180131-1532   15         true      false    buildpack_liberty-for-java_v3.17.1-20180131-1532.zip
liberty_v3_14-20171013-1023              16         true      false    buildpack_liberty_v3.14-20171013-1023.zip
sdk-for-nodejs_v3_21-20180628-1258       17         true      false    buildpack_sdk-for-nodejs_v3.21-20180628-1258.zip
sdk-for-nodejs_v3_22-20180904-1913       18         true      false    buildpack_sdk-for-nodejs_v3.22-20180904-1913.zip
dotnet-core_v1_0_26-20170913-1346        19         true      false    buildpack_dotnet-core_v1.0.26-20170913-1346.zip
dotnet-core_v2_0-20180918-1356           20         true      false    buildpack_dotnet-core_v2.0-20180918-1356.zip
swift_buildpack_v2_0_14-20180803-1823    21         true      false    buildpack_swift_v2.0.14-20180803-1823.zip
swift_buildpack_v2_0_15-20180920-0051    22         true      false    buildpack_swift_v2.0.15-20180920-0051.zip
liberty-for-java_v3_25-20180918-1034     23         true      false    buildpack_liberty-for-java_v3.25-20180918-1034.zip
liberty-for-java_v3_26-20181023-1545     24         true      false    buildpack_liberty-for-java_v3.26-20181023-1545.zip

Rodar o seguinte comando
bluemix cf build -b staticfile_buildpack

Só.

:rocket: :rocket:

