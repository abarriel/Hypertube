#!usr/bin/
import requests
from bs4 import BeautifulSoup
from data import d

page = requests.get('http://www.imdb.com/title/tt0306414/') # Sur Ecoute
page = requests.get('http://www.imdb.com/title/tt0110912/') # Pulp Fiction

soup = BeautifulSoup(page.text, 'html.parser')
isMovie = True

yearMovie = soup.find(id='titleYear')
if yearMovie:
    d['year'] = yearMovie.find("a").contents[0]
else:
    yearSeri
# d['title'] = soup.find(class_='title_wrapper').find("h1").contents[0].split(r"\xa", 1)[0]


    