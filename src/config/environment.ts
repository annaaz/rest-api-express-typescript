import 'dotenv/config'

const config = {
  db: process.env.DB,
  jwt_public: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzAGy1ySDTFKhbMkRT5wh
NaZTE8fPyqIg8RTtRbM9og4eXdhCSw2gp9/QmLhCgFGSF/bGN/0OSlOTN0MZUVjy
FgaxMEnpVXuF+dwDqnUfcDA1NB7JBqNFuo8AT2kYYROXle9QaoBwABGruvQ2mV9h
LoAMjqTbHWpOzxoFyn9Xmw2XZoBAXjDIYF/xXq3N7aB4i27PQexJMflB/Fcyrw9h
lZL0kw5FpXI0j9RKN4Bqrlag0QkesafUEc3VHbOwgBGcub+ivj+i5jdmT/y9ENbd
RlXRPL/SBASwOyDHI4P9t1mD9B5lvBk/AENR+gHgexe/0+Avtl0h4FMWK5N2NgOa
HQIDAQAB
-----END PUBLIC KEY-----`,
  jwt_private: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAzAGy1ySDTFKhbMkRT5whNaZTE8fPyqIg8RTtRbM9og4eXdhC
Sw2gp9/QmLhCgFGSF/bGN/0OSlOTN0MZUVjyFgaxMEnpVXuF+dwDqnUfcDA1NB7J
BqNFuo8AT2kYYROXle9QaoBwABGruvQ2mV9hLoAMjqTbHWpOzxoFyn9Xmw2XZoBA
XjDIYF/xXq3N7aB4i27PQexJMflB/Fcyrw9hlZL0kw5FpXI0j9RKN4Bqrlag0Qke
safUEc3VHbOwgBGcub+ivj+i5jdmT/y9ENbdRlXRPL/SBASwOyDHI4P9t1mD9B5l
vBk/AENR+gHgexe/0+Avtl0h4FMWK5N2NgOaHQIDAQABAoIBACSMRVrvyqn4v7y6
hORrRzPSWV3Y1SwrQZWPNzbedrM6rkwHu1Cw31BT8434rMlKU88BQd+z8UR1lpE2
7yk4sx4pEsNg6nGLEKSDuxBlrT0vFckBnugWhh53Egon/NsfZG/TEOgTnH0WrVpv
9/wgL0viWt2PQUYSzo2hztnJWIuJYGk0wyjhhONB+Jp4BxfEtLv4UocusgMYU8HS
DmiEl9ireDdHLxnDGyW0+zum13foQJUt4DC64fSH/OgZ66ztp7MgV4h9cZL+h+Sv
zYDmEAGqb2oyUWzGrcHkXUhy60F5aa3kxS36xFJHTtIqUV4xDgR9CyckRTZegoEa
f7KS+80CgYEA/6Vue4e63jXTUpe1BLEsRzo63GV9WchgAQZd9Yrb90/OAPhY/xfo
pbSbyQrsIPcwUJ6/IBDe/ovQ6gNpvIh/CxZyV12tOzXbhTSX3TrGWUWyaULJwAIb
vpYzb7sNllxET1nkFwJdgoGHEcgho729/lqC0vEvzZF3AA/gnl/ga+MCgYEAzEn4
+Efvbt6st/kV1qZnUT7HAV8ZdaRf6aICvYhCUjH8fRr+ZdImWiN0UGgfyXLHUxvX
wXoD+SRZ5xEoI9R7mH01pQRR6Fgo4eMf7Rl4Te9F0mjReEQPkaELGZkUtOz1WLmS
b/ti215SLCWNvck5eztUx4pA7GBlaQl4b0j2wf8CgYB5cYA7pK3r88vw12rB0NzE
9W+S1Y+nwB2DPyARjiaSpNGq+k9k11nIpjS/W7Xyrxq/oboPpJQafhb/pCFt07Xu
cXpd8H1jvGENNX/TM6GYNRjdEkI/OYEul7HVqRl6TViSDZTiLVh4r8mXc+gvHesM
0riFNthLoofSerhs5AT7mwKBgQDL/8JjDFKIgEwxmsa4Bot9khbfw7uEwpQUlffu
lDbGJaxgsagAvY4WzPjFonS7kaaB03fseI+nJymvmG5g+TpC2CXNlzbDseWBTHEB
L0H3cUxkBM/ILQ7u+cY/1aHb2hRWeVlGAd6B+PpNo2Kbdmm0KVdLuz+By/D4psBh
QJdIuQKBgQCKN/DdCAfWhMLXXx6t1Z+zbnH5NUO11j57wVTIRB0Q/KsYliXOO4QT
FVG2RB3loAF2WAB3XoQEVE3/5ykSjTKW9/jJqpigMJm7lDhhDHRQ645lKVeAkWdZ
uB4fpOaK8GmWPZgAJIOJkLAY5FgA3FYmgUnNgwvLhZnoDICg+RSyNQ==
-----END RSA PRIVATE KEY-----`
}

export default config
