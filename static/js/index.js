(async () => {
  await loadFull(tsParticles);

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
})();
