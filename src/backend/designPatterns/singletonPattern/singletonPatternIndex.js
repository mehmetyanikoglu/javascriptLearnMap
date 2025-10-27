// === Akıllı Kod Kopyalayıcı (Strategy + Factory + Singleton Pattern) ===

// 1️ Strategy: dosya alma yöntemi
class FetchStrategy {
  async getContent(filePath) {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error("Dosya alınamadı: " + filePath);
    return await res.text();
  }
}

// 2️ Factory: uygun stratejiyi oluşturur
class StrategyFactory {
  static create(type = "fetch") {
    switch (type) {
      case "fetch":
      default:
        return new FetchStrategy();
    }
  }
}

// 3️ CodeCleaner: gereksiz satırları siler
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

// 4️ CodeManager: yükler, temizler, panoya kopyalar
class CodeManager {
  constructor(strategy) {
    this.strategy = strategy;
  }

  async copyFileToClipboard(filePath) {
    try {
      let content = await this.strategy.getContent(filePath);

      // --- GÜVENLİK KONTROLÜ ---
      // Eğer fetch, dosyayı bulamaz ve sunucu index.html'i geri döndürürse,
      // kopyalamayı engelle ve hata ver.
      if (content.trim().startsWith("<!doctype html>")) {
        throw new Error(`İstenen dosya sunucuda bulunamadı: ${filePath}`);
      }

      const cleaned = CodeCleaner.clean(content);
      await navigator.clipboard.writeText(cleaned);
      alert(`✅ Panoya kopyalandı!`);/*alert(`✅ ${filePath} temizlenip panoya kopyalandı!`); */
    } catch (err) {
      alert(`❌ Kopyalama Hatası: ${err.message}`);
    }
  }
}

// 5️ App (Singleton): olayları yönetir
class App {
  constructor() {
    if (App.instance) return App.instance;
    App.instance = this;

    this.manager = new CodeManager(StrategyFactory.create("fetch"));
    this.initCopyButtons();
  }

  // Bu scriptin çalıştığı sayfadaki TÜM ".copy-btn" class'ına sahip butonları bulur ve dinler.
  initCopyButtons() {
    // DOM'un tamamen yüklendiğinden emin olalım.
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".copy-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const file = btn.dataset.file;
          this.manager.copyFileToClipboard(file);
        });
      });
    });
  }
}

// 6️⃣ Uygulama başlat
const app = new App();
export default app;
