# AlphaPortfolio+

> **LLM-Driven Discovery of Smarter Portfolio Optimization Strategies**

AlphaPortfolio+ is an AI-powered framework that leverages Large Language Models (LLMs) like GPT to **discover, evaluate, and evolve** portfolio optimization strategies. Inspired by the [ICLR 2025 paper](file:///C:/Users/vansh/OneDrive/Desktop/AlphaPortfolio+/ssrn-5118317.pdf) titled *"AlphaPortfolio: Discovery of Portfolio Optimization and Allocation Methods Using LLMs"*, this project adapts and implements the core ideas in Python using PyTorch and financial datasets.

---

### 🌐 Live Website  
📈 Explore the visual version:  
🔗 [https://alpha-portfolio12.netlify.app](https://alpha-portfolio12.netlify.app)

> The interactive frontend (built in React) presents the methodology, performance metrics, and insights in a clean, portfolio-style web format.

---

## 🚀 Project Highlights

- **LLM-Driven Optimization**: Uses GPT-based LLMs to generate and evolve portfolio allocation strategies.
- **Entropy Regularization**: Ensures better diversification by penalizing over-concentration.
- **Volatility Normalization**: Encourages risk-aware asset allocations.
- **Outperformance**: Demonstrates significantly improved Sharpe, Sortino, and Calmar ratios with reduced drawdowns.

---

## 📈 Performance Summary

| Strategy              | Sharpe | Sortino | Calmar | Max Drawdown |
|-----------------------|--------|---------|--------|---------------|
| AlphaPortfolio+       | 0.061  | 0.056   | 0.002  | -13.32%       |
| Equal-Weighted (EW)   | 0.020  | 0.018   | 0.001  | -45.01%       |
| Risk Parity (RP)      | 0.029  | 0.027   | 0.001  | -36.29%       |
| Equal Risk Contribution (ERC) | 0.020  | 0.018   | 0.001  | -45.01%       |

> 📊 AlphaPortfolio+ outperforms across all metrics with up to **70% drawdown reduction** and triple the Sharpe Ratio of traditional strategies.

---

## 🧠 Methodology

1. **Data Preprocessing**
   - 15 years of US stock and ETF data (log returns)
   - Data cleaned, scaled, and converted to PyTorch tensors

2. **LLM-Inspired Strategy Discovery**
   - Inverse covariance risk-adjusted returns
   - Stability-based softmax normalization
   - Entropy-based regularization for diversified weights

3. **Custom Loss Function**
   - Combines return, drawdown, entropy, and volatility penalties

4. **Evaluation Framework**
   - Time-series cross-validation
   - Performance based on Sharpe, Sortino, Calmar, Max Drawdown

---

## 📊 Visuals

- 📉 Risk-adjusted performance bar charts
- 🔻 Drawdown comparisons
- 📈 Cumulative return growth over time

> All visuals are also embedded in the [Live Website](https://alpha-portfolio12.netlify.app)

---

## 📁 Project Structure

```
AlphaPortfolio/
├── notebooks/              # Jupyter notebooks (LLM logic + backtest)
├── portfolio/              # React frontend for website
├── assets/                 # Images and result graphs
├── report.pdf              # Final detailed report
├── ssrn-5118317.pdf        # Original research paper
├── requirements.txt
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔬 For Notebook Users

```bash
pip install -r requirements.txt
```

**Key Dependencies**:
- pandas
- numpy
- matplotlib
- seaborn
- torch
- scikit-learn

---

### 🌐 For Website Developers

```bash
cd portfolio
npm install
npm start
```

To build for deployment:
```bash
npm run build
```

Deployed via: [Netlify](https://www.netlify.com)

---

## 📌 Conclusion

AlphaPortfolio+ demonstrates how LLMs can be powerful co-pilots in financial modeling — discovering, evolving, and improving portfolio optimization strategies beyond rigid human heuristics. It blends deep learning, evolutionary scoring, and modern finance into one interpretable and high-performing solution.

> by Vanshika 
> 
