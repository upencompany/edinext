# Edinext — Geliştirme Rehberi

Bu dosya projeye dokunan herkes (insan ya da yapay zekâ) için kuralları ve tarifleri anlatır.
Kod ve kod yorumları İngilizce, site içeriği İtalyanca (varsayılan) + İngilizce.

---

## 1. Temel ilkeler

1. **İçerik ≠ sunum.** Metin, sayı, tarih, link — hiçbiri bileşen içine yazılmaz. Hepsi `content/` altındadır.
   Bileşenler sadece `content/`’ten gelen veriyi çizer. Böylece yarın bir CMS’e (Sanity, Strapi, Payload…) geçmek
   sadece `content/` dosyalarının yerini değiştirmek demektir.
2. **Tek doğruluk kaynağı.** Rotalar `lib/i18n.ts → sections`’da, dil listesi `lib/i18n.ts → locales`’ta,
   şirket bilgileri `content/company.ts`’te, renk/tipografi `styles/globals.css → @theme`’de. Bir değeri iki yere yazma.
3. **Uydurma bilgi yok.** Her iş bilgisi edinext.it’ten ya da Edinext’in resmi belgelerinden gelir. Yeni bir istatistik,
   müşteri, referans, sertifika eklenecekse kaynağı olmalı (yorum satırında belirt).
4. **Server Component varsayılandır.** `"use client"` sadece etkileşim gerektiren küçük parçalarda:
   `SiteHeader`, `EcosystemExplorer`, `ServiceCycle`, `ScrollerControls`, `ContactForm`, `RevealObserver`, `error.tsx`.
   Client bileşene sadece serileştirilebilir veri (string, sayı, dizi) geçilir; fonksiyon geçilmez.
5. **Tip güvenliği = çeviri güvenliği.** Çok dilli her içerik `Localized<T>` ya da `defineLocalized()` ile tanımlıdır.
   Yeni bir dil eklendiğinde TypeScript eksik olan her çeviriyi hata olarak listeler.
6. **Erişilebilirlik pazarlık konusu değildir.** Semantik HTML, tek `h1`, sıralı başlıklar, görünür focus,
   klavye ile kullanım, `prefers-reduced-motion`, alt metinleri (dekoratifse `alt=""`).
7. **Küçük dosyalar, tek sorumluluk.** Bir bileşen ~250 satırı geçiyorsa parçalara böl. Render içinde bileşen tanımlama
   (lint `react-hooks/static-components` yakalar) — yardımcı bileşenleri dosyanın en üst seviyesine koy.

## 2. Klasör yapısı

```text
app/
  [locale]/                 Tüm sayfalar. Klasör adları İTALYANCA segmentlerdir (azienda, soluzioni…)
    layout.tsx              <html>, header, footer, JSON-LD (kök layout)
    template.tsx            Sayfa geçiş animasyonu (React ViewTransition)
    page.tsx                Ana sayfa
    soluzioni/[slug]/       Hem ürün (nol, smart…) hem ambit (clicprevenzione…) sayfaları
    error.tsx, not-found.tsx
  api/contact/route.ts      İletişim formu endpoint’i (güvenlik kontrolleri burada)
  og/route.tsx              Dinamik Open Graph görseli
  sitemap.ts, robots.ts, manifest.ts, global-not-found.tsx
components/
  layout/                   Header, footer, nav verisi, scroll reveal
  ui/                       Temel yapı taşları: Kicker, SectionHead, PageIntro, ButtonLink, ArrowLink, Logo, ProductMark, Icons
  sections/                 Sayfa bölümleri: ContactBand, AreasIndex, NormTimeline, ServiceCycle, NewsList, SolutionDetail…
  ecosystem/                Diyagramlar: RadialDiagram (+geometry), EcosystemExplorer, HubDiagram, SolutionDiagrams, ArchitectureDiagram
content/                    TÜM içerik (it + en)
  types.ts                  İçerik modelleri (Solution, NewsArticle, Project, Family, Actor, Norm…)
  solutions.ts              17 uygulama
  ecosystem.ts              Aktörler, ambitler, mevzuat
  news.ts, projects.ts      Haberler, proje vakaları
  pages.ts                  Sayfa metinleri (home, company, services, compliance, careers, contact, privacy)
  ui.ts                     Arayüz sözlüğü (menü, etiketler, butonlar…) + fill()
  company.ts                Şirket künyesi
  architecture.ts           ReteAVIS mimari şeması
lib/
  i18n.ts                   Diller, rota tablosu, href(), switchLocalePath(), defineLocalized(), toLocale()
  seo.ts                    pageMetadata(): canonical, hreflang, OG, açıklama kısaltma
  structured-data.ts        JSON-LD üreticileri
  fonts.ts, format.ts       Geist fontları, tarih formatı, cx()
styles/globals.css          Tasarım sistemi (token’lar, tipografi, .theme-dark, animasyonlar)
public/brand, media, documents
```

