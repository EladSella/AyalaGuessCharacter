import urllib.request
import urllib.parse
import json
import os

chars = {
    "tanjiro": "Tanjiro_Kamado",
    "nezuko": "Nezuko_Kamado",
    "inosuke": "Inosuke_Hashibira",
    "zenitsu": "Zenitsu_Agatsuma",
    "midoriya": "Izuku_Midoriya",
    "bakugo": "Katsuki_Bakugo",
    "todoroki": "Shoto_Todoroki",
    "gon": "Gon_Freecss",
    "hisoka": "Hisoka_Morow",
    "komi": "Shoko_Komi", # Fixed name
    "killua": "Killua_Zoldyck",
    "kurapika": "Kurapika",
    "uraraka": "Ochaco_Uraraka",
    "rengoku": "Kyojuro_Rengoku",
    "tengen": "Tengen_Uzui"
}

if not os.path.exists("assets"):
    os.makedirs("assets")

for file_name, query in chars.items():
    print(f"Fetching {query}...")
    try:
        url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(query)}&prop=pageimages&format=json&pithumbsize=500"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as response:
            data = json.loads(response.read().decode('utf-8'))
            pages = data['query']['pages']
            page = list(pages.values())[0]
            if 'thumbnail' in page:
                img_url = page['thumbnail']['source']
                img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(img_req, timeout=5) as img_res, open(f"assets/{file_name}.png", 'wb') as out_file:
                    out_file.write(img_res.read())
                print(f"Successfully downloaded {file_name}.png")
            else:
                print(f"No thumbnail found for {query}")
    except Exception as e:
        print(f"Failed {query}: {e}")
