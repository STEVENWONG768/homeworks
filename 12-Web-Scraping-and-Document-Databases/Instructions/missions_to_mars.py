from splinter import Browser
from bs4 import BeautifulSoup 
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd

executable_path = {'executable_path': ChromeDriverManager().install()}
browser = Browser('chrome', **executable_path, headless=False)

url = 'https://redplanetscience.com/'
browser.visit(url)

html = browser.html
soup = bs(html, 'html.parser')


title_results = soup.find_all('div', class_='content_title')

p_results = soup.find_all('div', class_='article_teaser_body')

news_title = title_results[0].text
news_p = p_results[0].text

print(news_title)
print(news_p)

df = pd.read_html('https://galaxyfacts-mars.com')[0]

df.head()

df.to_html()

executable_path = {'executable_path': ChromeDriverManager().install()}
browser = Browser('chrome', **executable_path, headless=False)
url = 'https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars'
browser.visit(url)
hemisphere_image_urls = []


links = browser.find_by_css("a.product-item h3")
for item in range(len(links)):
    hemisphere = {}
    
    
    browser.find_by_css("a.product-item h3")[item].click()
    
    
    sample_element = browser.find_link_by_text("Sample").first
    hemisphere["img_url"] = sample_element["href"]
    
 
    hemisphere["title"] = browser.find_by_css("h2.title").text
    
   
    hemisphere_image_urls.append(hemisphere)
    
   
    browser.back()
    
hemisphere_image_urls


