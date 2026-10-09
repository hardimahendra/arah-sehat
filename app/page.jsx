"use client";
import { useState } from "react";
import Image from "next/image";
const packages = [
  {
    code: "01",
    name: "Mulai terukur",
    for: "Pemeriksaan rutin dasar",
    time: "± 90 menit",
    items: [
      "Konsultasi dokter umum",
      "Tanda vital dan BMI",
      "Darah rutin & gula darah",
    ],
  },
  {
    code: "02",
    name: "Kerja yang sehat",
    for: "Untuk ritme kerja aktif",
    time: "± 150 menit",
    items: ["Paket Mulai terukur", "Profil lemak", "EKG istirahat"],
  },
  {
    code: "03",
    name: "Tinjau menyeluruh",
    for: "Pemeriksaan sesuai kebutuhan",
    time: "± 240 menit",
    items: [
      "Paket Kerja yang sehat",
      "Fungsi hati & ginjal",
      "Konsultasi hasil terjadwal",
    ],
  },
];
export default function Page() {
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);
  return (
    <main>
      <header>
        <a className="brand" href="#awal">
          <span>+</span>
          <b>
            arah
            <br />
            sehat
          </b>
        </a>
        <nav>
          <a href="#paket">Paket</a>
          <a href="#alur">Persiapan</a>
          <button onClick={() => setSelected(packages[0])}>
            Buat permintaan
          </button>
        </nav>
      </header>
      <section className="hero" id="awal">
        <div className="campaign-photo" aria-hidden="true">
          <Image
            src="/images/clinic-campaign.png"
            alt=""
            fill
            priority
            sizes="(max-width:720px) 100vw, 55vw"
          />
        </div>
        <div className="hero-copy">
          <p>PUSAT PEMERIKSAAN KESEHATAN</p>
          <h1>
            Kenali kondisi
            <br />
            <i>dengan tenang.</i>
          </h1>
          <span>
            Pemeriksaan terencana dengan penjelasan yang bisa Anda bawa pulang.
          </span>
          <button onClick={() => setSelected(packages[0])}>
            Pilih paket pemeriksaan <b>→</b>
          </button>
        </div>
        <div className="care-card">
          <p>HARI INI</p>
          <strong>
            Mulai dari
            <br />
            <em>pertanyaan yang tepat.</em>
          </strong>
          <div>
            <span>Privasi</span>
            <span>Waktu terarah</span>
            <span>Penjelasan hasil</span>
          </div>
        </div>
        <aside>
          <b>08.00 — 16.00</b>
          <span>
            Senin—Sabtu
            <br />
            berdasarkan slot
          </span>
        </aside>
      </section>
      <section className="care-moments" aria-labelledby="care-moments-title">
        <div className="care-moments-head">
          <p>RUANG YANG MEMPERHATIKAN</p>
          <h2 id="care-moments-title">
            Dari kedatangan hingga percakapan hasil.
          </h2>
        </div>
        <div className="care-moments-grid">
          <figure className="care-moments-main">
            <div>
              <Image
                src="/images/clinic-campaign.png"
                alt="Ruang konsultasi klinik yang tenang"
                fill
                sizes="(max-width:720px) 100vw, 60vw"
              />
            </div>
            <figcaption>
              <b>01 · PRIVASI</b>
              <span>
                Ruang yang memberi jarak dari keramaian dan waktu untuk
                bertanya.
              </span>
            </figcaption>
          </figure>
          <figure>
            <div>
              <Image
                src="/images/clinic-reception.png"
                alt="Penerimaan pengunjung di klinik"
                fill
                sizes="(max-width:720px) 100vw, 35vw"
              />
            </div>
            <figcaption>
              <b>02 · KEDATANGAN</b>
              <span>
                Mulai dengan informasi yang jelas dan sambutan yang tenang.
              </span>
            </figcaption>
          </figure>
          <figure>
            <div>
              <Image
                src="/images/clinic-consultation.png"
                alt="Konsultasi umum antara tenaga kesehatan dan pengunjung"
                fill
                sizes="(max-width:720px) 100vw, 35vw"
              />
            </div>
            <figcaption>
              <b>03 · PEMAHAMAN</b>
              <span>
                Hasil perlu dibahas dalam konteks yang tepat bersama tenaga
                kesehatan.
              </span>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="assurance">
        <p>SEBELUM MEMULAI</p>
        <div>
          <h2>
            Pemeriksaan bukan vonis.
            <br />
            <i>Ia adalah titik awal untuk memahami.</i>
          </h2>
          <span>
            Hasil perlu dibaca bersama tenaga kesehatan. Situs ini membantu
            memilih jalur pemeriksaan, bukan mendiagnosis kondisi atau
            menggantikan konsultasi medis.
          </span>
        </div>
      </section>
      <section id="paket" className="packages">
        <div className="package-head">
          <p>PILIH JALUR</p>
          <span>SEMUA DETAIL DI BAWAH INI ADALAH CONTOH LAYANAN</span>
        </div>
        {packages.map((item) => (
          <article key={item.code}>
            <b>{item.code}</b>
            <div>
              <p>{item.for}</p>
              <h3>{item.name}</h3>
              <span>{item.time}</span>
            </div>
            <ul>
              {item.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <button
              onClick={() => {
                setDone(false);
                setSelected(item);
              }}
            >
              Lihat & pilih →
            </button>
          </article>
        ))}
      </section>
      <section className="flow" id="alur">
        <p>APA YANG PERLU DISIAPKAN</p>
        <div>
          <article>
            <b>1</b>
            <h3>Pilih waktu</h3>
            <span>
              Ajukan slot yang nyaman. Tim akan mengonfirmasi ketersediaan.
            </span>
          </article>
          <article>
            <b>2</b>
            <h3>Ikuti arahan</h3>
            <span>
              Persiapan puasa atau dokumen dapat berbeda menurut paket yang
              dikonfirmasi.
            </span>
          </article>
          <article>
            <b>3</b>
            <h3>Bahas hasil</h3>
            <span>
              Jadwalkan konsultasi untuk memahami hasil dalam konteks yang
              tepat.
            </span>
          </article>
        </div>
      </section>
      <footer>
        <div>
          <b>arah sehat</b>
          <span>Informasi layanan · bukan layanan darurat</span>
        </div>
        <button onClick={() => setSelected(packages[0])}>
          Mulai dengan pertanyaan →
        </button>
      </footer>
      {selected && (
        <div
          className="layer"
          role="presentation"
          onClick={() => setSelected(null)}
        >
          <section
            className="dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="request-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              aria-label="Tutup"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            {done ? (
              <>
                <p>PERMINTAAN DITERIMA</p>
                <h2 id="request-title">Belum ada janji yang dibuat.</h2>
                <span>
                  Ini hanya demonstrasi. Petugas akan perlu mengonfirmasi
                  ketersediaan, persiapan, dan kesesuaian layanan sebelum
                  pemeriksaan dijadwalkan.
                </span>
                <button onClick={() => setSelected(null)}>Kembali</button>
              </>
            ) : (
              <>
                <p>PERMINTAAN CHECKUP</p>
                <h2 id="request-title">{selected.name}</h2>
                <form
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!e.currentTarget.reportValidity()) return;
                    setDone(true);
                  }}
                >
                  <label>
                    Nama
                    <input
                      required
                      autoComplete="name"
                      placeholder="Nama lengkap"
                    />
                  </label>
                  <label>
                    Nomor yang dapat dihubungi
                    <input
                      type="tel"
                      required
                      minLength={9}
                      autoComplete="tel"
                      placeholder="08xx xxxx xxxx"
                    />
                  </label>
                  <label>
                    Waktu pilihan
                    <select defaultValue="" required>
                      <option value="" disabled>
                        Pilih waktu
                      </option>
                      <option>Senin—Jumat pagi</option>
                      <option>Senin—Jumat siang</option>
                      <option>Sabtu</option>
                    </select>
                  </label>
                  <label className="consent">
                    <input type="checkbox" required />
                    Saya memahami bahwa formulir ini bukan layanan darurat dan
                    tidak menggantikan konsultasi medis.
                  </label>
                  <button type="submit">Kirim permintaan demo →</button>
                </form>
                <small>
                  Demo front-end: data tidak dikirim atau disimpan. Bila terjadi
                  kondisi darurat, hubungi layanan darurat setempat.
                </small>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
