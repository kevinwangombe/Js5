# Js5 – Formation Strings for Thomas Theis

A lightweight HTML/JS page that lets you design and preview **formation strings** for the *Thomas Theis* model-train layout software.

## What is a formation string?
A single, comma-separated line that encodes:


The script parses the string and draws the train formation on screen so you can visually verify before importing into Thomas Theis.

## Live Demo
https://kevinwangombe.github.io/Js5

## Folder layout
index.html    – UI & canvas  
css/  
└── style.css – tiny stylesheet  
js/  
└── app.js    – parser + renderer  

## Quick start (local)
```bash
git clone https://github.com/kevinwangombe/Js5.git
cd Js5
# open index.html in any browser
