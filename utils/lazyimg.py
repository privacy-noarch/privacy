#!/usr/bin/python3

'''
This script is meant for internal use for privacy.noarch,
and belongs to the public domain if possible.

DISCLAIMER: THERE IS NO ERROR-HANDLING EFFORT IN IT. USE AT YOUR OWN RISK.
'''

import sys
from pathlib import Path

from bs4 import BeautifulSoup

def lazyimg(root):
    for i in root.glob('**/*.html'):
        file = Path(i)
        html = BeautifulSoup(file.read_text(), 'html.parser')
        imgs = html.find_all('img')

        for img in imgs:
            src = img['src']

            if not src.endswith('.svg'):
                img['loading'] = 'lazy'
                print (img)

        i.write_text(str(html))

if __name__ == '__main__':
    for i in range (1, len(sys.argv)):
        lazyimg(Path(sys.argv[i]))
