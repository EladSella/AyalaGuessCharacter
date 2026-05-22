import urllib.request
import re

url = 'https://komisan.fandom.com/wiki/Osana_Najimi'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Find the og:image meta tag
match = re.search(r'<meta property="og:image" content="([^"]+)"', html)
if match:
    img_url = match.group(1)
    # Remove any query parameters that resize the image to get full res if possible, or just download
    print('Downloading:', img_url)
    img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
    img_res = urllib.request.urlopen(img_req)
    with open('assets/najimi.png', 'wb') as out:
        out.write(img_res.read())
    print('Najimi downloaded successfully!')
else:
    print('Could not find image on the wiki page.')