## 3. Tasarım kalıpları (ve neden)

| Kalıp | Nerede | Neden |
| --- | --- | --- |
| **Content modules** (içerik modülleri) | `content/*.ts` | Metin tek yerde, CMS’e hazır, çeviriler tipli |
| **Route table + helper** | `lib/i18n.ts → sections`, `href()` | URL’ler asla elle yazılmaz: `href(locale, "solutions", "nol")` |
| **Composition** (birleştirme) | `PageIntro`, `SectionHead`, `ContactBand` | Sayfalar aynı yapı taşlarından kurulur, tutarlı görünür |
| **Presentational / container ayrımı** | `explorer-data.ts` → `EcosystemExplorer` | Server veriyi hazırlar, client sadece çizer; bundle küçük kalır |
| **Scoped theming** | `.theme-dark` sınıfı | Koyu bölüm için bileşeni kopyalamak yerine token’ları kapsam içinde yeniden tanımlarız |
| **Discriminated unions** | `SolutionDiagram`, `ArticleBlock` | `kind`/`type` alanına göre güvenli render; yeni tür eklemek = union’a bir satır + bir `case` |
| **Progressive enhancement** | reveal animasyonları, form | JS yoksa içerik yine görünür; animasyon sadece `html.js` + hareket izni varsa |

**Kaçınılacaklar:** bileşen içinde sabit metin; `locale === "it" ? … : …` (bunun yerine `ui[locale]…`);
elle yazılmış URL (`"/it/soluzioni/nol"`); inline stil ile renk (`#0076b9` yerine `text-brand`);
gradyan, glassmorphism, parlama efektleri; aşırı yuvarlak kart ızgaraları; stok “gülümseyen insan” fotoğrafı.

## 4. Tasarım sistemi kısa özeti

