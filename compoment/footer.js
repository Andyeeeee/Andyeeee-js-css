// index.js
export default function footer() {
  const footerDiv = document.getElementById('footer');
  if (footerDiv) {
    footerDiv.innerHTML = `
    <h1>footer</h1>
  `;
  }
}
// 在此處調用 `nav` 函數以在頁面加載時插入內容
footer();


