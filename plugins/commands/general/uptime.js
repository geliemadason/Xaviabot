const config = {
    name: "uptime",
    aliases: ["upt"],
    credits: "XaviaTeam"
}

function onCall({ message }) {
    let uptime = global.msToHMS(process.uptime() * 1000);
    message.reply("Oten "+uptime);
}


export default {
    config,
    onCall
}
