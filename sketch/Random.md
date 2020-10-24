## Website Style

* Image
  * Card Back 
  * Card Image
* Text Font
  * Card Name
  * Card Text
  * Flavor Text
  * Artist Name
* Control Button
  * Random
  * Left and Right
* Background

```
//Hearthstone Wiki
font-family: Eczar, serif

//Blizzard
font-family: Belwe Bold, Georgia, Times, Times New Roman, serif
font-family: Open Sans, Helvetica, Arial, sans-serif

//Blizzard API
getToken = "https://us.battle.net/oauth/token"

```

```
Background { }
Cardboard  { }
Control    { }
LeftArrow  { }
Button     { }
RightArrow { }

```

## Data Retrieval

* [AJAX\*\*](https://api.jquery.com/Jquery.ajax/)
* [JSO](https://github.com/andreassolberg/jso)
* [Blizzard Passport](https://github.com/Blizzard/passport-bnet)

```
client_id = "f5ef9bd3e2444bfaba636329f2438a82"
client_secret = "oymYHiN7qgMXOVNvVGUP22LT4PodTW6f"
access_token = "USn0DNEgSl7WKVBHa92IM61h4l8ans6n0y"
token_url = "https://us.battle.net/oauth/token"
base_url = "https://us.api.blizzard.com/hearthstone/"
card_url = base_url + "cards?locale=en_US&access_token=" + access_token
meta_url = base_url + "metadata?locale=en_US&access_token=" + access_token
classic_back_ur = base_url + "cardbacks/0-classic?locale=en_US&access_token=" + access_token
random_back_url = base_url + "cardbacks/158-random?locale=en_US&access_token=" + access_token

getToken_url = token_url
getCardCount_url = card_url + "&setGroup=wild&pageSize=1"
getCard_url = card_url + "&setGroup=wild&pageSize=1&page=" + randomCard

```

```
random_back = "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/d835067892840acd343eac4626e339e6555d38c71aee7ee6ee77a5ce588fd438.png"
basic_back = "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f7d4aa4cdcf78441cc8d0bae954a55a271ad9cedc89c611b8fc0cf0859a8a32f.png"
card.image
card.name
card.flavorText
card.text
card.artistName
```

## Reference

* Hearthstone Style
  * [Hearthstone Card Library](https://playhearthstone.com/en-us/cards)
  * [Hearthstone Wiki Collection Manager](https://hearthstone.gamepedia.com/Collection_manager)

* Hearthstone API Documentation
  * [Game Data APIs](https://develop.battle.net/documentation/hearthstone/game-data-apis)
  * [Card Search](https://develop.battle.net/documentation/hearthstone/guides/card-search)
  * [Metadata](https://develop.battle.net/documentation/hearthstone/guides/metadata)

* Blizzard API Documentation
  * [Using OAuth](https://develop.battle.net/documentation/guides/using-oauth)
  * [OAuth client credentials flow](https://develop.battle.net/documentation/guides/using-oauth/client-credentials-flow)
  * [OAuth authorization code flow](https://develop.battle.net/documentation/guides/using-oauth/authorization-code-flow)

* Other
  * [freeCodeCamp - Random Quote Machine](https://codepen.io/freeCodeCamp/pen/qRZeGZ?editors=0012)






