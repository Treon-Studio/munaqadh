<script>
// This is a static Svelte 5 component based on the provided React code.
// If you want to split sections into smaller components, you can import them here.
</script>

<!-- Main Home Page -->
<div class="min-h-screen">
  <main>
    <!-- Hero Section -->
    <section id="beranda" class="py-16">
      <div class="notebook-paper">
        <div class="content-block text-center">
          <h1 class="handwritten-title text-4xl text-foreground mb-4">
            Munaqadh by TreonStudio
          </h1>
          <p class="handwritten text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Sebuah inisiatif dari TreonStudio untuk membantu anak-anak yatim 
            dan masyarakat tunawisma melalui program-program bantuan berkelanjutan.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button class="btn">
              <span style="margin-right: 0.5rem">♥</span>
              Mulai Berdonasi
            </button>
            <button class="btn btn-secondary">
              <span style="margin-right: 0.5rem">👥</span>
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        <!-- Key Features -->
        <div class="content-block">
          <h2 class="handwritten-title text-2xl text-foreground text-center mb-4">
            Mengapa Memilih Munaqadh?
          </h2>
          <p class="handwritten text-muted-foreground text-center mb-8">
            Kami berkomitmen memberikan bantuan terbaik dengan transparansi penuh
          </p>
          
          <div class="grid-3">
            <div class="text-center group">
              <div class="icon-wrapper group-hover:bg-primary group-hover:border-primary transition-colors duration-200">
                <span class="text-primary group-hover:text-white text-xl">♥</span>
              </div>
              <h3 class="handwritten-title text-lg text-foreground mb-2">
                Bantuan Langsung
              </h3>
              <p class="handwritten-small text-sm text-muted-foreground">
                Program bantuan yang tepat sasaran untuk anak yatim dan keluarga kurang mampu
              </p>
            </div>

            <div class="text-center group">
              <div class="icon-wrapper group-hover:bg-primary group-hover:border-primary transition-colors duration-200">
                <span class="text-primary group-hover:text-white text-xl">👥</span>
              </div>
              <h3 class="handwritten-title text-lg text-foreground mb-2">
                Komunitas Peduli
              </h3>
              <p class="handwritten-small text-sm text-muted-foreground">
                Membangun jaringan solidaritas sosial yang kuat dan berkelanjutan
              </p>
            </div>

            <div class="text-center group">
              <div class="icon-wrapper group-hover:bg-primary group-hover:border-primary transition-colors duration-200">
                <span class="text-primary group-hover:text-white text-xl">🏠</span>
              </div>
              <h3 class="handwritten-title text-lg text-foreground mb-2">
                Rumah Singgah
              </h3>
              <p class="handwritten-small text-sm text-muted-foreground">
                Menyediakan tempat tinggal sementara yang aman dan nyaman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="tentang">
      <div class="notebook-paper">
        <div class="content-block text-center">
          <h2 class="handwritten-title text-3xl text-foreground mb-4">
            Tentang Munaqadh
          </h2>
          <p class="handwritten text-lg text-muted-foreground max-w-2xl mx-auto">
            Munaqadh adalah bagian dari TreonStudio yang berkomitmen untuk 
            menciptakan dampak sosial positif melalui program-program bantuan 
            berkelanjutan untuk anak yatim dan masyarakat tunawisma.
          </p>
        </div>

        <div class="content-block">
          <div class="grid-2">
            <div>
              <h3 class="handwritten-title text-xl text-foreground mb-3">Visi Kami</h3>
              <p class="handwritten text-muted-foreground">
                Menjadi organisasi charity terdepan dalam memberikan harapan dan 
                mengubah kehidupan anak-anak yatim dan masyarakat tunawisma menjadi 
                lebih baik dan berdaya.
              </p>
            </div>
            <div>
              <h3 class="handwritten-title text-xl text-foreground mb-3">Misi Kami</h3>
              <ul class="space-y-2">
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">•</span>
                  <span class="handwritten text-muted-foreground">Memberikan bantuan pendidikan berkualitas</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">•</span>
                  <span class="handwritten text-muted-foreground">Menyediakan tempat tinggal sementara</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">•</span>
                  <span class="handwritten text-muted-foreground">Memberdayakan melalui pelatihan keterampilan</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">•</span>
                  <span class="handwritten text-muted-foreground">Membangun support system berkelanjutan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="content-block">
          <h3 class="handwritten-title text-xl text-foreground text-center mb-4">
            Nilai-Nilai Kami
          </h3>
          <p class="handwritten text-sm text-muted-foreground text-center mb-8">
            Empat pilar utama yang menjadi fondasi setiap program dan kegiatan kami
          </p>
          
          <div class="sticky-container">
            <div class="sticky">
              <div class="mb-2">
                <span class="text-4xl">♥</span>
              </div>
              <h4 class="mb-2">Kasih Sayang</h4>
              <p class="text-sm leading-tight">Memberikan perhatian dan kasih sayang kepada mereka yang membutuhkan dengan tulus</p>
            </div>

            <div class="sticky">
              <div class="mb-2">
                <span class="text-4xl">👥</span>
              </div>
              <h4 class="mb-2">Kebersamaan</h4>
              <p class="text-sm leading-tight">Membangun komunitas yang saling mendukung dan peduli satu sama lain</p>
            </div>

            <div class="sticky">
              <div class="mb-2">
                <span class="text-4xl">📚</span>
              </div>
              <h4 class="mb-2">Pendidikan</h4>
              <p class="text-sm leading-tight">Memberikan akses pendidikan berkualitas untuk masa depan yang cerah</p>
            </div>

            <div class="sticky">
              <div class="mb-2">
                <span class="text-4xl">🏠</span>
              </div>
              <h4 class="mb-2">Tempat Tinggal</h4>
              <p class="text-sm leading-tight">Membantu menyediakan tempat tinggal yang layak, aman, dan nyaman</p>
            </div>
          </div>
          
          <div class="text-center mt-8">
            <div class="inline-flex items-center justify-center space-x-6 bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 border border-gray-200/50">
              <div class="flex items-center space-x-2 text-muted-foreground">
                <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span class="handwritten-small text-sm">Ditulis dengan kasih</span>
              </div>
              <div class="w-px h-4 bg-gray-300"></div>
              <div class="flex items-center space-x-2 text-muted-foreground">
                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span class="handwritten-small text-sm">Untuk masa depan cerah</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section id="program">
      <div class="notebook-paper">
        <div class="content-block text-center">
          <h2 class="handwritten-title text-3xl text-foreground mb-4">
            Program Kami
          </h2>
          <p class="handwritten text-lg text-muted-foreground">
            Program-program unggulan yang telah membantu ribuan keluarga
          </p>
        </div>

        <div class="content-block">
          <div class="grid-2 gap-8">
            <div class="bg-secondary/50 rounded-lg p-6">
              <div class="icon-wrapper mb-4">
                <span class="text-primary text-xl">🎓</span>
              </div>
              <h3 class="handwritten-title text-xl text-foreground mb-3">
                Program Beasiswa
              </h3>
              <p class="handwritten text-muted-foreground mb-4">
                Memberikan beasiswa pendidikan untuk anak-anak yatim dari SD hingga perguruan tinggi
              </p>
              <ul class="space-y-2">
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">✓</span>
                  <span class="handwritten-small text-sm">Biaya sekolah penuh</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">✓</span>
                  <span class="handwritten-small text-sm">Perlengkapan belajar</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">✓</span>
                  <span class="handwritten-small text-sm">Bimbingan akademik</span>
                </li>
              </ul>
            </div>

            <div class="bg-secondary/50 rounded-lg p-6">
              <div class="icon-wrapper mb-4">
                <span class="text-primary text-xl">🏠</span>
              </div>
              <h3 class="handwritten-title text-xl text-foreground mb-3">
                Rumah Singgah
              </h3>
              <p class="handwritten text-muted-foreground mb-4">
                Tempat tinggal sementara yang aman dan nyaman untuk keluarga tunawisma
              </p>
              <ul class="space-y-2">
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">✓</span>
                  <span class="handwritten-small text-sm">Kamar bersih dan layak</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">✓</span>
                  <span class="handwritten-small text-sm">Makanan 3x sehari</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">✓</span>
                  <span class="handwritten-small text-sm">Bimbingan psikososial</span>
                </li>
              </ul>
            </div>

            <div class="bg-secondary/50 rounded-lg p-6">
              <div class="icon-wrapper mb-4">
                <span class="text-primary text-xl">🍚</span>
              </div>
              <h3 class="handwritten-title text-xl text-foreground mb-3">
                Bantuan Pangan
              </h3>
              <p class="handwritten text-muted-foreground mb-4">
                Distribusi makanan bergizi untuk keluarga yang membutuhkan
              </p>
              <ul class="space-y-2">
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">✓</span>
                  <span class="handwritten-small text-sm">Paket sembako bulanan</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">✓</span>
                  <span class="handwritten-small text-sm">Makanan siap saji</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">✓</span>
                  <span class="handwritten-small text-sm">Program gizi anak</span>
                </li>
              </ul>
            </div>

            <div class="bg-secondary/50 rounded-lg p-6">
              <div class="icon-wrapper mb-4">
                <span class="text-primary text-xl">🛠️</span>
              </div>
              <h3 class="handwritten-title text-xl text-foreground mb-3">
                Pelatihan Keterampilan
              </h3>
              <p class="handwritten text-muted-foreground mb-4">
                Memberikan keterampilan yang dapat dijadikan sumber penghasilan
              </p>
              <ul class="space-y-2">
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">✓</span>
                  <span class="handwritten-small text-sm">Keterampilan teknis</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">✓</span>
                  <span class="handwritten-small text-sm">Wirausaha UMKM</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">✓</span>
                  <span class="handwritten-small text-sm">Pendampingan usaha</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section id="dampak">
      <div class="notebook-paper">
        <div class="content-block text-center">
          <h2 class="handwritten-title text-3xl text-foreground mb-4">
            Dampak Yang Kami Ciptakan
          </h2>
          <p class="handwritten text-lg text-muted-foreground">
            Angka-angka ini mewakili kehidupan nyata yang telah berubah menjadi 
            lebih baik berkat dukungan para donatur dan relawan.
          </p>
        </div>

        <div class="content-block">
          <div class="grid-3 lg:grid-cols-5">
            <div class="text-center">
              <div class="icon-wrapper">
                <span class="text-primary text-xl">👥</span>
              </div>
              <div class="stat-number">500+</div>
              <div class="stat-label">Anak Yatim Terbantu</div>
            </div>

            <div class="text-center">
              <div class="icon-wrapper">
                <span class="text-primary text-xl">🏠</span>
              </div>
              <div class="stat-number">50+</div>
              <div class="stat-label">Keluarga Tunawisma</div>
            </div>

            <div class="text-center">
              <div class="icon-wrapper">
                <span class="text-primary text-xl">📚</span>
              </div>
              <div class="stat-number">300+</div>
              <div class="stat-label">Beasiswa Diberikan</div>
            </div>

            <div class="text-center">
              <div class="icon-wrapper">
                <span class="text-primary text-xl">♥</span>
              </div>
              <div class="stat-number">15,000+</div>
              <div class="stat-label">Makanan Terdistribusi</div>
            </div>

            <div class="text-center">
              <div class="icon-wrapper">
                <span class="text-primary text-xl">📈</span>
              </div>
              <div class="stat-number">85%</div>
              <div class="stat-label">Tingkat Keberhasilan</div>
            </div>
          </div>
        </div>

        <div class="content-block text-center bg-secondary/50 rounded-lg p-8">
          <h3 class="handwritten-title text-xl text-foreground mb-4">
            Mari Bergabung Menciptakan Dampak
          </h3>
          <p class="handwritten text-muted-foreground mb-6">
            Setiap kontribusi Anda dapat mengubah hidup seseorang
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn">Mulai Berdonasi</button>
            <button class="btn btn-secondary">Jadi Relawan</button>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Help Section -->
    <section id="cara-membantu">
      <div class="notebook-paper">
        <div class="content-block text-center">
          <h2 class="handwritten-title text-3xl text-foreground mb-4">
            Cara Membantu
          </h2>
          <p class="handwritten text-lg text-muted-foreground">
            Ada banyak cara untuk bergabung membantu sesama bersama Munaqadh
          </p>
        </div>

        <div class="content-block">
          <div class="grid-3">
            <div class="text-center">
              <div class="icon-wrapper mb-4">
                <span class="text-primary text-xl">💰</span>
              </div>
              <h3 class="handwritten-title text-lg text-foreground mb-3">
                Donasi Rutin
              </h3>
              <p class="handwritten text-muted-foreground mb-4">
                Berikan donasi bulanan untuk mendukung program-program berkelanjutan
              </p>
              <button class="btn">Mulai Donasi</button>
            </div>

            <div class="text-center">
              <div class="icon-wrapper mb-4">
                <span class="text-primary text-xl">🤝</span>
              </div>
              <h3 class="handwritten-title text-lg text-foreground mb-3">
                Jadi Relawan
              </h3>
              <p class="handwritten text-muted-foreground mb-4">
                Sumbangkan waktu dan tenaga untuk kegiatan sosial bersama
              </p>
              <button class="btn btn-secondary">Daftar Relawan</button>
            </div>

            <div class="text-center">
              <div class="icon-wrapper mb-4">
                <span class="text-primary text-xl">📢</span>
              </div>
              <h3 class="handwritten-title text-lg text-foreground mb-3">
                Sebarkan Informasi
              </h3>
              <p class="handwritten text-muted-foreground mb-4">
                Bantu sebarkan informasi tentang program-program Munaqadh
              </p>
              <button class="btn btn-secondary">Bagikan</button>
            </div>
          </div>
        </div>

        <div class="content-block bg-primary/5 rounded-lg p-8">
          <h3 class="handwritten-title text-xl text-foreground text-center mb-6">
            Hubungi Kami
          </h3>
          <div class="grid-2 gap-6">
            <div>
              <h4 class="handwritten-title text-lg text-foreground mb-3">Informasi Kontak</h4>
              <div class="space-y-2">
                <div class="flex items-center space-x-3">
                  <span class="text-primary">📧</span>
                  <span class="handwritten text-muted-foreground">info@munaqadh.org</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-primary">📞</span>
                  <span class="handwritten text-muted-foreground">+62 812-3456-7890</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-primary">📍</span>
                  <span class="handwritten text-muted-foreground">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
            <div>
              <h4 class="handwritten-title text-lg text-foreground mb-3">Rekening Donasi</h4>
              <div class="space-y-2">
                <div class="bg-white/50 rounded p-3">
                  <div class="handwritten-small text-sm text-muted-foreground">Bank BCA</div>
                  <div class="handwritten text-foreground">1234567890</div>
                  <div class="handwritten-small text-sm text-muted-foreground">a.n. Yayasan Munaqadh</div>
                </div>
                <div class="bg-white/50 rounded p-3">
                  <div class="handwritten-small text-sm text-muted-foreground">Bank Mandiri</div>
                  <div class="handwritten text-foreground">0987654321</div>
                  <div class="handwritten-small text-sm text-muted-foreground">a.n. Yayasan Munaqadh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
