Listen Notes API

Must display logo on at least one page. 

Applications using the Listen API must not pre-fetch, cache, index, or store any content on the server side.
Note that the id and the pub_date (e.g., latest_pub_date_ms, pub_date_ms...) of a podcast or an episode are exempt from the caching restriction.

GET/podcasts/search?q=bitcoin&only_in=title%2Cdescription&language=French

podcasts/4d3fe717742d4963a85562e9f84d8c79?q=bitcoin&only_in=title&language=French

genres?top_level_only=0
genres?top_level_only=0

search/?q=bitcoin&type=podcast&only_in=title&language=French

curl -X GET --include 'https://listen-api.listennotes.com/api/v2/best_podcasts' -H 'X-ListenAPI-Key: 5c02a61e371a4e1fbb549aab65c3f07b'