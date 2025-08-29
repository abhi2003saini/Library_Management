import React, { useState } from "react";

export default function AddBook() {
  const [cover, setCover] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setCover(URL.createObjectURL(file));
  };

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file) setPdfFile(URL.createObjectURL(file));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>📚 Add a New Book</h1>
      <p style={styles.subHeader}>Fill in the details below to add a new book to the library</p>

      <div style={styles.card}>
        <div style={styles.row}>
          <span style={styles.icon}>📖</span>
          <input type="text" placeholder="Enter Book Name" style={styles.inputBox} />
        </div>

        <div style={styles.row}>
          <span style={styles.icon}>✍️</span>
          <input type="text" placeholder="Enter Author Name" style={styles.inputBox} />
        </div>

        <div style={styles.row}>
          <span style={styles.icon}>🖼️</span>
          <div style={styles.previewBox}>
            {cover ? (
              <img src={cover} alt="Cover Preview" style={styles.imgPreview} />
            ) : (
              <div style={styles.imgPlaceholder}>No Cover Uploaded</div>
            )}
            <input type="file" accept="image/*" style={styles.fileInput} onChange={handleImageChange} />
          </div>
        </div>

        <div style={styles.row}>
          <span style={styles.icon}>📄</span>
          <div style={styles.previewBox}>
            {pdfFile ? (
              <iframe src={pdfFile} title="PDF Preview" width="200" height="150" style={styles.pdfPreview}></iframe>
            ) : (
              <div style={styles.pdfPlaceholder}>No PDF Uploaded</div>
            )}
            <input type="file" accept="application/pdf" style={styles.fileInput} onChange={handlePdfChange} />
          </div>
        </div>

        <button style={styles.submitBtn}>Save Book</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#eef2f7",
    minHeight: "100vh",
  },
  header: {
    fontSize: "32px",
    color: "#2c3e50",
    marginBottom: "10px",
  },
  subHeader: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "30px",
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
    width: "600px",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  icon: {
    fontSize: "28px",
    minWidth: "40px",
  },
  inputBox: {
    flex: 1,
    padding: "14px",
    border: "2px solid #3498db",
    borderRadius: "8px",
    fontSize: "16px",
    transition: "0.3s",
  },
  previewBox: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  fileInput: {
    padding: "10px",
    border: "2px dashed #3498db",
    borderRadius: "8px",
    fontSize: "14px",
    width: "100%",
    cursor: "pointer",
  },
  imgPreview: {
    width: "140px",
    height: "180px",
    objectFit: "cover",
    border: "2px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
  },
  imgPlaceholder: {
    width: "140px",
    height: "180px",
    border: "2px dashed #bbb",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
    fontSize: "14px",
    background: "#f0f0f0",
  },
  pdfPreview: {
    border: "2px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
  },
  pdfPlaceholder: {
    width: "200px",
    height: "150px",
    border: "2px dashed #bbb",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
    fontSize: "14px",
    background: "#f0f0f0",
  },
  submitBtn: {
    background: "#3498db",
    color: "white",
    fontSize: "18px",
    padding: "14px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
};

