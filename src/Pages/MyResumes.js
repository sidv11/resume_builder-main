import React from "react";
import { Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const MyResumes = () => {
  const pdfKeys = Object.keys(localStorage);
  const styles = {
    pdfContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center", // Center items
    },
    pdfItem: {
      margin: "10px",
      width: "30%",
      minWidth: "300px", //for small display
    },
    pdfFrame: {
      border: "1px solid #ccc",
    },
  };
  const navigate = useNavigate();
  const clearLocalStorage = () => {
    localStorage.clear();
    navigate("/ResumeTemplates");
    // window.location.reload(); //for refreshing the page after clearing the local storage data
  };
  return (
    <div>
      <Container>
        <h2>My Resumes</h2>
        <div style={{ textAlign: "right" }}>
          <Button
            sx={{ marginTop: "5px", marginBottom: "5px" }}
            variant="contained"
            color="error"
            onClick={clearLocalStorage}
          >
            clear All
          </Button>
        </div>
        {pdfKeys.length < 1 ? (
          <h1 style={{ textAlign: "center" }}>
            Nothing To Show Create One To View It Here.
          </h1>
        ) : (
          <div style={styles.pdfContainer}>
            {pdfKeys.map((key) => {
              if (key.endsWith(".pdf")) {
                const savedPdfBlobUrl = localStorage.getItem(key);

                return (
                  <div key={key} style={styles.pdfItem}>
                    {savedPdfBlobUrl && (
                      <iframe
                        title="PDF Viewer"
                        src={savedPdfBlobUrl}
                        width="100%"
                        height="500px"
                        style={styles.pdfFrame}
                      />
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default MyResumes;
