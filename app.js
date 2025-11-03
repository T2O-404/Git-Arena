document.addEventListener('DOMContentLoaded', () => {
  const log = document.getElementById('log');
  log.textContent = [
    'v0.0.1: Repo initialisé.',
    'Consigne: créer deux branches et provoquer un petit conflit contrôlé.',
    'Astuce: modifiez la même ligne du <h1> ci-dessus pour déclencher un conflit.'
  ].join('\n');
});
