<script>
// Dummy data untuk dashboard donasi
let totalDonasi = 0;
let totalDonatur = 0;
let programSelesai = 0;
let adminPhone = '0821-3850-5307';
let aktifPrograms = [
  {
    title: 'Berbagi Makanan Jumat Berkah',
    status: 'Aktif',
    desc: 'Program berbagi makanan setiap hari Jumat untuk masyarakat sekitar yang membutuhkan. Target untuk membeli beras, lauk pauk, dan sayuran segar.',
    target: 1000000,
    terkumpul: 0,
    donatur: 0,
    mulai: 'Jumat, 20 Desember 2024',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  }
];
</script>

<style>
.dashboard-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
}
.stats {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.stat-card {
  flex: 1 1 180px;
  background: #f6f8fa;
  border-radius: 0.75rem;
  padding: 1.2rem 1rem;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.stat-label {
  color: #888;
  font-size: 0.95rem;
}
.stat-value {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0.2rem;
  color: #333;
}
.recent-items {
  margin-top: 2rem;
}
.recent-items h2 {
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
}
.items-table {
  width: 100%;
  border-collapse: collapse;
  background: #fafbfc;
  border-radius: 0.5rem;
  overflow: hidden;
}
.items-table th, .items-table td {
  padding: 0.8rem 1rem;
  text-align: left;
}
.items-table th {
  background: #f0f1f3;
  color: #444;
}
.items-table tr:not(:last-child) {
  border-bottom: 1px solid #ececec;
}
.status-New {
  color: #2176ff;
  font-weight: bold;
}
.status-In\ Progress {
  color: #fbbf24;
  font-weight: bold;
}
.status-Completed {
  color: #22c55e;
  font-weight: bold;
}
</style>

<div class="donasi-dashboard">
  <button class="back-btn">← Kembali ke Beranda</button>
  <h1 class="title">Laporan Donasi</h1>
  <div class="subtitle">Transparansi penuh program donasi Yayasan Nurul Ashri</div>
  <div class="info-box">
    <b>Catatan MVP:</b> <br>
    Laporan penyaluran dikirim langsung ke WhatsApp pribadi donatur oleh admin. Halaman ini menampilkan progress umum semua program donasi untuk transparansi publik.
  </div>
  <div class="stat-row">
    <div class="stat-card">
      <div class="stat-icon"><span>💚</span></div>
      <div class="stat-label">Total Donasi Terkumpul</div>
      <div class="stat-value">Rp {totalDonasi.toLocaleString('id-ID')}</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon"><span>👤</span></div>
      <div class="stat-label">Total Donatur</div>
      <div class="stat-value">{totalDonatur}</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon"><span>📅</span></div>
      <div class="stat-label">Program Selesai</div>
      <div class="stat-value">{programSelesai}</div>
    </div>
  </div>

  <div class="report-box">
    <div class="report-info">
      <div class="report-title">Sistem Pelaporan MVP (WhatsApp Manual)</div>
      <ul>
        <li>Konfirmasi donasi dikirim via WhatsApp setelah verifikasi</li>
        <li>Laporan penyaluran dengan foto dan narasi dikirim setelah program selesai</li>
        <li>Update progress program secara berkala</li>
        <li>Komunikasi langsung dengan admin jika ada pertanyaan</li>
      </ul>
    </div>
    <div class="admin-contact">
      <div class="contact-title">Kontak Admin</div>
      <div class="contact-phone">{adminPhone} <button class="copy-btn" on:click={() => navigator.clipboard.writeText(adminPhone)}>📋</button></div>
      <div class="contact-caption">Hubungi admin untuk pertanyaan atau permintaan laporan khusus</div>
    </div>
  </div>

  <div class="program-section">
    <div class="program-title">Program Aktif</div>
    <div class="program-desc">Program yang sedang berjalan dan menerima donasi</div>
    {#each aktifPrograms as prog}
      <div class="program-card">
        <img class="program-img" src={prog.img} alt="{prog.title}" />
        <div class="program-detail">
          <div class="program-header">
            <span class="program-name">{prog.title}</span>
            <span class="program-status program-status-{prog.status.toLowerCase()}">{prog.status}</span>
          </div>
          <div class="program-desc">{prog.desc}</div>
          <div class="program-stats">
            <div><b>Target</b><br>Rp {prog.target.toLocaleString('id-ID')}</div>
            <div><b>Terkumpul</b><br>Rp {prog.terkumpul.toLocaleString('id-ID')}</div>
            <div><b>Donatur</b><br>{prog.donatur}</div>
            <div><b>Mulai</b><br>{prog.mulai}</div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
