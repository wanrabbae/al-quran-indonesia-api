# Al-Qur'an API Bahasa Indonesia
### Assalamualaikum wr.wb
### API gratis untuk Al-Qur'an Bahasa Indonesia yg dibuat dengan cinta dan kasih sayang. API ini GRATIS dan Halal!! Masya allah...

# Peraturan dan Pedoman Kontribusi
Dipersilahkan bila ingin melakukan open pull request atau kontribusi pada repositori ini.
Pastikan sudah terinstall yarn pada laptop/pc kalian, karena project ini menggunakan yarn (tidak diperbolehkan menggunakan npm!)

API ini dibuat menggunakan: <br>

<img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>

### Apa yg baru ?
- Search surah berdasarkan nama surah

# Penggunaan

BASE Url:
```bash
https://api-alquranid.herokuapp.com
```

## - Menampilkan seluruh data-data surah
Digunakan untuk mendapatkan informasi tentang semua surah dari Al-Quran beserta keteranganya, Responnya berupa JSON.
```bash
https://api-alquranid.herokuapp.com/surah
```
Contoh Response: 
```json
[
  {
  arti: "Pembukaan",
  asma: "الفاتحة",
  audio: "http://ia802609.us.archive.org/13/items/quraninindonesia/001AlFaatihah.mp3",
  ayat: 7,
  keterangan: "Surat <i>Al Faatihah</i> (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan dengan lengkap diantara surat-surat yang ada dalam Al Quran dan termasuk golongan surat Makkiyyah. Surat ini disebut <i>Al Faatihah</i> (Pembukaan), karena dengan surat inilah dibuka dan dimulainya Al Quran. Dinamakan <i>Ummul Quran</i> (induk Al Quran) atau <i>Ummul Kitaab</i> (induk Al Kitaab) karena dia merupakan induk dari semua isi Al Quran, dan karena itu diwajibkan membacanya pada tiap-tiap sembahyang.<br> Dinamakan pula <i>As Sab'ul matsaany</i> (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca berulang-ulang dalam sholat.",
  nama: "Al Fatihah",
  nomor: "1",
  rukuk: "1",
  type: "mekah",
  urut: "5"
  },
  {
  arti: "Sapi Betina",
  asma: "البقرة",
  audio: "http://ia802609.us.archive.org/13/items/quraninindonesia/002AlBaqarah.mp3",
  ayat: 286,
  keterangan: "Surat <i>Al Baqarah</i> yang 286 ayat itu turun di Madinah yang sebahagian besar diturunkan pada permulaan tahun Hijrah, kecuali ayat 281 diturunkan di Mina pada Hajji wadaa' (hajji Nabi Muhammad s.a.w. yang terakhir). Seluruh ayat dari surat Al Baqarah termasuk golongan Madaniyyah, merupakan surat yang terpanjang di antara surat-surat Al Quran yang di dalamnya terdapat pula ayat yang terpancang (ayat 282). Surat ini dinamai <i>Al Baqarah</i> karena di dalamnya disebutkan kisah penyembelihan sapi betina yang diperintahkan Allah kepada Bani Israil (ayat 67 sampai dengan 74), dimana dijelaskan watak orang Yahudi pada umumnya. Dinamai <i>Fusthaatul-Quran</i> (puncak Al Quran) karena memuat beberapa hukum yang tidak disebutkan dalam surat yang lain. Dinamai juga surat <i>alif-laam-miim</i> karena surat ini dimulai dengan Alif-laam-miim.",
  nama: "Al Baqarah",
  nomor: "2",
  rukuk: "40",
  type: "madinah",
  urut: "87"
  }
]
```
## - Menampilkan data surah beserta ayat-ayatnya berdasarkan nomor surat
```bash
https://api-alquranid.herokuapp.com/surah/nomorsurah
```
Note: nomor surah berupa number / integer

Contoh Response:
```json
[
  {
  ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  id: "Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang.",
  nomor: "1",
  tr: "bismi <strong>al</strong>l<u>aa</u>hi <strong>al</strong>rra<u>h</u>m<u>aa</u>ni <strong>al</strong>rra<u>h</u>iim<strong>i</strong>"
  },
  {
  ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
  id: "Segala puji bagi Allah, Tuhan semesta alam.",
  nomor: "2",
  tr: "al<u>h</u>amdu lill<u>aa</u>hi rabbi <strong>a</strong>l'<u>aa</u>lamiin<strong>a</strong>"
  }
]
```
## - Search surah berdasarkan nama surah
```bash
https://api-alquranid.herokuapp.com/surah/search/namasurah
```
Note: nama surah berupa string

