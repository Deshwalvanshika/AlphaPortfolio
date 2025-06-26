import React from "react";
import "../styles.css";

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">AlphaPortfolio+</h1>

      <p className="subtitle">
        <strong>AlphaPortfolio+</strong> is a new, AI-powered framework that
        uses Large Language Models (LLMs) like GPT to automatically discover
        better ways to allocate investments. This approach helps design smarter,
        more adaptive, and risk-aware portfolio strategies by learning from data
        instead of relying on fixed rules. Inspired by the research paper{" "}
        <em>
          "AlphaPortfolio: Discovery of Portfolio Optimization and Allocation
          Methods Using LLMs"
        </em>{" "}
        presented at ICLR 2025, this project leverages the power of Large
        Language Models (LLMs) to generate, refine, and validate robust
        portfolio allocation strategies.
      </p>

      <p className="subtitle">
        Traditional approaches like Equal-Weighted, Risk Parity, and
        Mean-Variance Optimization rely on rigid rules and are limited by their
        assumptions. In contrast, AlphaPortfolio+ uses LLMs (like GPT) in an
        evolutionary learning loop to discover adaptive strategies that
        outperform conventional methods on risk-adjusted performance metrics
        such as Sharpe, Sortino, and Calmar ratios.
      </p>

      <p className="subtitle">
        The framework is designed to be interpretable, adaptive to changing
        market regimes, and capable of balancing return, risk, and
        diversification dynamically. By applying modern deep learning tools to
        quantitative finance, AlphaPortfolio+ represents a forward-thinking
        approach to intelligent investment strategies.
      </p>

      <p className="subtitle">
        <strong>By:</strong> Vanshika
      </p>
    </div>
  );
}
