export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/1218985386538434702/1220397413655646359/rH7DQrC.png?ex=660ecaa9&is=65fc55a9&hm=ef5c4d9d2024fc8a4c87282e5b9d1041ffa5f2052a31f0c18c661ca9a09f410b&",
      name: "Destek Bileti Altyapı",
      description: "Ticket/Bilet sistemidir sunucunuzda bilet açıp yetkililerin o bilete bakmasını sağlar. Kategori,Ban,Unban gibi komutları bulunmaktadır.",
      link: "https://glitch.com/edit/#!/rebel-royal-dryer",
    },
    {
      id: 2,
      image: "https://media.discordapp.net/attachments/737348411568685066/999563078079361074/YT_AVATAR_NET.jpg",
      name: "Swinger Altyapı",
      description: "Discordda sunucuları yok edecek bir güce sahip sadece botu sunucuna ekle. Yardım/Kaç/Rolspam/Duyur gibi komutları bulunmaktadır.",
      link: "https://youtube.com/UmutBayraktarYT",
    }
  ];
  res.status(200).json(data);
};