- **Renkler** (`@theme`): `ink`, `ink-2`, `ink-3` (metin), `paper`, `paper-2`, `card` (zeminler), `line`, `line-strong`,
  `brand` (#0076B9 — logodan), `accent` (#81B736 — logodaki X). Yeşil sadece vurgu/nokta/grafik; metin rengi olarak kullanılmaz.
- **Koyu bölüm:** kapsayıcıya `theme-dark` ver; içerdeki `text-ink`, `bg-paper` vb. otomatik tersine döner.
- **Tipografi yardımcıları:** `t-display`, `t-h1`, `t-h2`, `t-h3`, `t-lede`, `t-label` (mono, büyük harf), `t-meta` (mono küçük).
- **Düzen:** `wrap` (maks. genişlik + kenar boşluğu), `grid-12` (4 → 12 kolon), `section-y` (dikey boşluk).
- **Etkileşim:** butonlar hap şeklinde (`rounded-full`), paneller `rounded-2xl` / `rounded-[1.75rem]`.
- **Hareket:** bir öğeye `data-reveal` ekle → ekrana girince belirir. `style={{ "--reveal-i": i }}` ile sıralı gecikme.

## 5. Tarifler

### 5.1 Yeni sayfa eklemek (ör. “Partner”)

1. `lib/i18n.ts → sections`’a ekle: `partners: { it: "partner", en: "partners" }`.
   (İngilizce rewrite/redirect’ler `next.config.ts` tarafından otomatik üretilir.)
2. Metni `content/pages.ts`’e ekle:
   ```ts
   export const partnersPage = defineLocalized({
     it: { metaTitle: "Partner", metaDescription: "…", eyebrow: "Partner", title: "…", lede: "…" },
     en: { metaTitle: "Partners", metaDescription: "…", eyebrow: "Partners", title: "…", lede: "…" },
   });
   ```
3. `app/[locale]/partner/page.tsx` oluştur (klasör adı = İtalyanca segment). Şablon olarak `app/[locale]/servizi/page.tsx`’i kopyala:
   `generateMetadata` → `pageMetadata({ locale, section: "partners", … })`, gövde → `PageIntro` + bölümler + `ContactBand`.
4. Menüye ekle: `components/layout/nav-data.ts → items`, gerekiyorsa footer (`SiteFooter.tsx → sections`).
5. Site haritasına ekle: `app/sitemap.ts → entries`.
6. Kontrol: `npm run check` (tip + lint), `npm run build`.

### 5.2 Yeni dil eklemek (ör. Almanca `de`)

1. `lib/i18n.ts`:
   - `locales = ["it", "en", "de"]`
   - `sections` içindeki her girişe `de:` segmenti ekle (`company: { …, de: "unternehmen" }`)
   - `localeNames`’e `de: { short: "DE", long: "Deutsch", htmlLang: "de", og: "de_DE", intl: "de-DE" }`
2. `content/ui.ts`: `const de: UI = { … }` yaz ve `ui` nesnesine ekle.
3. `npx tsc --noEmit` çalıştır. **TypeScript eksik her çeviriyi listeler** (ürünler, haberler, projeler, sayfa metinleri,
   aktörler, ambitler, mevzuat, mimari şema, çalışma saatleri, görsel alt metinleri). Listeyi bitir.
4. Başka hiçbir şey gerekmez: rotalar, statik sayfalar, dil değiştirici, hreflang, sitemap, OG `locale` otomatik.

### 5.3 Yeni ürün (uygulama) eklemek

1. Logo varsa `public/brand/products/<slug>.png` (kare, 256px).
2. `content/solutions.ts`’e yeni bir `Solution` nesnesi: `slug`, `name`, `family`, `hasPage`, `actors`, `norms?`,
   `related?`, `logo?` ve `it` / `en` kopyaları (`expansion`, `tagline`, `summary`, `about`, `features`, `roles?`,
   `integrations?`, `diagrams?`, uzun ad için `metaTitle?`).
3. Sayfa, menü, katalog, ekosistem diyagramı, ambit sayfası ve sitemap **otomatik** güncellenir.

### 5.4 Haber / iş ilanı / proje eklemek

- Haber: `content/news.ts` başına yeni nesne (`kind: "press" | "product" | "job"`). `job` ise “Lavora con noi”
  sayfasında ve `JobPosting` yapısal verisinde otomatik görünür.
- Proje: `content/projects.ts` — mutlaka `news` alanında kaynak haber(ler)i göster.

### 5.5 Eski sitede görsel olan bilgiyi eklemek

Görseli olduğu gibi koymak yerine metne çevir ve `SolutionCopy.diagrams`’a ekle:
`hub` (merkez + çevre), `groups` (gruplu liste), `cycle` (döngü). Yeni bir çizim türü gerekirse
`content/types.ts → SolutionDiagram` union’ına ekle ve `components/ecosystem/SolutionDiagrams.tsx`’e bir `case` yaz.

## 6. SEO kuralları

- Her sayfa `generateMetadata` içinde **sadece** `pageMetadata()` kullanır (canonical, hreflang, OG, Twitter hazır gelir).
- Başlık ≤ 60 karakter hedefle; uzunsa ürün/haberde `metaTitle` ver. 52 karakteri geçen başlıklarda “— Edinext” eki otomatik düşer.
- Açıklama 70–160 karakter; `pageMetadata` 158 karakterde kelime sınırından keser.
- Sayfa başına tek `h1`; başlık seviyeleri atlanmaz.
- Yapısal veri `lib/structured-data.ts` ve `JsonLd` bileşeni ile; sayfaya özel şema sayfanın içinde üretilir.
- Eski WordPress URL’leri `next.config.ts → legacyRedirects`’te. URL değiştirirsen eskisini buraya ekle.

## 7. Güvenlik kuralları

- Üçüncü taraf script/stil/font **eklenmez** (CSP bunu engeller: `next.config.ts → contentSecurityPolicy`).
  Gerekirse (ör. analitik) CSP’ye alanı bilinçli olarak ekle ve gizlilik metnini güncelle.
- Kullanıcı girdisi sadece `app/api/contact/route.ts` üzerinden alınır: origin kontrolü, JSON zorunluluğu, boyut sınırı,
  IP başına hız sınırı, honeypot, minimum doldurma süresi, uzunluk sınırları, kontrol karakteri temizliği,
  HMAC imzalı ve zaman aşımlı webhook. Yeni endpoint yazarken aynı kalıbı kullan.
- `dangerouslySetInnerHTML` sadece JSON-LD (`<` kaçışlı) ve `layout.tsx`’teki sabit `js` sınıfı script’i için.
- Gizli bilgiler sadece ortam değişkeninde (`CONTACT_WEBHOOK_URL`, `CONTACT_WEBHOOK_SECRET`); repoya yazılmaz.

## 8. Komutlar

```bash
npm run dev        # geliştirme sunucusu → http://localhost:3000
npm run check      # TypeScript + ESLint
npm run build      # üretim derlemesi (81+ statik sayfa)
npm start          # üretim sunucusu
```

Commit öncesi: `npm run check && npm run build`.

## 9. Ortam değişkenleri

| Değişken | Açıklama |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Kanonik adres (varsayılan `https://edinext.it`). Derleme anında okunur. |
| `CONTACT_WEBHOOK_URL` | İletişim formu mesajlarının POST edileceği adres. Yoksa form e-posta adresine yönlendirir. |
| `CONTACT_WEBHOOK_SECRET` | (İsteğe bağlı) Webhook gövdesinin HMAC-SHA256 imzası için anahtar → `X-Edinext-Signature` başlığı. |
