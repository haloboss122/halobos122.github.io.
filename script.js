document.getElementById('youtube-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Mencegah form reload halaman

  var url = document.getElementById('youtube-url').value;
  var videoId = getYouTubeVideoId(url);

  if (videoId) {
    displayVideos(videoId);
  } else {
    alert('URL tidak valid! Pastikan URL YouTube yang dimasukkan benar.');
  }
});

// Fungsi untuk mengekstrak ID video YouTube dari URL
function getYouTubeVideoId(url) {
  var regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*\?v=|\S+\/|\S+\?v=)([^"&?\/\s]{11}))/;
  var match = url.match(regex);
  return match ? match[1] : null;
}

// Fungsi untuk menampilkan 50 video dengan ID yang sama dan memulai autoplay
function displayVideos(videoId) {
  var container = document.getElementById('video-container');
  container.innerHTML = '';  // Bersihkan kontainer sebelumnya

  for (var i = 0; i < 50; i++) {
    var iframe = document.createElement('iframe');
    // Menambahkan parameter autoplay=1 untuk memastikan video diputar otomatis
    iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
    iframe.frameborder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowfullscreen = true;
    container.appendChild(iframe);
  }
}
