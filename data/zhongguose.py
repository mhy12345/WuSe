import urllib
import urllib.request
from bs4 import BeautifulSoup
import json

html = urllib.request.urlopen('http://zhongguose.com/colors.json').read().decode('utf-8')
data = json.loads(html)
with open('zg.json','w') as fout:
    fout.write(json.dumps(data));
