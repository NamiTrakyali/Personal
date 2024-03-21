export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/1218985386538434702/1220397413655646359/rH7DQrC.png?ex=660ecaa9&is=65fc55a9&hm=ef5c4d9d2024fc8a4c87282e5b9d1041ffa5f2052a31f0c18c661ca9a09f410b&",
      name: "Destek Bileti",
      description: "Ticket/Bilet sistemidir sunucunuzda bilet açıp yetkililerin o bilete bakmasını sağlar. Kategori,Ban,Unban gibi komutları bulunmaktadır.",
      link: "https://glitch.com/dashboard",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/1218985386538434702/1220399520865583166/oOx7rZ5.png?ex=660ecc9f&is=65fc579f&hm=f30659ecb97e5944eb756da867b524770c2ab0eda927c381d2a5f5d8f5423c3e&",
      name: "Swinger",
      description: "Discordda sunucuları yok edecek bir güce sahip sadece botu sunucuna ekle. Yardım/Kaç/Rolspam/Duyur gibi komutları bulunmaktadır.",
      link: "https://glitch.com/dashboard",
    }
  ];
  res.status(200).json(data);
};
