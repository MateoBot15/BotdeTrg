let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝔸ℕ𝕆𝕋𝔸𝕋𝔼 𝕆 𝕊𝔼ℝÁ𝕊 ℂ𝕌ℙ𝕆: ${pesan}`
let teks = `⺀🤍𝙱𝙾𝚃 𝚃𝚁𝙶 𝚃𝙴 𝙸𝙽𝚅𝙾𝙲𝙰🤍⺀ \n\n❏ ${oi}\n❏ 🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:: \n`
for (let mem of participants) {
teks += `❄️  @${mem.id.split('@')[0]}\n`}
teks += `🐾𝐁𝐨𝐭 𝐃𝐞 𝐓𝐫𝐠`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
