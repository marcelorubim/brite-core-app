// Assuming you have already done "npm install fernet"
let fernet = require('fernet')
let secret = new fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=')
// Oh no! The code is going over the edge! What are you going to do?
let message = 'gAAAAABcEN7zes9EzsI7qed-LtcHyqjF-c5X6wz-1l3VZwNSFx2YXnf3nLt68ooW9sxIKMEciyRNC5WbbEMQmhrlqL4KzTqyZCETiPpvUcK6arPD0uydOOYUEjtvc1sQ5VAHQf9e8TVLVt_KssqDUxTOZa4_fmOXmLMnmOkjrzO2ORzpg8uYbqBJqRov_oLsojkL4GDOGi7F'
let token = new fernet.Token({secret: secret, token: message, ttl:0})
console.log(token.decode())