// Methodology.js
import React from "react";
import "../styles.css";

export default function Methodology() {
  return (
    <div className="container">
      <h2 className="section-title">Methodology</h2>
      <p className="subtitle">
        The AlphaPortfolio+ framework integrates machine learning, financial
        theory, and LLM-powered optimization to design robust portfolio
        strategies. Inspired by the AlphaPortfolio paper from ICLR 2025, we
        re-implemented and enhanced the model to optimize long-only portfolios
        using evolved strategies driven by LLMs.
      </p>

      <h3 className="section-title">1. Dataset Preparation</h3>
      <p className="subtitle">
        We used 15 years of daily returns for 3,246 US stocks and ETFs. After
        data cleaning (removal of illiquid assets and missing values), a stable
        subset of 500 assets was selected. Log returns were calculated and
        converted into PyTorch tensors for efficient numerical computation.
      </p>

      <h3 className="section-title">2. Strategy Generation via LLMs</h3>
      <p className="subtitle">
        Few-shot prompts were fed to an LLM (like GPT) to generate diverse
        mathematical expressions for asset weighting. These expressions included
        common concepts like inverse volatility, mean-variance optimization,
        softmax normalization, and novel combinations incorporating entropy,
        covariance, and momentum.
      </p>

      <h3 className="section-title">3. Evolutionary Refinement Loop</h3>
      <ul>
        <li>
          <strong>Mutation:</strong> Small modifications in existing strategies
          to explore nearby solutions
        </li>
        <li>
          <strong>Crossover:</strong> Combine top strategies to generate new
          hybrids
        </li>
        <li>
          <strong>Scoring:</strong> Evaluate each strategy using Sharpe,
          Sortino, Calmar ratios on validation folds
        </li>
        <li>
          <strong>Selection:</strong> Keep only top-k strategies for the next
          generation
        </li>
      </ul>

      <h3 className="section-title">4. Final Optimization Algorithm</h3>
      <pre>{`Step 1: Compute risk-adjusted returns with inverse covariance

  r_adj = max(0, (Cov(R_excess) + εI)^(-1) · mean(R_excess, dim=1))

Step 2: Normalize using stability-adjusted softmax

  w = softmax(
        r_adj * (1 + std(r_adj)) / (sqrt(diag(Σ)) + ε + δ)
      )

Step 3: Apply entropy-based regularization and normalize

  w = l1_normalize(
        w * exp(mean(w) * log(w + δ))
      )`}</pre>

      <h3 className="section-title">5. Python Code Implementation</h3>
      <details>
        <summary>Click to view full Python implementation</summary>
        <pre>{`def alpha_portfolio(mean_returns, cov_matrix, epsilon=1e-4, delta=1e-6, tau=0.01,
                     entropy_strength=0.5, boost_factor=0.3):
    # Step 1: Inverse covariance risk-adjusted returns
    inv_cov = np.linalg.inv(cov_matrix + epsilon * np.eye(len(cov_matrix)))
    radj = inv_cov @ mean_returns

    # Step 2: Soft-threshold to ignore noise
    radj = np.sign(radj) * np.maximum(0, np.abs(radj) - tau)

    # Step 3: Stability-adjusted softmax normalization
    def softmax(x):
        e_x = np.exp(x - np.max(x))
        return e_x / np.sum(e_x)

    scaled_radj = radj * (1 + np.std(radj))
    denom = np.sqrt(np.diag(cov_matrix)) + epsilon
    weights = softmax(scaled_radj / denom)

    # Step 4: Boost exposure to high radj assets
    radj_pos = np.maximum(radj, 0)
    if np.sum(radj_pos) > 0:
        radj_dir = radj_pos / np.sum(radj_pos)
        weights = (1 - boost_factor) * weights + boost_factor * radj_dir
    weights = np.clip(weights, 0, 1)
    weights = weights / np.sum(weights)

    # Step 5: Entropy regularization
    entropy_penalty = np.mean(weights) * np.log(weights + delta)
    weights = weights * np.exp(entropy_strength * entropy_penalty)

    # Step 6: Final normalization
    return weights / np.sum(weights)`}</pre>
      </details>

      <h3 className="section-title">6. Tools Used</h3>
      <ul>
        <li>
          <strong>Python, PyTorch:</strong> Numerical modeling
        </li>
        <li>
          <strong>OpenAI GPT API:</strong> Prompt-based strategy generation
        </li>
        <li>
          <strong>Pandas, NumPy:</strong> Data preprocessing
        </li>
        <li>
          <strong>Matplotlib, Seaborn:</strong> Visualization of portfolio
          metrics
        </li>
      </ul>
    </div>
  );
}
