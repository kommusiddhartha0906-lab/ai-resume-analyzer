<!DOCTYPE html>
<html>
<head>
  <title>AI Resume Analyzer</title>
</head>
<body>

  <h1>AI Resume Analyzer</h1>

  <textarea id="resume" rows="10" cols="50" placeholder="Paste your resume here"></textarea>
  <br><br>

  <button onclick="analyzeResume()">Analyze</button>

  <h3>Result:</h3>
  <pre id="result"></pre>

  <script>
    async function analyzeResume() {
      const resume = document.getElementById("resume").value;

      const response = await fetch("http://localhost:5050/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ resume })
      });

      const data = await response.json();
      document.getElementById("result").innerText = data.result;
    }
  </script>

</body>
</html>