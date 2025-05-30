# 🐰 Shimi's Gift – A Personalised Pop-Up Surprise

**A digital love letter disguised as an animated pixel art experience.**  
Built to celebrate our anniversary with music, visuals, and heartfelt details,
made for a special someone 💜

---

## Highlights

- 🎀 Custom pixel art gallery (6 animated scenes)
- 🎵 Smooth music playback with minimal UI
- 🐾 Interactive tap-to-progress mechanic
- 💬 Final message reveal with animated heart & date
- 🎨 Soft pastel UI with floating effects
- 📱 Responsive design (desktop & mobile)

---
## 📁 Project Structure
```bash
shimi-gift/
├── assets/
│ ├── image-content/ # images (1–6)
│ ├── bunny-bg.jpeg
│ ├── pixel-heart.gif
│ └── bunny-favicon.ico # Shortcut icon
├── index.html # Main webpage
├── style.css # Styles & animations
├── index.js # Tap logic, audio, transitions
└── README.md # Project overview
```
---

## 💻 How to Use Locally on Desktop


### 🪟 Windows – Manual Shortcut Setup with Icon

1. Go to your local folder (e.g., `shimi-gift`), and **right-click on the Desktop** > `New` > `Shortcut`.
2. For the shortcut location, paste this line (adjust the path if needed):
```bash
"C:\Program Files\Google\Chrome\Application\chrome.exe" --app="file:///C:/Users/name/shimi-gift/index.html"
```
🔁 Replace `"name"` with your actual Windows username.

3. Click **Next**, then name it something cute — like `💜 From Shimi`.
4. Right-click your new shortcut > `Properties`.
5. Under **Shortcut > Change Icon...**, browse for your custom `.ico` file (e.g., `bunny-favicon.ico`) from your `assets/` folder.
6. Click Apply → Done!

🌟 You now have a custom Chrome app window that opens the gift locally, with your chosen icon!

---

### 🍎 Mac – Manual Shortcut Setup with Icon

1. Open **Automator** → Choose **"Application"**.
2. In the left search bar, find and drag **"Run Shell Script"**.
3. Paste this code in the shell box:

```bash
open -a "Google Chrome" "file:///Users/username/Downloads/shimi-gift/index.html"
```
🔁 Replace "username" with your actual Mac username and adjust the path if needed.

4. Go to File → Save and name your app (e.g., fromshimi.app), saving it to Desktop or Applications.
5. To set a custom icon:
      - Open the .app file's Get Info panel.
      - Copy your .png or .icns icon in Preview (Cmd + C).
      - Click the app icon in the info panel and paste (Cmd + V).

Now your gift opens in a browser with a personalised icon 🐰

---

## Built With

- HTML, CSS, JavaScript
- Audio API for playback & progress bar
- Pixel-style design + hover/animation effects
- Hosted on Netlify

---

## 🧾 Project Notes

> This is a **read-only GitHub repository** – shared for creative showcasing.  
> **Only the recipient** has full access to the surprise, but anyone curious is welcome to view the code.
> The animations, images, and sounds were handcrafted and themed around our shared interests 💜

---

## Creator

Made by Sasha 💌
