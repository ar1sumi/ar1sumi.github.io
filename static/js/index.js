const updateDiscordServerInfo = async () => {
  const response = await axios.get('https://discord.com/api/v9/invites/AtlantisCord?with_counts=true');
  const bannerUrl = `https://cdn.discordapp.com/banners/${response.data.guild_id}/${response.data.guild.banner}.gif?size=480`;
  const iconUrl = `https://cdn.discordapp.com/icons/${response.data.guild_id}/${response.data.guild.icon}`;
  document.getElementById('server-name').innerText = response.data.guild.name;
  document.getElementById('server-banner').src = bannerUrl;
  document.getElementById('server-icon').src = iconUrl;
  document.getElementById('server-members').innerText = response.data.approximate_member_count.toLocaleString();
};

(async () => {
  await loadBasic(tsParticles);
  await tsParticles.load({
    id: 'particles',
    options: {
      particles: {
        number: {
          value: 80,
        },
        move: {
          direction: 'top-right',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: false,
          speed: 0.3,
          straight: true,
        },
        opacity: {
          fullscreen: false,
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
          value: { min: 0, max: 1 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    },
  });

  await updateDiscordServerInfo();
})();
