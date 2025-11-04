// Ambil semua elemen input dan elemen preview
const namaInput = document.querySelector('#nama');
const ukuranInput = document.querySelector('#ukuran');
const toppingInput = document.querySelector('#topping');
const catatanInput = document.querySelector('#catatan');

const previewNama = document.querySelector('#preview-nama');
const previewUkuran = document.querySelector('#preview-ukuran');
const previewTopping = document.querySelector('#preview-topping');
const previewCatatan = document.querySelector('#preview-catatan');
const pizzaImage = document.querySelector('#pizza-image');

// Fungsi untuk update preview secara langsung
function updatePreview() {
  previewNama.textContent = namaInput.value || '-';
  previewUkuran.textContent = ukuranInput.value || '-';
  previewTopping.textContent = toppingInput.value || '-';
  previewCatatan.textContent = catatanInput.value || '-';

  // Ganti gambar pizza sesuai ukuran
  if (ukuranInput.value === 'Small') {
    pizzaImage.src = 'https://i.ibb.co/tYcrmdV/pizza-small.png';
  } else if (ukuranInput.value === 'Medium') {
    pizzaImage.src = 'https://i.ibb.co/SyKhWGR/pizza-medium.png';
  } else if (ukuranInput.value === 'Large') {
    pizzaImage.src = 'https://i.ibb.co/nMz1QH7/pizza-large.png';
  } else {
    pizzaImage.src = 'https://i.ibb.co/5G8Z9qB/pizza.png';
  }
}

// Event listener agar setiap perubahan input langsung update
[namaInput, ukuranInput, toppingInput, catatanInput].forEach(input => {
  input.addEventListener('input', updatePreview);
});
