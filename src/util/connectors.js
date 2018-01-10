import { Connect, SimpleSigner } from 'uport-connect'

    export const uport = new Connect('CoinΗealth uPort Authentication Demo', {
      clientId: '2ok5ZL1QBDsQz8P9kXVdGZtpVEV7yLshvkY',
      network: 'rinkeby',
      signer: SimpleSigner('b20006c2b76a56cf160f54a92e2b61137751dcf4986eec771e4fa4c95c95fd1e')
    })
    export const web3 = uport.getWeb3()
    