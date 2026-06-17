"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const chars = text.length;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;
  const readingTime = (words / 200).toFixed(2);

  const StatCard = ({ label, value }) => (
    <div style={{
      flex: 1,
      padding: "15px",
      borderRadius: "12px",
      background: "#22c55e",
      textAlign: "center"
    }}>
      <h3 style={{ margin: 0 }}>{value}</h3>
      <p style={{ margin: 0, fontSize: "12px", color: "white" }}>{label}</p>
    </div>
  );

  return (
    <main style={{
      fontFamily: "Arial",
      background: "#0f172a",
      minHeight: "100vh",
      padding: "40px",
      color: "white"
    }}>

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          Text Analyzer Tool
        </h1>
        <p style={{ color: "#94a3b8" }}>
          Analyze words, characters, sentences & reading time instantly
        </p>
      </div>

      {/* BUTTON */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <a
          href="https://digitalheroesco.com"
          target="_blank"
          style={{
            background: "#22c55e",
            padding: "10px 18px",
            borderRadius: "8px",
            color: "black",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Built for Digital Heroes
        </a>
      </div>

      {/* TEXT AREA */}
      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your content here..."
          style={{
            width: "100%",
            height: "220px",
            borderRadius: "12px",
            padding: "15px",
            fontSize: "16px",
            outline: "none",
            border: "none"
          }}
        />

        {/* STATS */}
        <div style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
          flexWrap: "wrap"
        }}>
          <StatCard label="Words" value={words} />
          <StatCard label="Characters" value={chars} />
          <StatCard label="Sentences" value={sentences} />
          <StatCard label="Reading Time (min)" value={readingTime} />
        </div>

        {/* FOOTER */}
        <div style={{
          marginTop: "40px",
          textAlign: "center",
          color: "#94a3b8",
          fontSize: "14px"
        }}>
          <p><b>Yuvika</b> | cyuvika910@gmail.com</p>
        </div>
      </div>
    </main>
  );
}