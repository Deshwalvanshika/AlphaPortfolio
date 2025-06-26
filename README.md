# AlphaPortfolio+

> **LLM-Driven Discovery of Smarter Portfolio Optimization Strategies**

AlphaPortfolio+ is an AI-powered framework that leverages Large Language Models (LLMs) like GPT to **discover, evaluate, and evolve** portfolio optimization strategies. Inspired by the [ICLR 2025 paper](file:///C:/Users/vansh/OneDrive/Desktop/AlphaPortfolio+/ssrn-5118317.pdf) titled *"AlphaPortfolio: Discovery of Portfolio Optimization and Allocation Methods Using LLMs"*, this project adapts and implements the core ideas in Python using PyTorch and financial datasets.

---

### 🌐 Live Site  
📈 [alpha-portfolio12.netlify.app](https://alpha-portfolio12.netlify.app)

> 👉 Visit the site to explore project methodology, results, visualizations, and conclusion in a React-powered interactive format.

---

## 🚀 Project Highlights

- **LLM-Driven Optimization**: Uses GPT-based LLMs to auto-generate and refine portfolio allocation functions.
- **Entropy Regularization**: Ensures diversification by penalizing over-concentration.
- **Volatility Normalization**: Promotes risk-aware asset weights.
- **Outperformance**: Significantly outperforms traditional strategies across Sharpe, Sortino, Calmar ratios, and Max Drawdown.

---

## 📈 Performance Summary

| Strategy              | Sharpe | Sortino | Calmar | Max Drawdown |
|-----------------------|--------|---------|--------|---------------|
| AlphaPortfolio+       | 0.061  | 0.056   | 0.002  | -13.32%       |
| Equal-Weighted (EW)   | 0.020  | 0.018   | 0.001  | -45.01%       |
| Risk Parity (RP)      | 0.029  | 0.027   | 0.001  | -36.29%       |
| Equal Risk Contribution (ERC) | 0.020  | 0.018   | 0.001  | -45.01%       |

> 🔥 AlphaPortfolio+ shows the best results across all metrics with up to **70% drawdown reduction**.

---

## 🧠 Methodology

1. **Data Preprocessing**:
   - 15 years of US stock and ETF data (log returns)
   - Cleaned, filtered, and converted to PyTorch tensors

2. **Strategy Generation (LLM-Inspired)**:
   - Inverse covariance risk-adjusted returns
   - Softmax normalization with stability boosting
   - Entropy-based regularization to enforce diversification

3. **Custom Loss Function**:
   Combines:
   - Risk-return score
   - Drawdown penalty
   - Entropy penalty
   - Volatility penalty

4. **Evaluation**:
   - Time-series cross-validation
   - Metrics: Sharpe, Sortino, Calmar, Max Drawdown

---

## 📊 Visuals

- **Bar Plots** for performance metrics
- **Drawdown Comparison** chart
- **Cumulative Returns** line plot showing $1 investment growth

> 🖼️ These plots visually confirm AlphaPortfolio+'s superior stability and profitability.

---

## 📁 Project Structure

