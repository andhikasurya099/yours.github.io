function showSlide2() {
  document.getElementById('slide1').style.display = 'none';
  document.getElementById('slide2').style.display = 'flex';
}
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };