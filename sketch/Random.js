client_id="f5ef9bd3e2444bfaba636329f2438a82"
client_secret="oymYHiN7qgMXOVNvVGUP22LT4PodTW6f"
access_token="USn0DNEgSl7WKVBHa92IM61h4l8ans6n0y"
token_url="https://us.battle.net/oauth/token"
card_url="https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token={accesstoken}"
meta_url="https://us.api.blizzard.com/hearthstone/metadata?locale=en_US&access_token={accesstoken}"
back_url="https://us.api.blizzard.com/hearthstone/cardbacks?locale=en_US&access_token={accesstoken}"

https://us.api.blizzard.com/hearthstone/cards?locale=en_US&setGroup=wild&access_token=USn0DNEgSl7WKVBHa92IM61h4l8ans6n0y

pageSize=500
cardCount=2631

1. Find card count

2631

//formula
randomCard=Math.floor(Math.random() * cardCount)
page=Math.floor(randomCard/500);
index=randomCard%500;

//300
randomeCard=300
page=1
index=300

//600
randomCard=600
page=2
index=100