<template>
  <div class="yt-page">
    <div class="card">
      <h1><i class="fab fa-youtube"></i> YT Downloader</h1>

      <div class="input-group">
        <input
          v-model="url"
          type="text"
          placeholder="Cole a URL do YouTube aqui..."
          @keyup.enter="download"
        />
      </div>

      <div class="format-toggle">
        <button
          :class="{ active: format === 'audio' }"
          @click="format = 'audio'"
        >
          <i class="fas fa-music"></i> MP3
        </button>
        <button
          :class="{ active: format === 'video' }"
          @click="format = 'video'"
        >
          <i class="fas fa-video"></i> MP4
        </button>
      </div>

      <div v-if="format === 'video'" class="quality-selector">
        <label>Qualidade:</label>
        <div class="quality-options">
          <button
            v-for="q in qualities"
            :key="q"
            :class="{ active: quality === q }"
            @click="quality = q"
          >
            {{ q }}
          </button>
        </div>
      </div>

      <button class="download-btn" :disabled="loading || !url" @click="download">
        <span v-if="loading" class="spinner"></span>
        <span v-else><i class="fas fa-download"></i> Download</span>
      </button>

      <div v-if="error" class="message error">
        <i class="fas fa-exclamation-circle"></i> {{ error }}
      </div>

      <div v-if="downloadUrl" class="message success">
        <a :href="downloadUrl" target="_blank" rel="noopener">
          <i class="fas fa-check-circle"></i> Clique aqui para baixar
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YtDownloader",
  data() {
    return {
      url: "",
      format: "video",
      quality: "1080p",
      qualities: ["360p", "480p", "720p", "1080p"],
      loading: false,
      error: "",
      downloadUrl: "",
    };
  },
  methods: {
    async download() {
      if (!this.url) return;

      this.loading = true;
      this.error = "";
      this.downloadUrl = "";

      const qualityMap = {
        "360p": "360",
        "480p": "480",
        "720p": "720",
        "1080p": "1080",
      };

      const body = {
        url: this.url,
        downloadMode: this.format === "audio" ? "audio" : "auto",
      };

      if (this.format === "video") {
        body.videoQuality = qualityMap[this.quality];
      }

      try {
        const res = await fetch("https://api.cobalt.tools", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        const data = await res.json();

        if (data.url) {
          this.downloadUrl = data.url;
        } else if (data.error) {
          this.error = data.error;
        } else {
          this.error = "Resposta inesperada do servidor.";
        }
      } catch (err) {
        this.error = "Falha na conexão com o servidor. Tente novamente.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.yt-page {
  min-height: 100vh;
  background: #0a192f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
}

.card {
  background: #112240;
  border-radius: 12px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
}

h1 {
  color: #ccd6f6;
  font-size: 1.8rem;
  margin: 0 0 24px;
  text-align: center;
}

h1 i {
  color: #62f9d6;
}

.input-group input {
  width: 100%;
  padding: 12px 16px;
  background: #0a192f;
  border: 1px solid #233554;
  border-radius: 8px;
  color: #ccd6f6;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.input-group input:focus {
  border-color: #62f9d6;
}

.input-group input::placeholder {
  color: #8892b0;
}

.format-toggle {
  display: flex;
  gap: 12px;
  margin: 20px 0;
}

.format-toggle button {
  flex: 1;
  padding: 10px;
  background: #0a192f;
  border: 1px solid #233554;
  border-radius: 8px;
  color: #8892b0;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
}

.format-toggle button.active {
  border-color: #62f9d6;
  color: #62f9d6;
}

.quality-selector {
  margin-bottom: 20px;
}

.quality-selector label {
  color: #8892b0;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 8px;
}

.quality-options {
  display: flex;
  gap: 8px;
}

.quality-options button {
  flex: 1;
  padding: 8px;
  background: #0a192f;
  border: 1px solid #233554;
  border-radius: 6px;
  color: #8892b0;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

.quality-options button.active {
  border-color: #62f9d6;
  color: #62f9d6;
}

.download-btn {
  width: 100%;
  padding: 14px;
  background: transparent;
  border: 1px solid #62f9d6;
  border-radius: 8px;
  color: #62f9d6;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 8px;
}

.download-btn:hover:not(:disabled) {
  background: rgba(98, 249, 214, 0.1);
}

.download-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(98, 249, 214, 0.3);
  border-top-color: #62f9d6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.message {
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
}

.message.error {
  background: rgba(255, 85, 85, 0.1);
  border: 1px solid #ff5555;
  color: #ff5555;
}

.message.success {
  background: rgba(98, 249, 214, 0.1);
  border: 1px solid #62f9d6;
}

.message.success a {
  color: #62f9d6;
  text-decoration: none;
}

.message.success a:hover {
  text-decoration: underline;
}
</style>
