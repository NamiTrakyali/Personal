export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://i.hizliresim.com/2ugc53v.jpg",
      name: "Destek Bileti",
      description: "Ticket/Bilet sistemidir sunucunuzda bilet açıp yetkililerin o bilete bakmasını sağlar. Kategori,Ban,Unban gibi komutları bulunmaktadır.",
      link: "https://discord.com/invite/bdfd",
    },
    {
      id: 2,
      image: "https://i.hizliresim.com/kzryexa.jpg",
      name: "Swinger",
      description: "Discordda sunucuları yok edecek bir güce sahip sadece botu sunucuna ekle. Yardım/Kaç/Rolspam/Duyur gibi komutları bulunmaktadır. /Fotoğrafa Kenan EVREN koymamın nedeni Kenan EVREN gibi darbe yapmasıdır.",
      link: "https://discord.com/invite/bdfd",
    }
  ];
  res.status(200).json(data);
};
