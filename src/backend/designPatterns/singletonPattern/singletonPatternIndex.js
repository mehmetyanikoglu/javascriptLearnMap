// === Akıllı Kod Kopyalayıcı (Strategy + Factory + Singleton Pattern) ===

// 1️⃣ Strategy: dosya alma yöntemi
class FetchStrategy {
  async getContent(filePath) {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error("Dosya alınamadı: " + filePath);
    return await res.text();
  }
}

// 2️⃣ Factory: uygun stratejiyi oluşturur
class StrategyFactory {
  static create(type = "fetch") {
    switch (type) {
      case "fetch":
      default:
        return new FetchStrategy();
    }
  }
}

// 3️⃣ CodeCleaner: gereksiz satırları siler
class CodeCleaner {
  static clean(content) {
    return content
      // source map satırlarını kaldır
      .replace(/\/\/# sourceMappingURL=.*$/gm, "")
      // tek satırlı yorumlar (// ...)
      .replace(/\/\/.*$/gm, "")
      // çok satırlı yorumlar (/* ... */)
      .replace(/\/\*[\s\S]*?\*\//g, "")
      // console.log satırları
      .replace(/console\.log\(.*?\);?/g, "")
      // fazla boş satırlar
      .replace(/^\s*[\r\n]/gm, "")
      .trim();
  }
}

// 4️⃣ CodeManager: yükler, temizler, panoya kopyalar
class CodeManager {
  constructor(strategy) {
    this.strategy = strategy;
  }

  async copyFileToClipboard(filePath) {
    try {
      let content = await this.strategy.getContent(filePath);
      const cleaned = CodeCleaner.clean(content);
      await navigator.clipboard.writeText(cleaned);
      alert(`✅ ${filePath} temizlenip panoya kopyalandı!`);
    } catch (err) {
      alert(`❌ Hata: ${err.message}`);
    }
  }
}

// 5️⃣ App (Singleton): olayları yönetir
class App {
  constructor() {
    if (App.instance) return App.instance;
    App.instance = this;

    this.manager = new CodeManager(StrategyFactory.create("fetch"));
    this.initEvents();
  }

  initEvents() {
    document.querySelectorAll(".copy-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const file = btn.dataset.file;
        this.manager.copyFileToClipboard(file);
      });
    });
  }
}

// 6️⃣ Uygulama başlat
new App();


//** AL SANA PROJE SCRİPT DOSYALARINDAN KODLARI PANOYA KOPYALAR ÜSTELİK YORUM SATIRLARINIDA TEMİZLER HEMDE HERYERDEN ÇEKİLEBİLİR YAPI KULLANIR. */
