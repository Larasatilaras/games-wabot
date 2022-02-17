let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085759662798]
│ • Gopay [085759662798]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285759662798
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
