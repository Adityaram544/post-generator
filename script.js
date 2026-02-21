/* ----------------------------------------------------
   Display Current Year
---------------------------------------------------- */
document.getElementById("year").innerText = new Date().getFullYear();


/* ----------------------------------------------------
   Call Google Gemini API
---------------------------------------------------- */
async function callGemini(prompt, platforms) {
  const apiKey = 

  const payload = {
    contents: [
      {
        parts: [
          {
            text: `I want you to generate social media posts based on the following prompt: ${prompt}.
            The posts should be tailored for the following platforms: ${platforms.join(", ")}.
            Only ONE post per platform, no explanation.
            Make sure each post is engaging, suitable for the respective platform, and includes relevant emojis to make it more attractive and eye-catching.
            Output ONLY ONE post per platform. Do NOT include explanations, advice, notes, or any text other than the posts.
            Format:
            Platform: [Platform]
            Post: [Content]`
          }
        ]
      }
    ]
  };

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }
    );

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

  } catch (err) {
    alert(
      "Failed to generate posts. Check API key & network.\n\nError: " + err
    );
    return "";
  }
}


/* ----------------------------------------------------
   Parse Gemini Response Text
---------------------------------------------------- */
function parseResponse(text) {
  const blocks = text.split("Platform:").filter(x => x.trim());

  return blocks.map(b => {
    const [platformRaw, postRaw] = b.split("Post:");
    return {
      platform: platformRaw.trim(),
      post: postRaw?.trim() || ""
    };
  });
}


/* ----------------------------------------------------
   On Generate Button Click
---------------------------------------------------- */
document.getElementById("generateBtn").addEventListener("click", async () => {
  const prompt = document.getElementById("userPrompt").value.trim();
  const platforms = [...document.querySelectorAll(".platform-check:checked")].map(c => c.value);

  if (!prompt) return alert("Enter prompt!");
  if (platforms.length === 0) return alert("Select at least one platform!");

  document.getElementById("postsContainer").innerHTML =
    "<p class='text-center text-secondary'>Generating...</p>";

  const result = await callGemini(prompt, platforms);
  const parsed = parseResponse(result);

  let html = "";
  parsed.forEach(p => {
    html += `
      <div class="generated-post">
        <div class="platform-label">
          ${p.platform}
          <button class="copy-btn" type="button"
            onclick="event.stopPropagation(); copyText(\`${p.post.replace(/`/g, '\\`').replace(/'/g, "\\'")}\`)"
            title="Copy">

            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'
              fill='none' viewBox='0 0 24 24' stroke='currentColor'
              style='vertical-align:middle; pointer-events:none;'>
              <rect x='9' y='9' width='13' height='13' rx='2'
                fill='none' stroke-width='2'/>
              <rect x='3' y='3' width='13' height='13' rx='2'
                fill='none' stroke-width='2'/>
            </svg>

          </button>
        </div>
        <div class="post-content">${p.post}</div>
      </div>`;
  });

  document.getElementById("postsContainer").innerHTML = html;
});


/* ----------------------------------------------------
   Copy Text with Floating Toast Notification
---------------------------------------------------- */
function copyText(text) {
  navigator.clipboard.writeText(text);

  const msg = document.createElement("div");
  msg.textContent = "Copied ✅";

  Object.assign(msg.style, {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#3700B3",
    color: "#fff",
    padding: "8px 18px",
    borderRadius: "30px",
    fontWeight: "600",
    zIndex: "9999",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    opacity: "0",
    transition: "opacity 0.4s ease"
  });

  document.body.appendChild(msg);

  setTimeout(() => (msg.style.opacity = "1"), 20);

  setTimeout(() => {
    msg.style.opacity = "0";
    setTimeout(() => msg.remove(), 400);
  }, 1500);
}

