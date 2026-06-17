"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const readingTime = (wordCount / 200).toFixed(2);

  return (
    <main style={{
      padding: "30px",
      fontFamily: "Arial",
      maxWidth: "800px",
      margin: "auto"
    }}>

      <h1>Text Analyzer Tool</h1>

      {/* REQUIRED BUTTON */}
      <div style={{ marginTop: "10px" }}>
        <a
          href="https://digitalheroesco.com"
          target="_blank"
          style={{
            display: "inline-block",
            padding: "10px 15px",
            background: "black",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            marginTop: "10px"
          }}
        >
          Built for Digital Heroes
        </a>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        style={{
          width: "100%",
          height: "200px",
          marginTop: "20px",
          padding: "10px",
          fontSize: "16px"
        }}
      />

      <div style={{ marginTop: "20px" }}>
        <p><b>Words:</b> {wordCount}</p>
        <p><b>Characters:</b> {charCount}</p>
        <p><b>Sentences:</b> {sentenceCount}</p>
        <p><b>Reading Time:</b> {readingTime} min</p>
      </div>

      {/* REQUIRED USER DETAILS */}
      <footer style={{ marginTop: "40px", fontSize: "14px", color: "gray" }}>
        <p><b>Name:</b> Yuvika</p>
        <p><b>Email:</b> cyuvika910@gmail.com</p>
      </footer>

    </main>
  );
}