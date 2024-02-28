export function compoment(x, y) {
  fetch(x)
    .then(response => response.text())
    .then(data => {
      document.getElementById(y).innerHTML = data;
    })
    .catch(error => {
      console.error('Theres was an error!', error);
    })
}

compoment('../compoment/footer.html', 'footer')
compoment('../compoment/title.html', 'title')
compoment('../compoment/resulttitle.html', 'resulttitle')