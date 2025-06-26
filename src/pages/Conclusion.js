import React from "react";
import "../styles.css";

export default function Conclusion() {
  return (
    <div className="container">
      <h2 className="section-title">Conclusion</h2>

      <p className="subtitle">
        AlphaPortfolio+ proves that integrating Large Language Models into
        quantitative finance workflows is not only feasible, but extremely
        effective. Through automated generation and refinement, LLMs can
        discover portfolio optimization strategies that adapt to market changes,
        manage risk intelligently, and outperform conventional approaches.
      </p>

      <p className="subtitle">
        The use of entropy-based diversification, inverse covariance scaling,
        and evolutionary refinement resulted in a strategy that demonstrated:
      </p>

      <ul>
        <li>📈 +71% higher Sharpe Ratio than Equal-Weighted</li>
        <li>🔻 -53.77% reduced drawdowns</li>
        <li>📊 Consistent performance across 15 years of historical data</li>
        <li>🧠 Generalizable, interpretable optimization logic</li>
      </ul>

      <p className="subtitle">
        This project paves the way for more intelligent and adaptive portfolio
        design, moving from static heuristics to AI-driven discovery. In future
        work, we aim to:
      </p>

      <ul>
        <li>📡 Incorporate real-time data feeds</li>
        <li>🌱 Introduce multi-objective optimization (returns + ESG)</li>
        <li>🌍 Test on global asset classes and real fund portfolios</li>
      </ul>

      <p className="subtitle">
        <strong>
          AlphaPortfolio+ is a step forward in the future of intelligent
          investing.
        </strong>
      </p>
    </div>
  );
}
