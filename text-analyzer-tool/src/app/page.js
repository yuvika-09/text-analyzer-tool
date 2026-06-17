"use client";

import { useMemo, useState } from "react";
import {
  Moon,
  Sun,
  Search,
  Copy,
  Download,
  Trash2,
  FileText,
  Type,
  AlignLeft,
  BookOpen,
  Mic,
  Target,
} from "lucide-react";

export default function Home() {
  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const wordCount =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  const charCount = text.length;

  const sentenceCount = text
    .split(/[.!?]+/)
    .filter((s) => s.trim())
    .length;

  const readingTime = (
    wordCount / 200
  ).toFixed(1);

  const speakingTime = (
    wordCount / 130
  ).toFixed(1);

  const searchMatches = useMemo(() => {
    if (!searchTerm.trim()) return 0;

    const escaped = searchTerm.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );

    return (
      text.match(
        new RegExp(escaped, "gi")
      ) || []
    ).length;
  }, [text, searchTerm]);

  const copyText = async () => {
    if (!text.trim()) return;

    await navigator.clipboard.writeText(text);
    alert("Copied successfully!");
  };

  const clearText = () => {
    setText("");
    setSearchTerm("");
  };

  const downloadText = () => {
    if (!text.trim()) return;

    const blob = new Blob([text], {
      type: "text/plain",
    });

    const link =
      document.createElement("a");

    link.href =
      URL.createObjectURL(blob);

    link.download =
      "text-analyzer.txt";

    link.click();
  };

  const theme = {
    background: darkMode
      ? "linear-gradient(135deg,#020617,#0f172a,#111827)"
      : "#f8fafc",
    text: darkMode
      ? "#ffffff"
      : "#0f172a",
    card: darkMode
      ? "rgba(255,255,255,0.05)"
      : "rgba(255,255,255,0.9)",
    border: darkMode
      ? "rgba(255,255,255,0.08)"
      : "#e2e8f0",
    secondary: darkMode
      ? "#94a3b8"
      : "#475569",
    inputBg: darkMode
      ? "#0f172a"
      : "#ffffff",
  };

  return (
    <main
      style={{
        ...styles.page,
        background: theme.background,
        color: theme.text,
      }}
    >
      <div style={styles.container}>
        {/* HERO */}

        <div style={styles.hero}>
          <h1 style={styles.heading}>
            Text Analyzer Pro
          </h1>

          <p
            style={{
              ...styles.subHeading,
              color: theme.secondary,
            }}
          >
            Analyze, search and manage
            text with real-time insights.
          </p>

          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            style={{
              ...styles.themeBtn,
              color: theme.text,
            }}
          >
            {darkMode ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
        </div>

        {/* TOOLBAR */}

        <div style={styles.toolbar}>
          <div
            style={styles.searchWrapper}
          >
            <Search
              size={18}
              style={{
                ...styles.searchIcon,
                color: theme.secondary,
              }}
            />

            <input
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
              placeholder="Search in text..."
              style={{
                ...styles.search,
                background:
                  theme.inputBg,
                color: theme.text,
                border: `1px solid ${theme.border}`,
              }}
            />
          </div>

          <button
            onClick={copyText}
            style={{
              ...styles.button,
              background:
                "#2563eb",
            }}
          >
            <Copy size={18} />
            Copy
          </button>

          <button
            onClick={downloadText}
            style={{
              ...styles.button,
              background:
                "#7c3aed",
            }}
          >
            <Download size={18} />
            Download
          </button>

          <button
            onClick={clearText}
            style={{
              ...styles.button,
              background:
                "#dc2626",
            }}
          >
            <Trash2 size={18} />
            Clear
          </button>
        </div>

        {/* TEXTAREA */}

        <div
          style={{
            ...styles.editorCard,
            background: theme.card,
            border: `1px solid ${theme.border}`,
          }}
        >
          <textarea
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
            placeholder="Start typing or paste your content here..."
            style={{
              ...styles.textarea,
              color: theme.text,
            }}
          />

          <div
            style={{
              ...styles.bottomBar,
              borderTop: `1px solid ${theme.border}`,
              color: theme.secondary,
            }}
          >
            <span>
              Characters:{" "}
              {charCount}
            </span>

            <span>
              Words: {wordCount}
            </span>
          </div>
        </div>

        {/* STATS */}

        <div style={styles.statsGrid}>
          <Card
            icon={
              <FileText size={22} />
            }
            title="Words"
            value={wordCount}
            theme={theme}
          />

          <Card
            icon={<Type size={22} />}
            title="Characters"
            value={charCount}
            theme={theme}
          />

          <Card
            icon={
              <AlignLeft size={22} />
            }
            title="Sentences"
            value={sentenceCount}
            theme={theme}
          />

          <Card
            icon={
              <BookOpen size={22} />
            }
            title="Reading"
            value={`${readingTime} min`}
            theme={theme}
          />

          <Card
            icon={<Mic size={22} />}
            title="Speaking"
            value={`${speakingTime} min`}
            theme={theme}
          />

          <Card
            icon={
              <Target size={22} />
            }
            title="Matches"
            value={searchMatches}
            theme={theme}
          />
        </div>

        {/* FOOTER */}

        <div
          style={{
            ...styles.footer,
            color: theme.secondary,
          }}
        >
          <p>
            <strong>Yuvika | cyuvika910@gmail.com</strong>
          </p>
        </div>
      </div>
    </main>
  );
}

