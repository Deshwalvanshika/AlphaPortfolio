// Results.js
import React from "react";
import "../styles.css";

export default function Results() {
  return (
    <div className="container">
      <h2 className="section-title">Results</h2>

      <p className="subtitle">
        To evaluate the effectiveness of AlphaPortfolio+, we compared it against
        baseline strategies: Equal-Weighted (EW), Risk Parity (RP), and Equal
        Risk Contribution (ERC). Metrics considered include:
      </p>

      <ul>
        <li>
          <strong>Sharpe Ratio:</strong> Return per unit of total risk
        </li>
        <li>
          <strong>Sortino Ratio:</strong> Return per unit of downside risk
        </li>
        <li>
          <strong>Calmar Ratio:</strong> Return vs maximum drawdown
        </li>
        <li>
          <strong>Maximum Drawdown:</strong> Largest historical portfolio loss
          from peak
        </li>
      </ul>

      <h3 className="section-title">Performance Metrics Table</h3>
      <table className="metrics-table">
        <thead>
          <tr>
            <th>Strategy</th>
            <th>Sharpe</th>
            <th>Sortino</th>
            <th>Calmar</th>
            <th>Max Drawdown</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>AlphaPortfolio+</strong>
            </td>
            <td>
              <strong>0.061</strong>
            </td>
            <td>
              <strong>0.056</strong>
            </td>
            <td>
              <strong>0.002</strong>
            </td>
            <td>
              <strong>-13.32%</strong>
            </td>
          </tr>
          <tr>
            <td>Equal-Weighted</td>
            <td>0.020</td>
            <td>0.018</td>
            <td>0.001</td>
            <td>-45.01%</td>
          </tr>
          <tr>
            <td>Risk Parity</td>
            <td>0.029</td>
            <td>0.027</td>
            <td>0.001</td>
            <td>-36.29%</td>
          </tr>
          <tr>
            <td>Equal Risk Contribution</td>
            <td>0.020</td>
            <td>0.018</td>
            <td>0.001</td>
            <td>-45.01%</td>
          </tr>
        </tbody>
      </table>

      <p className="subtitle">
        <strong>Interpretation:</strong>
        <br />• <strong>Sharpe Ratio:</strong> Measures return per unit of total
        risk. Higher is better.
        <br />• <strong>Sortino Ratio:</strong> Focuses on downside risk. Higher
        is better.
        <br />• <strong>Calmar Ratio:</strong> Compares return vs. max drawdown.
        Higher is better.
        <br />• <strong>Max Drawdown:</strong> Largest observed loss from peak.
        Lower is better.
      </p>

      <h3 className="section-title" style={{ marginTop: "2rem" }}>
        Risk-Adjusted Metrics and Maximum Drawdown Graph
      </h3>

      <img
        src="/result.png"
        alt="Risk Adjusted Metrics And Maximum Drawdown"
        className="graph"
      />

      <p className="subtitle">
        AlphaPortfolio+ demonstrates significantly higher Sharpe and Sortino
        ratios while maintaining lower drawdowns compared to other strategies.
        It achieves superior stability and downside protection due to entropy
        regularization and inverse risk scaling.
      </p>

      <p className="subtitle">
        Notably, AlphaPortfolio+'s drawdown is less than 0.15, while
        Equal-Weighted exceeds 0.45 — showing greater resilience in volatile
        conditions.
      </p>
    </div>
  );
}