Contoh Response:
```json
[
  {
    arti: "Hidangan",
    asma: "المائدة",
    audio: "http://ia802609.us.archive.org/13/items/quraninindonesia/005AlMaaidah.mp3",
    ayat: 120,
    keterangan: "Surat Al Maa'idah terdiri dari 120 ayat; termasuk golongan surat Madaniyyah. Sekalipun ada ayatnya yang turun di Mekah, namun ayat ini diturunkan sesudah Nabi Muhammad s.a.w. hijrah ke Medinah, yaitu di waktu haji wadaa'. Surat ini dinamakan <i>Al Maa'idah</i> (hidangan) karena memuat kisah pengikut-pengikut setia Nabi Isa a.s. meminta kepada Nabi Isa a.s. agar Allah menurunkan untuk mereka Al Maa'idah (hidangan makanan) dari langit (ayat 112). Dan dinamakan <i>Al Uqud</i> (perjanjian), karena kata itu terdapat pada ayat pertama surat ini, dimana Allah menyuruh agar hamba-hamba-Nya memenuhi janji prasetia terhadap Allah dan perjanjian-perjanjian yang mereka buat sesamanya. Dinamakan juga <i>Al Munqidz</i> (yang menyelamatkan), karena akhir surat ini mengandung kisah tentang Nabi Isa a.s. penyelamat pengikut-pengikut setianya dari azab Allah.",
    nama: "Al Maidah",
    nomor: "5",
    rukuk: "16",
    type: "madinah",
    urut: "112"
  },
  {
    arti: "Orang-Orang yang Beriman",
    asma: "المؤمنون",
    audio: "http://ia802609.us.archive.org/13/items/quraninindonesia/023AlMuminuun.mp3",
    ayat: 118,
    keterangan: "Surat Al Mu'minuun terdiri atas 118 ayat, termasuk golongan surat-surat Makkiyyah. Dinamai <i>Al Mu'minuun</i>, karena permulaan ayat ini manerangkan bagaimana seharusnya sifat-sifat orang mukmin yang menyebabkan keberuntungan mereka di akhirat dan ketenteraman jiwa mereka di dunia. Demikian tingginya sifat-sifat itu, hingga ia telah menjadi akhlak bagi Nabi Muhammad s.a.w.",
    nama: "Al Mu'minun",
    nomor: "23",
    rukuk: "6",
    type: "mekah",
    urut: "74"
  },
]
```

## - Menampilkan detail data surah berdasarkan nama surah
```bash
https://api-alquranid.herokuapp.com/surat/namasurah
```
Note: nama surah berupa string

Contoh Response:
```json
[
  {
    arti: "Hidangan",
    asma: "المائدة",
    audio: "http://ia802609.us.archive.org/13/items/quraninindonesia/005AlMaaidah.mp3",
    ayat: 120,
    keterangan: "Surat Al Maa'idah terdiri dari 120 ayat; termasuk golongan surat Madaniyyah. Sekalipun ada ayatnya yang turun di Mekah, namun ayat ini diturunkan sesudah Nabi Muhammad s.a.w. hijrah ke Medinah, yaitu di waktu haji wadaa'. Surat ini dinamakan <i>Al Maa'idah</i> (hidangan) karena memuat kisah pengikut-pengikut setia Nabi Isa a.s. meminta kepada Nabi Isa a.s. agar Allah menurunkan untuk mereka Al Maa'idah (hidangan makanan) dari langit (ayat 112). Dan dinamakan <i>Al Uqud</i> (perjanjian), karena kata itu terdapat pada ayat pertama surat ini, dimana Allah menyuruh agar hamba-hamba-Nya memenuhi janji prasetia terhadap Allah dan perjanjian-perjanjian yang mereka buat sesamanya. Dinamakan juga <i>Al Munqidz</i> (yang menyelamatkan), karena akhir surat ini mengandung kisah tentang Nabi Isa a.s. penyelamat pengikut-pengikut setianya dari azab Allah.",
    nama: "Al Maidah",
    nomor: "5",
    rukuk: "16",
    type: "madinah",
    urut: "112"
    }
]
```

### Gunakan free API ini dengan Bijak dan Benar ya :)
### Jika ada kesalahan pada API atau ingin meminta saran bisa hubungi email: alwanrabbae@gmail.com atau lewat issues pada repo ini.<br>Kurang lebihnya mohon maaf, Wassalamualaikum wr.wb
