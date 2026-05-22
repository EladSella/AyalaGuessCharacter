import urllib.request
import urllib.parse
import json
import os
import time

chars = {
    "shinobu": "Shinobu Kocho",
    "giyu": "Giyu Tomioka",
    "muzan": "Muzan Kibutsuji",
    "allmight": "All Might",
    "aizawa": "Shota Aizawa",
    "leorio": "Leorio",
    "chrollo": "Chrollo Lucilfer",
    "netero": "Isaac Netero",
    "tadano": "Hitohito Tadano",
    "najimi": "Osana Najimi"
}

if not os.path.exists("assets"):
    os.makedirs("assets")

for file_name, query in chars.items():
    print(f"Searching Jikan API for {query}...")
    try:
        url = f"https://api.jikan.moe/v4/characters?q={urllib.parse.quote(query)}&limit=1"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode('utf-8'))
            if data['data'] and len(data['data']) > 0:
                img_url = data['data'][0]['images']['jpg']['image_url']
                print(f"Found image for {query}: {img_url}")
                img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(img_req, timeout=10) as img_res, open(f"assets/{file_name}.png", 'wb') as out_file:
                    out_file.write(img_res.read())
                print(f"Successfully downloaded {file_name}.png")
            else:
                print(f"No results found for {query}")
        time.sleep(1.5) # Jikan API rate limit
    except Exception as e:
        print(f"Failed {query}: {e}")