function Card({
  icon,
  title,
  value,
  theme,
}) {
  return (
    <div
      style={{
        ...styles.card,
        background: theme.card,
        border: `1px solid ${theme.border}`,
      }}
    >
      <div
        style={{
          ...styles.iconWrap,
          background:
            "rgba(59,130,246,0.15)",
        }}
      >
        {icon}
      </div>

      <div
        style={{
          ...styles.cardTitle,
          color: theme.secondary,
        }}
      >
        {title}
      </div>

      <div style={styles.cardValue}>
        {value}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily:
      "Inter, Arial, sans-serif",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  hero: {
    textAlign: "center",
    marginBottom: "35px",
  },

  heading: {
    fontSize: "4rem",
    fontWeight: "800",
    marginBottom: "10px",
    background:
      "linear-gradient(90deg,#60a5fa,#a855f7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor:
      "transparent",
  },

  subHeading: {
    fontSize: "1.1rem",
    marginBottom: "20px",
  },

  themeBtn: {
    border: "none",
    cursor: "pointer",
    borderRadius: "999px",
    padding: "12px",
    background:
      "rgba(255,255,255,0.1)",
  },

  toolbar: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },

  searchWrapper: {
    position: "relative",
    flex: 1,
    minWidth: "250px",
  },

  searchIcon: {
    position: "absolute",
    left: "14px",
    top: "50%",
    transform:
      "translateY(-50%)",
  },

  search: {
    width: "100%",
    padding:
      "14px 14px 14px 42px",
    borderRadius: "14px",
    outline: "none",
  },

  button: {
    border: "none",
    color: "white",
    padding: "14px 18px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  editorCard: {
    maxWidth: "900px",
    margin: "0 auto 30px auto",
    borderRadius: "24px",
    overflow: "hidden",
    backdropFilter: "blur(14px)",
  },

  textarea: {
    width: "100%",
    minHeight: "260px",
    resize: "vertical",
    border: "none",
    outline: "none",
    background: "transparent",
    padding: "24px",
    fontSize: "16px",
    lineHeight: "1.8",
  },

  bottomBar: {
    padding: "14px 20px",
    display: "flex",
    justifyContent:
      "space-between",
    fontSize: "14px",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(180px,1fr))",
    gap: "16px",
  },

  card: {
    borderRadius: "20px",
    padding: "24px",
    textAlign: "center",
    backdropFilter: "blur(12px)",
  },

  iconWrap: {
    width: "50px",
    height: "50px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 12px",
  },

  cardTitle: {
    marginBottom: "10px",
    fontSize: "14px",
  },

  cardValue: {
    fontSize: "2rem",
    fontWeight: "700",
  },

  footer: {
    textAlign: "center",
    marginTop: "40px",
  },
};