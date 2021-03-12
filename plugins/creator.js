let handler = function (m) {
  // this.sendContact(m.chat, '6285755846460', 'Nurutomo', m)
  this.sendContact(m.chat, '0', '6285755846460', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
