# Diwali Wishes — 3D Animated Website

A polished, responsive Diwali greeting website built with Python Flask, HTML, CSS and JavaScript.

## Features
- Animated 3D-style diya with glowing flame and floating orbit rings
- Canvas fireworks and sparkles
- Personalised greeting for your friend and sender
- Responsive desktop and mobile layout
- No database required

## Run on Windows

1. Install Python 3.10 or newer.
2. Open PowerShell in this project folder.
3. Create a virtual environment (optional but recommended):

   ```powershell
   py -m venv venv
   .\\venv\\Scripts\\Activate.ps1
   ```

4. Install dependencies:

   ```powershell
   pip install -r requirements.txt
   ```

5. Start the website:

   ```powershell
   python app.py
   ```

6. Open http://127.0.0.1:5000 in Chrome.

## Personalised share links

You can create a direct greeting link with URL parameters:

`http://127.0.0.1:5000/?to=Riya&from=Raghav`

For friends to open it from their phones, deploy the app to a Python hosting service such as Render or PythonAnywhere, then share the deployed URL with `?to=FriendName&from=YourName`.

## Project structure

```text
diwali_wishes_3d/
├── app.py
├── requirements.txt
├── README.md
├── templates/
│   └── index.html
└── static/
    ├── style.css
    └── script.js
```
