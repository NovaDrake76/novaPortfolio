<template>
  <div class="regra-page">
    <div class="card">
      <h1><i class="fas fa-calculator"></i> Regra de Três</h1>

      <div class="mode-toggle">
        <button
          :class="{ active: mode === 'simple' }"
          @click="mode = 'simple'"
        >
          Simples
        </button>
        <button
          :class="{ active: mode === 'inverse' }"
          @click="mode = 'inverse'"
        >
          Inversa
        </button>
      </div>

      <div class="proportion-layout">
        <div class="row">
          <div class="input-cell">
            <label>A</label>
            <input v-model.number="a" type="number" placeholder="A" />
          </div>
          <span class="separator">está para</span>
          <div class="input-cell">
            <label>B</label>
            <input v-model.number="b" type="number" placeholder="B" />
          </div>
        </div>

        <div class="assim-como">assim como</div>

        <div class="row">
          <div class="input-cell">
            <label>C</label>
            <input v-model.number="c" type="number" placeholder="C" />
          </div>
          <span class="separator">está para</span>
          <div class="result-cell">
            <label>X</label>
            <div class="result-box">{{ result !== null ? result : "?" }}</div>
          </div>
        </div>
      </div>

      <div v-if="result !== null" class="formula">
        <span v-if="mode === 'simple'">X = (B × C) ÷ A = ({{ b }} × {{ c }}) ÷ {{ a }} = {{ result }}</span>
        <span v-else>X = (A × B) ÷ C = ({{ a }} × {{ b }}) ÷ {{ c }} = {{ result }}</span>
      </div>

      <div class="actions">
        <button class="calc-btn" :disabled="!canCalculate" @click="calculate">
          <i class="fas fa-equals"></i> Calcular
        </button>
        <button class="clear-btn" @click="clear">
          <i class="fas fa-eraser"></i> Limpar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegraDeTres",
  data() {
    return {
      mode: "simple",
      a: null,
      b: null,
      c: null,
      result: null,
    };
  },
  computed: {
    canCalculate() {
      return (
        this.a !== null &&
        this.b !== null &&
        this.c !== null &&
        this.a !== "" &&
        this.b !== "" &&
        this.c !== "" &&
        ((this.mode === "simple" && this.a !== 0) ||
          (this.mode === "inverse" && this.c !== 0))
      );
    },
  },
  watch: {
    mode() {
      if (this.canCalculate) {
        this.calculate();
      }
    },
  },
  methods: {
    calculate() {
      if (!this.canCalculate) return;

      if (this.mode === "simple") {
        this.result = Math.round(((this.b * this.c) / this.a) * 100) / 100;
      } else {
        this.result = Math.round(((this.a * this.b) / this.c) * 100) / 100;
      }
    },
    clear() {
      this.a = null;
      this.b = null;
      this.c = null;
      this.result = null;
    },
  },
};
</script>

<style scoped>
.regra-page {
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
  max-width: 480px;
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

.mode-toggle {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.mode-toggle button {
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

.mode-toggle button.active {
  border-color: #62f9d6;
  color: #62f9d6;
}

.proportion-layout {
  margin-bottom: 20px;
}

.row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.separator {
  color: #8892b0;
  font-size: 0.85rem;
  white-space: nowrap;
}

.assim-como {
  text-align: center;
  color: #8892b0;
  font-size: 0.85rem;
  margin: 12px 0;
}

.input-cell {
  flex: 1;
}

.input-cell label,
.result-cell label {
  display: block;
  color: #62f9d6;
  font-size: 0.8rem;
  margin-bottom: 4px;
  font-weight: 600;
}

.input-cell input {
  width: 100%;
  padding: 10px 12px;
  background: #0a192f;
  border: 1px solid #233554;
  border-radius: 8px;
  color: #ccd6f6;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.input-cell input:focus {
  border-color: #62f9d6;
}

.input-cell input::placeholder {
  color: #8892b0;
}

.result-cell {
  flex: 1;
}

.result-box {
  padding: 10px 12px;
  background: #0a192f;
  border: 2px solid #62f9d6;
  border-radius: 8px;
  color: #62f9d6;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  min-height: 20px;
}

.formula {
  background: rgba(98, 249, 214, 0.05);
  border: 1px solid #233554;
  border-radius: 8px;
  padding: 10px 16px;
  color: #8892b0;
  font-size: 0.85rem;
  text-align: center;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  gap: 12px;
}

.calc-btn {
  flex: 2;
  padding: 14px;
  background: transparent;
  border: 1px solid #62f9d6;
  border-radius: 8px;
  color: #62f9d6;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.calc-btn:hover:not(:disabled) {
  background: rgba(98, 249, 214, 0.1);
}

.calc-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.clear-btn {
  flex: 1;
  padding: 14px;
  background: transparent;
  border: 1px solid #233554;
  border-radius: 8px;
  color: #8892b0;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.clear-btn:hover {
  border-color: #8892b0;
  color: #ccd6f6;
}

/* Hide number input spinners */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
