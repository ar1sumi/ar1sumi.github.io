document.querySelectorAll('[data-dialog-toggle]').forEach((el) => {
  el.addEventListener('click', (ev) => {
    const target = document.getElementById(ev.currentTarget.dataset.dialogToggle);
    if (target !== null && target.tagName === 'DIALOG') {
      if (target.open) {
        target.close();
      } else {
        target.showModal();
      }
    }
  });
});
