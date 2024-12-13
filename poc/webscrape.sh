# we can add headers using -H 
# we can also just add User-Agent with -A
curl https://tabs.ultimate-guitar.com/tab/5-seconds-of-summer/heartbreak-girl-chords-1231427 1> scrapedchords.txt 2> /dev/null
# now our page for webs scraping is inside our scrapedchords.txt file
awk -F'username&quot;:&quot;' '{if (NF > 2) {split($3, a, "&quot;"); print a[1]}}' scrapedchords.txt
# we get author name
